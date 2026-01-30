import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas bg-dark" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">Main</li>

        <li className="nav-item">
          <Link href="/" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-cube menu-icon"></i>
            </span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/users" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account menu-icon"></i>
            </span>
            <span className="menu-title">Users</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/settings" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-settings menu-icon"></i>
            </span>
            <span className="menu-title">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
