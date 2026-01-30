export default function Navbar() {
  return (
    <nav className="navbar default-layout-navbar fixed-top d-flex flex-row bg-dark m-0 p-0">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center bg-dark justify-content-center">
        <a className="navbar-brand brand-logo" href="/">
          <img src="/assets/images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="/">
          <img src="/assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>

      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="mdi mdi-menu"></span>
        </button>

        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              <div className="nav-profile-img">
                <img src="/assets/images/faces/face28.png" alt="user" />
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">Admin</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
