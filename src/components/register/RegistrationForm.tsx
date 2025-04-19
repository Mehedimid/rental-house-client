"use client";

import React, { useState } from "react";
import Link from "next/link";
import SecondaryButton from "@/components/shared/SecondaryButton";

const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("tenant");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Registration Successful!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="flex flex-col gap-6 w-full max-w-md p-8 border-2 border-white shadow-theme">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-secondary mt-2">Sign up to get started</p>
        </div>

        <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
          {/* Username Input */}
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            required
            className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
          />

          {/* Email Input */}
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            required
            className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
          />

          {/* Phone Number Input */}
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{11,}"
            required
            className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
          />

          {/* Password Input */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
          />

          {/* Confirm Password Input */}
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
          />

          {/* User Role Selection */}
          <div className="flex items-center gap-4 text-secondary">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="tenant"
                checked={role === "tenant"}
                onChange={() => setRole("tenant")}
                className="form-radio"
              />
              Tenant
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="landlord"
                checked={role === "landlord"}
                onChange={() => setRole("landlord")}
                className="form-radio"
              />
              Landlord
            </label>
          </div>

          {/* Submit Button */}
          <SecondaryButton
            type="submit"
            customClass="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700"
          >
            Register
          </SecondaryButton>

          {/* Login Link */}
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 text-secondary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
