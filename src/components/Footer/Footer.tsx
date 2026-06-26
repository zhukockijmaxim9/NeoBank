import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="footer-info">
          <img src="/icons/logo1.png" alt="NeoBank logo" width={160} height={50} />
          <address>
            <a href="tel:+74959842513" className="phone">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="mail">
              info@neoflex.ru
            </a>
          </address>
        </div>

        <nav className="links" aria-label="Footer navigation">
          <ul>
            <li>
              <Link to="/about">About bank</Link>
            </li>
            <li>
              <Link to="/ask">Ask a Question</Link>
            </li>
            <li>
              <Link to="/quality">Quality of service</Link>
            </li>
            <li>
              <Link to="/requisites">Requisites</Link>
            </li>
            <li>
              <Link to="/press-center">Press center</Link>
            </li>
            <li>
              <Link to="/career">Bank career</Link>
            </li>
            <li>
              <Link to="/investors">Investors</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/business-processes">Business and processes</Link>
            </li>
            <li>
              <Link to="/compliance">Compliance and business ethics</Link>
            </li>
          </ul>
        </nav>

        <p>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </footer>
    </div>
  );
}

export default Footer;
