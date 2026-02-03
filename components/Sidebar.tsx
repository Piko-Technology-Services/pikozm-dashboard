"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SidebarSkeleton from "./SidebarSkeleton";

interface MenuItem {
  title: string;
  href?: string;
  icon: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "mdi-view-dashboard",
  },
  {
    title: "Digital Impact",
    icon: "mdi-chart-bar",
    children: [
      { title: "Donations", href: "/dashboard/digital-impact/donations", icon: "mdi-cash-multiple" },
      { title: "Support", href: "/dashboard/digital-impact/support", icon: "mdi-lifebuoy" },
      { title: "Team", href: "/dashboard/digital-impact/team", icon: "mdi-account-group" },
      { title: "Partners", href: "/dashboard/digital-impact/partners", icon: "mdi-handshake" },
    ],
  },
  {
    title: "Academy",
    icon: "mdi-school",
    children: [
      { title: "Courses", href: "/dashboard/academy/courses", icon: "mdi-book-open" },
      { title: "Webinars", href: "/dashboard/academy/webinars", icon: "mdi-video" },
      { title: "Students", href: "/dashboard/academy/students", icon: "mdi-account-multiple" },
    ],
  },

  {
    title: "Store",
    icon: "mdi-store",
    children: [
      { title: "Products", href: "/dashboard/store/products", icon: "mdi-package-variant" },
      { title: "Sales", href: "/dashboard/store/sales", icon: "mdi-cash-register" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | undefined>();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {

    if (pathname) { setCurrentPath(pathname); setIsLoaded(true); }
    // Auto-open parent menu if a child route is active
    menuItems.forEach((item) => {
      if (item.children?.some((c) => pathname.startsWith(c.href!))) {
        setOpenMenus((prev) => ({ ...prev, [item.title]: true }));
      }
    });
  }, [pathname]);

  if (!isLoaded) { return (
    <SidebarSkeleton />
   ); }

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <nav className="sidebar sidebar-offcanvas bg-dark" id="sidebar">
      <ul className="nav">

        {menuItems.map((item) => {
          const isOpen = openMenus[item.title];

          return (
            <li key={item.title} className="nav-item bg-dark">

              {/* Parent with children */}
              {item.children ? (
                <>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMenu(item.title);
                    }}
                  >
                    <span className="icon-bg">
                      <i className={`mdi ${item.icon} menu-icon`}></i>
                    </span>
                    <span className="menu-title">{item.title}</span>
                    <i className={`menu-arrow ${isOpen ? "open" : ""}`}></i>
                  </a>

                  <div className={`collapse ${isOpen ? "show" : ""}`}>
                    <ul className="nav flex-column sub-menu bg-dark">
                      {item.children.map((child) => (
                        <li key={child.href} className="nav-item">
                          <Link
                            href={child.href!}
                            className={`nav-link ${
                              pathname === child.href ? "active" : ""
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                /* Single link */
                <Link href={item.href!} className="nav-link">
                  <span className="icon-bg">
                    <i className={`mdi ${item.icon} menu-icon`}></i>
                  </span>
                  <span className="menu-title">{item.title}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
