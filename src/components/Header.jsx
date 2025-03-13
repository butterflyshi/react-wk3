function Header() {
    return (
    <header>
        <div className="header">
          <h1>Vegetables</h1>
          <div className="header-right">
            <div className="icon">
              <img src="image/btn_fb.png"/>
              <img src="image/btn_ig.png"/>
            </div>
            <div className="icon-right">
              <h6>|</h6>
              <p className="login">LOGIN</p>
              <p className="join">JOIN</p>
            </div>
          </div>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="nli-link">Home</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">About Us</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Vegetables</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Online</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Contact</a>
            </li>
          </ul>
        </nav>
    </header>
    );
}

export default Header;