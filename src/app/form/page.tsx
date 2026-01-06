"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

// Use environment variables for EmailJS credentials
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

type FormData = {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.service) {
      setErrorMessage("Please select a service");
      return false;
    }
    if (!formData.date) {
      setErrorMessage("Please select a preferred date");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        message: formData.message,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Service Request Form</h1>

        {status === "success" ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <p>Thank you! Your message has been sent successfully.</p>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <p>{errorMessage}</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="service" className="font-medium">
                Service
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">-- Select a service --</option>
                <option value="Moss Removal">Moss Removal</option>
                <option value="Moss Treatment">Moss Treatment</option>
                <option value="Window Cleaning">Window Cleaning</option>
                <option value="Commercial Cleaning">Commercial Cleaning</option>
                <option value="Gutter Cleaning">Gutter Cleaning</option>
                <option value="Painting">Painting</option>
                <option value="Landscaping">Landscaping</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="time" className="font-medium">
                Preferred Time (optional)
              </label>
              <input
                type="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`${
                status === "submitting"
                  ? "bg-blue-300"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-2 px-4 rounded transition`}
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}

        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <p>{errorMessage || "An error occurred. Please try again later."}</p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              onClick={() => setStatus("idle")}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}