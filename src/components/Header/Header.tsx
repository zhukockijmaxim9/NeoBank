import { Link } from 'react-router-dom';
import './Header.scss';
import '../../styles/shared.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <Link className="logo" to="/">
          NeoBank
        </Link>
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
        <Link className="button-primary" to="/online-bank">
          Online Bank
        </Link>
      </header>
    </div>
  );
}

export default Header;
