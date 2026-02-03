"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");

        console.log("Fetching user info with token:", token);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        console.log("Fetch /auth/me status:", res.status);

        if (!res.ok) {
          const text = await res.text();
          console.error("API returned error:", text);
          setUser(null);
          return;
        }

        const data = await res.json();
        console.log("User data from API:", data);
        setUser(data.user);

      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    }

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include", // send cookie to backend
      });
      router.push("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="navbar default-layout-navbar fixed-top d-flex flex-row bg-dark m-0 p-0">
      {/* Brand */}
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
                <p className="mb-1 text-white">{user?.name ?? "Loading..."}</p>
              </div>
            </a>

            <div className="dropdown-menu navbar-dropdown">
              {user ? (
                <>
                  <div className="dropdown-item">
                    <strong>Name:</strong> {user.name}
                  </div>
                  <div className="dropdown-item">
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className="dropdown-item">
                    <strong>Role:</strong> {user.role}
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <div className="dropdown-item">Loading...</div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
