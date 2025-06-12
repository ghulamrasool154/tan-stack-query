import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axiosInstance from "../axios/axios-instance";

const Login = () => {
  const [form, setForm] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const mutation = useMutation({
    mutationFn: (credentials) => {
      return axiosInstance.post("/auth/login", credentials);
    },
    onSuccess: (data) => {
      console.log("✅✅✅✅✅✅", data);
    },
    onError: (error) => {
      console.log("🔥🔥🔥🔥🔥🔥", error);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Logging in..." : "Login"}
        </button>

        {mutation.isError && (
          <p className="text-sm text-red-600 text-center">
            {mutation.error.message || "Something went wrong."}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
