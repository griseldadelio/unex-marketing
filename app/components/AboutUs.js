'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de la animación
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <section className="container-fluid bg-light about-section position-relative">
      <div className="row justify-content-center text-left">
        <div className="col-lg-8">
          {/* Texto principal */}
          <h2 className="about-heading" data-aos="fade-up">
            Ayudamos a marcas a crecer, conectar y construir relaciones sólidas
            con su audiencia ideal
          </h2>
        </div>
      </div>

      <div className="row justify-content-center text-left">
        <div className="col-lg-8">
          <p data-aos="fade-up" data-aos-delay="200">
            Hoy en día, lanzar una campaña publicitaria es más fácil que nunca.
            Pero, ¿realmente está llegando a las personas adecuadas? Somos una
            agencia creativa activa en Argentina y España, y nuestra
            especialidad es crear estrategias digitales efectivas que cuentan
            historias auténticas.
            <br /> Nos enfocamos en el crecimiento sostenible de tu marca,
            logrando resultados que perduran.
          </p>
        </div>
      </div>
      {/* Línea animada detrás del texto */}
      <div className="line-container">
        <svg
          className="animated-line"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-450 -30.1947 794 96.19"
          preserveAspectRatio="none"
        >
          <path
            d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2"
            fill="none"
            stroke="#f2a900"
            strokeWidth="10"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
