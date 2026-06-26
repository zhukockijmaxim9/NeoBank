import { Link } from 'react-router-dom';
import './Header.scss';
import '../../styles/shared.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-brand">
          <Link className="logo" to="/">
            NeoBank
          </Link>
          <Link className="button-primary online-bank-tablet" to="/online-bank">
            Online Bank
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/credit-card">
                Credit card
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resources">
                Resourses
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="button-primary online-bank-desktop" to="/online-bank">
          Online Bank
        </Link>
      </header>
    </div>
  );
}

export default Header;
