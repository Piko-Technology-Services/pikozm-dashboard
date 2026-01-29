"use client";

import { register } from "@/services/auth.service";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await register(form);
      sessionStorage.setItem(
        "auth_message",
        "Registration successful. Please log in to continue."
      );
      router.push("/auth/login");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Registration failed. Please try again."
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

          <h4>New here?</h4>
          <h6 className="font-weight-light">
            Signing up is easy. It only takes a few steps
          </h6>

          {error && (
            <div className="alert alert-danger mt-3">{error}</div>
          )}

          <form className="pt-3" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Role */}
            <div className="form-group">
              <select
                name="role"
                className="form-control form-control-lg"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="guest">Guest</option>
                <option value="partner">Partner</option>
                <option value="volunteer">Volunteer</option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <div className="form-group">
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="password_confirmation"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  required
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    <i
                      className={`mdi ${
                        showConfirmPassword ? "mdi-eye-off" : "mdi-eye"
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
                    Creating account...
                  </>
                ) : (
                  "SIGN UP"
                )}
              </button>
            </div>

            <div className="text-center mt-4 font-weight-light">
              Already have an account?{" "}
              <a href="/auth/login" className="text-primary">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
