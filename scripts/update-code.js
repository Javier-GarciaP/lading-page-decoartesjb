import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const GITIGNORE_PATH = './.gitignore';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (/\.(astro|tsx|jsx|js|ts|json|md|mdx)$/i.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

function updateCode() {
  console.log("🔍 Buscando y actualizando código fuente...");
  const files = getAllFiles(SRC_DIR);
  let updatedFiles = 0;

  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/(?<!favicon)\.(png|jpg|jpeg)\b/gi, '.webp');

    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      updatedFiles++;
      console.log(`✅ Actualizado: ${file}`);
    }
  });

  console.log(`\n🎉 Se actualizaron ${updatedFiles} archivos fuente para usar .webp`);
}

function updateGitignore() {
  console.log("\n🔒 Actualizando .gitignore...");
  let content = '';
  if (fs.existsSync(GITIGNORE_PATH)) {
    content = fs.readFileSync(GITIGNORE_PATH, 'utf8');
  }

  const ignoreRules = `\n# Ignorar imágenes antiguas (ya pasamos a webp)\npublic/**/*.jpg\npublic/**/*.jpeg\npublic/**/*.png\n!public/favicon.png\n`;

  if (!content.includes('!public/favicon.png')) {
    fs.appendFileSync(GITIGNORE_PATH, ignoreRules);
    console.log(`✅ Reglas agregadas al .gitignore`);
  } else {
    console.log(`ℹ️ El .gitignore ya estaba actualizado.`);
  }
}

updateCode();
updateGitignore();
