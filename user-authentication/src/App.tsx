// import LoginForm from "./components/LoginForm";
{
  /* <LoginForm /> */
}
import "./App.css";
import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length<8){
      setError("Password must be at least 8 characters long");
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/[!@#$%^&*()<>,.]/.test(password))
    {
setError("Password must contain at least one special character");
      return;
    }
     setError("");
    console.log("Form submitted");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
          Create Account
        </h2>
        <form onSubmit={submitHandler} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
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
              value={email}
              required
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              value={confirmPassword}
              required
              placeholder="••••••••"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className="w-full border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:outline-none rounded-lg px-4 py-2"
            />
          </div>
          {error &&(
            <p className="text-red-500 font-medium text-center ">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a className="text-pink-500 hover:underline cursor-pointer">Login</a>
        </p>
      </div>
    </div>
  );
}
