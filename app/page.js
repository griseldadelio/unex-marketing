'use client';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import SimpleCard from './components/SimpleCard';
import AccordionCard from './components/AccordionCard';
import Contact from './components/ContactSection';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Flags from './components/Flags';

export default function Page() {
  const accordionData = [
    {
      header: 'Plan',
      body:
        'Publicar sin un plan no tiene sentido. Juntos definiremos la audiencia adecuada, el mensaje y el flujo de trabajo para tu marca, que luego combinamos en una estrategia de contenido cuidadosamente diseñada.',
    },
    {
      header: 'Managment',
      body:
        '¿Necesitas un socio confiable para gestionar tus redes sociales? Ya sea que proveas el contenido o no, te respaldamos en la ejecución de tu estrategia de contenido.',
    },
    {
      header: 'Contenido',
      body:
        ' ¿Quieres apostar por la máxima calidad de producción? ¿O prefieres enfocarte en la máxima eficiencia con recursos limitados? El buen contenido es la esencia de las redes sociales, ¡estamos aquí para ayudarte!',
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Container>
        <SimpleCard
          back="/images/web.png"
          title="< Hello World/>"
          description="Webdesign"
          text="
          El diseño web se trata de equilibrio:
          ¿Cómo podemos combinar tu historia con una experiencia fluida para los usuarios? El reto principal es encontrar juntos la solución a esa pregunta. Una vez que lo logramos, crear un diseño visual impactante es simplemente el toque final que hace que tu marca destaque "
        />
        <AccordionCard
          back="images/social-media.png"
          description="Social Media"
          title="No seas como los demás"
          accordionData={accordionData}
        />
        <SimpleCard
          back="images/branding.png"
          title="Las marcas más poderosas cuentan historias simples."
          description="Branding & estrategia"
          text="Hoy en día, es más fácil que nunca llegar a las personas. Cualquiera puede lanzar una campaña en redes sociales o publicidad con un presupuesto reducido. El problema es que estamos en un entorno saturado de 'marketing' que compite por captar la atención. Nuestra solución es volver a lo esencial del marketing verdadero: la historia detrás de tu marca."
        />
      </Container>
      <Flags />
      <Contact />
      <Footer />
    </>
  );
}
