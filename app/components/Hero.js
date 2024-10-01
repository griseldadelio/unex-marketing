'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';
import { Row, Col } from 'react-bootstrap';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Duración más corta para respuesta más rápida
      easing: 'ease-out-cubic',
      once: true,
    });

    const handleScroll = () => {
      const imageCol = document.querySelector('.parallax-image');

      const scrollPosition = window.pageYOffset;

      // Movimiento parallax para la imagen
      imageCol.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup para evitar fugas de memoria
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="container hero-section mt-5">
      <Row>
        {/* Texto a la izquierda */}
        <Col className="text-center m-5">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Transforma tu presencia digital. <br /> ¡Atrae más clientes!
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Nos especializamos en gestionar tus redes, optimizar anuncios y
            generar leads efectivos. Tú creces, nosotros te acompañamos.
          </p>
          <div
            className="text-center mt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="btn btn-custom">
              Haz crecer tu negocio ahora
            </button>
          </div>
        </Col>

        {/* Imagen a la derecha con parallax */}
        <Col className="position-relative text-center">
          <div className="parallax-image" style={{ position: 'relative' }}>
            <Image
              src="/images/heroimg.png"
              alt="Hero Image"
              width={600}
              height={500}
              priority
            />
          </div>

          {/* Recuadros superpuestos con parallax */}
          <div
            className="box-1 position-absolute"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="box-content box-img1" />
          </div>
          <div
            className="box-2 position-absolute"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="box-content box-img2" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
