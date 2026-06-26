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
              <a href="/about">About bank</a>
            </li>
            <li>
              <a href="/ask">Ask a Question</a>
            </li>
            <li>
              <a href="/quality">Quality of service</a>
            </li>
            <li>
              <a href="/requisites">Requisites</a>
            </li>
            <li>
              <a href="/press-center">Press center</a>
            </li>
            <li>
              <a href="/career">Bank career</a>
            </li>
            <li>
              <a href="/investors">Investors</a>
            </li>
            <li>
              <a href="/analytics">Analytics</a>
            </li>
            <li>
              <a href="/business-processes">Business and processes</a>
            </li>
            <li>
              <a href="/compliance">Compliance and business ethics</a>
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
