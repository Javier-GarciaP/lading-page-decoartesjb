import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const sendEmail = async (to, subject, html, apiKey) => {
  const key = apiKey || "re_9fuEHeNM_BUFjzuAJ9eoSc2YsVezZmbYD";
  const resend = new Resend(key);
  return await resend.emails.send({
    from: "Event Planner <onboarding@resend.dev>",
    to: ["josejaviergarciap123@gmail.com"],
    subject,
    html
  });
};

const prerender = false;
const POST = async ({
  request,
  locals
}) => {
  try {
    const data = await request.json();
    const {
      nombre,
      email,
      telefono,
      tipoEvento,
      fechaEvento,
      presupuesto,
      invitados,
      mensaje
    } = data;
    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({
        error: 'Faltan campos requeridos'
      }), {
        status: 400
      });
    }
    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #ccc; padding-bottom: 10px;">Nuevo Pedido de Evento ✨</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p><strong>Cliente:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || 'No indicado'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
          
          <h3 style="color: #666;">Detalles del Evento</h3>
          <p><strong>Tipo de Evento:</strong> ${tipoEvento || 'No especificado'}</p>
          <p><strong>Fecha Prevista:</strong> ${fechaEvento || 'A convenir'}</p>
          <p><strong>Invitados Estimados:</strong> ${invitados || 'No indicado'}</p>
          <p><strong>Presupuesto Aprox:</strong> ${presupuesto || 'No indicado'}</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
          <h3 style="color: #666;">Mensaje Adicional</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${mensaje}</p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 20px; text-align: center;">
          Este mensaje fue enviado desde el formulario de contacto de DecoArtes JB.
        </p>
      </div>
    `;
    const {
      error
    } = await sendEmail('josejaviergarciap123@gmail.com', `✨ Nueva Consulta de Evento: ${nombre}`, html, locals?.runtime?.env?.RESEND_API_KEY);
    if (error) {
      console.error('Error Resend:', error);
      return new Response(JSON.stringify({
        error: error.message
      }), {
        status: 500
      });
    }
    return new Response(JSON.stringify({
      success: true
    }), {
      status: 200
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: 'Error interno del servidor'
    }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
