import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top"
        style={{
          height: '90px',
        }}
      >
        <div className="container">
          <Link href="/">
            <Image
              src="/images/unexlogo.png"
              alt="Unex Logo"
              width={170} // Ancho del logo
              height={120} // Altura del logo (ambos valores deben estar definidos)
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#services"
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
