'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Enviando...');

    try {
      const res = await fetch('http://localhost:3000/api/SendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Correo enviado correctamente');
        setFormData({ name: '', email: '', phone: '', comments: '' });
      } else {
        setStatus('Error al enviar el correo');
      }
    } catch (error) {
      setStatus('Error al enviar el correo');
    }
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light text-dark">
      <Container>
        <Row>
          <Col className=" d-flex flex-column align-items-left">
            <h2 className="underline">INFORMACIÓN</h2>
            <svg width="180" height="50" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="10" style={{ fill: '#ffcc00' }} />
            </svg>
            <ul className="list-unstyled mb-4 text-left">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt" /> &nbsp;Avenida de Atenas
                46 bajo B - Las rozas de Madrid, España.
              </li>
              <li className="mb-3">
                <i className="fas fa-map-marker-alt" /> &nbsp;Aranguren 2443 –
                Ciudad Autónoma de Buenos Aires, Argentina
              </li>
              <li className="mb-3">
                <i className="far fa-envelope" /> &nbsp; info@unextalent.com
              </li>
              <li className="mb-3">
                <i className="fab fa-whatsapp" /> &nbsp; +34 681117966
              </li>
              <li className="mb-3">
                <i className="fab fa-whatsapp" />
                &nbsp; +54 1154057431
              </li>
              <li className="mb-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61563044072420"
                >
                  <i className="fab fa-facebook-f" />
                  &nbsp; @unextalent
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  target="_blank"
                  href="https://www.instagram.com/unextalent"
                >
                  <i className="fab fa-instagram" />
                  &nbsp; @unextalent
                </Link>
              </li>
            </ul>
          </Col>

          <Col className=" d-flex flex-column align-items-left">
            <h2 className="underline ">FORMULARIO DE CONTACTO</h2>
            <svg width="300" height="50" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="10" style={{ fill: '#ffcc00' }} />
            </svg>
            <p className="mb-4">
              Completá el formulario para contactarte con nosotros.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre y apellido"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="comments"
                  rows="4"
                  placeholder="Mensaje"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom ">
                Enviar
              </button>
              <p>{status}</p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
