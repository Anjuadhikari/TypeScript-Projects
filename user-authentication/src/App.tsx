import React, { useState } from "react";
import "./App.css";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type User = {
  fullName: string;
  email: string;
  password: string;
};

export default function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = form;

    // Validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/[!@#$%^&*()<>,.]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setError("Password must contain at least one uppercase and one lowercase letter");
      return;
    }

    // All validation passed
    setError("");

    const newUser: User = { fullName, email, password };
    setUsers((prev) => [...prev, newUser]);

    console.log("Form submitted", newUser);

    setForm({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
      className: "bg-pink-100 text-pink-800 font-semibold",
      progressClassName: "bg-pink-700",
    });
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-pink-50 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
          Create Account
        </h2>
        <form onSubmit={submitHandler} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:outline-none rounded-lg px-4 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:outline-none rounded-lg px-4 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:outline-none rounded-lg px-4 py-2"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:outline-none rounded-lg px-4 py-2"
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 font-medium text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a className="text-pink-500 hover:underline cursor-pointer">Login</a>
        </p>
      </div>

      {/* Show registered users */}
      {users.length > 0 && (
        <div className="ml-10 mt-2 bg-white rounded-xl shadow-md p-4 max-w-sm">
          <h3 className="text-lg font-semibold text-pink-600 mb-2">
            Registered Users:
          </h3>
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li key={index} className="bg-pink-100 rounded-lg p-2">
                <p className="text-pink-800 font-bold">{user.fullName}</p>
                <p className="text-pink-700 text-sm">{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
