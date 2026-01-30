"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface MenuItem {
  title: string;
  href: string;
  icon: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: "mdi-view-dashboard" },
  { title: "Digital Impact", href: "/dashboard/digital-impact", icon: "mdi-chart-bar" },
  {
    title: "Academy",
    href: "/dashboard/academy",
    icon: "mdi-school",
    children: [
      { title: "Courses", href: "/dashboard/academy/courses", icon: "mdi-book-open" },
      { title: "Workshops", href: "/dashboard/academy/workshops", icon: "mdi-account-tie" },
    ],
  },
  { title: "Talent", href: "/dashboard/talent", icon: "mdi-account-star" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);  

  // Wait until client-side hydration to set active path
  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
      setIsLoaded(true);
    }
  }, [pathname]);

  if (!isLoaded) {
    return <div className="spinner-border text-primary" role="status">
      
    </div>; 
  }


 const renderMenu = (items: MenuItem[]) =>
  items.map((item) => {
    // Dashboard exact match, others match nested
    const isActive =
      item.href === "/dashboard"
        ? currentPath === "/dashboard"
        : currentPath === item.href || (currentPath && currentPath.startsWith(item.href + "/"));

    return (
      <li key={item.href} className={`nav-item ${isActive ? "active" : ""}`}>
        <Link className="nav-link" href={item.href}>
          <i className={`mdi ${item.icon} menu-icon`}></i>
          <span className="menu-title">{item.title}</span>
        </Link>

        {item.children && (
          <ul className="sub-menu">
            {renderMenu(item.children)}
          </ul>
        )}
      </li>
    );
  });


  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">{renderMenu(menuItems)}</ul>
    </nav>
  );
}
