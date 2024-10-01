import '../public/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from './components/Whatsapp';

export const metadata = {
  title: 'Unex Marketing',
  description: 'Unex Marketing - Agencia de marketing digital',
  openGraph: {
    title: 'Unex Marketing',
    description: 'Tu agencia de marketing digital',
    url: 'https://tusitio.com',
    siteName: 'Unex Marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unex Marketing',
    description: 'Agencia de marketing digital',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link de Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@1,600&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
