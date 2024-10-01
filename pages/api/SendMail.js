import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, comments } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      connectionTimeout: 60000,
      timeout: 60000,
    });

    try {
      await transporter.sendMail({
        from: `"Web Unex Marketing" <info@unextalent.com>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Nuevo mensaje de ${name}`,
        html: `
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p> <!-- Aquí incluyes el email del usuario -->
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Comentarios:</strong> ${comments}</p>
        
        `,
      });

      // Enviar respuesta de éxito
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.log('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
