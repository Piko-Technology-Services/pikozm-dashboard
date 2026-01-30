"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="text-center">
        <img
          src="/assets/images/logo-dark.svg"
          alt="Piko Logo"
          style={{ width: 120 }}
          className="mb-4"
        />

        <h1 className="display-4 fw-bold">404</h1>
        <h4 className="mb-3">Page not found</h4>

        <p className="text-muted mb-4">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link href="/dashboard" className="btn btn-primary px-4">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
