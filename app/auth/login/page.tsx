"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { login } from "@/services/auth.service";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  useEffect(() => {
  const msg = sessionStorage.getItem("auth_message");
  if (msg) {
    setSuccess(msg);
    sessionStorage.removeItem("auth_message");
  }
}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login({ email, password });
      console.log("Login response:", res);  
      
      localStorage.setItem("token", res.data.token);
      // Store token with expiration in localStorage
      const expiresAt = Date.now() + 30 * 60 * 1000; // 30 minutes from now
      localStorage.setItem("token_expires_at", expiresAt.toString());

      // // ✅ store token in cookie
      Cookies.set("token", res.data.token, {
        expires: 1 / 48, // 30 minutes (1 day / 48)
        secure: false, // true in production with HTTPS
        sameSite: "lax",
      });
      // 👉 redirect after login
      router.replace("/dashboard");

    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex-grow w-100">
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left p-5">
          <div className="brand-logo text-center mb-4">
            <img src="/assets/images/logo-dark.svg" alt="Piko Logo" />
          </div>

          <h4>Welcome back!</h4>
          <h6 className="font-weight-light">Sign in to continue.</h6>

          {error && (
            <div className="alert alert-danger mt-3">{error}</div>
          )}

          {success && (
            <div className="alert alert-success mt-3">{success}</div>
          )}

          {error && (
            <div className="alert alert-danger mt-3">{error}</div>
          )}


          <form onSubmit={handleSubmit} className="pt-3">
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`mdi ${
                        showPassword ? "mdi-eye-off" : "mdi-eye"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    />
                    Signing in...
                  </>
                ) : (
                  "SIGN IN"
                )}
              </button>
            </div>

            <div className="my-2 d-flex justify-content-between align-items-center">
              <div className="form-check">
                <label className="form-check-label text-muted">
                  <input type="checkbox" className="form-check-input" /> Keep me
                  signed in
                </label>
              </div>
              <Link href="#" className="auth-link text-black">
                Forgot password?
              </Link>
            </div>

            <div className="text-center mt-4 font-weight-light">
              Don’t have an account?{" "}
              <Link href="/auth/register" className="text-primary">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
