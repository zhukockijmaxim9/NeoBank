import './Header.scss';
import '../../styles/shared.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <p>NeoBank</p>
        <nav>
          <ul>
            <li>Credit card</li>
            <li>Product</li>
            <li>Account</li>
            <li>Resourses</li>
          </ul>
        </nav>
        <button className="button-primary">Online Bank</button>
      </header>
    </div>
  );
}

export default Header;
