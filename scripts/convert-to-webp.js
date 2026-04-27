import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = './public';

// Función para obtener todos los archivos de forma recursiva
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      // Filtrar solo jpg, jpeg y png (ignoramos el favicon.png para no romper Google)
      if (/\.(jpg|jpeg|png)$/i.test(file) && file !== 'favicon.png') {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

async function optimizeImages() {
  console.log("🔍 Buscando imágenes en la carpeta public...");
  const images = getAllFiles(PUBLIC_DIR);
  console.log(`🖼️ Se encontraron ${images.length} imágenes para convertir.\n`);

  let completadas = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    
    try {
      // Convierte y guarda en WebP con calidad del 80% (excelente balance entre peso y calidad)
      await sharp(imgPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      completadas++;
      console.log(`✅ [${completadas}/${images.length}] Convertida: ${path.basename(imgPath)} -> ${path.basename(webpPath)}`);
      
      // DESCOMENTA ESTA LÍNEA SI QUIERES BORRAR LA IMAGEN ORIGINAL DESPUÉS DE CONVERTIRLA
      // fs.unlinkSync(imgPath);
      
    } catch (err) {
      console.error(`❌ Error al convertir ${imgPath}:`, err.message);
    }
  }

  console.log(`\n🎉 ¡Proceso terminado! Se convirtieron ${completadas} imágenes a WebP.`);
  console.log(`⚠️ IMPORTANTE: Recuerda actualizar tu código para que los src apunten a .webp en lugar de .jpg/.png`);
}

optimizeImages();
