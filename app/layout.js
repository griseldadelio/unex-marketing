import '../public/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from './components/Whatsapp';

export const metadata = {
  title: 'Unex Talent | Agencia de Marketing Digital',
  description:
    'Unex Talent te ayuda a potenciar tu marca con estrategias de marketing digital y manejo de redes sociales. ¡Aumenta tu visibilidad online con nosotros!',

  openGraph: {
    type: 'website',
    title: 'Unex Talent | Agencia de Marketing Digital',
    description:
      'Descubre cómo Unex Talent puede llevar tu negocio al siguiente nivel con estrategias personalizadas en redes sociales, publicidad digital, y más.',
    url: 'https://unextalent.com',
    siteName: 'Unex',
    images: [
      {
        url: 'https://unextalent.com/images/unexlogo.png',
        width: 1200,
        height: 630,
        alt: 'Unex Talent - Agencia de Marketing Digital',
      },
    ],
  },

  facebook: {
    url: 'https://www.facebook.com/unextalent',
    title: 'Unex Talent | Agencia de Marketing Digital',
    description:
      'Somos Unex Talent, una agencia de marketing digital que ofrece estrategias personalizadas para aumentar tu presencia en redes sociales.',
    image: 'https://unextalent.com/images/unexlogo.png', // Reemplaza con tu imagen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
