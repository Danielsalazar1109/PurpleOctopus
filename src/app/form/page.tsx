"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

// Use environment variables for EmailJS credentials
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

// TODO: replace with your real contact details
const CONTACT_PHONE_DISPLAY = "250-884-1073";
const CONTACT_PHONE_HREF = "tel:+12508841073";
const CONTACT_EMAIL_DISPLAY = "info@purpleoctopusservice.com";
const CONTACT_EMAIL_HREF = "mailto:info@purpleoctopusservice.com";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
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
    phone: "",
    address: "",
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
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number");
      return false;
    }
    if (!formData.address.trim()) {
      setErrorMessage("Please enter your address");
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
        phone: formData.phone,
        address: formData.address,
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
        phone: "",
        address: "",
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
    <div className="min-h-screen px-6 py-10">
         <div className="flex flex-col mb-6">
        <h2 className="text-center text-2xl font-bold mb-6">CONTACT US TODAY TO GET YOUR FREE QUOTE</h2>
        <p className="text-center text-2xl">We are here for anything you need - Book a time for a walk-through of your facility to discuss your cleaning needs and get a quote. </p>
        </div>
      <div className="mx-auto w-full max-w-6xl grid gap-8 md:grid-cols-2 items-stretch">
        {/* Left: form card */}
        <div className="h-full bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 backdrop-blur-md border border-white/15 p-8 rounded-lg shadow-lg flex flex-col gap-4 text-white">
          <h1 className="text-2xl font-bold text-center text-white">
            SERVICE REQUEST FORM
          </h1>

          {status === "success" ? (
            <div className="bg-emerald-500/20 border border-emerald-300/30 text-emerald-50 px-4 py-3 rounded relative mb-4">
              <p>Thank you! Your message has been sent successfully.</p>
              <button
                className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-400 transition"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {errorMessage && (
                <div className="bg-red-500/20 border border-red-300/30 text-red-50 px-4 py-3 rounded relative">
                  <p>{errorMessage}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="font-medium text-white/90">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium text-white/90">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-medium text-white/90">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="address" className="font-medium text-white/90">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="service" className="font-medium text-white/90">
                  Service
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
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
                <label htmlFor="date" className="font-medium text-white/90">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="time" className="font-medium text-white/90">
                  Preferred Time (optional)
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-medium text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 border border-white/20 bg-white/10 text-white p-2 rounded w-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`${
                  status === "submitting"
                    ? "bg-purple-400/60"
                    : "bg-white text-purple-900 hover:bg-gray-200"
                } text-purple-800 hover:text-purple-900 py-2 px-4 rounded transition`}
              >
                {status === "submitting" ? "Sending..." : "BOOK NOW"}
              </button>
            </form>
          )}

          {status === "error" && (
            <div className="bg-red-500/20 border border-red-300/30 text-red-50 px-4 py-3 rounded relative">
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

        {/* Right: contact / icons column */}
        <aside className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 backdrop-blur-md border border-white/20 rounded-lg p-8 text-white shadow-lg md:pt-32">
          <div className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-white/15 p-8">
                <Phone className="h-32 w-32" />
              </div>
              <div className="min-w-0">
                <p className="text-xl text-center uppercase tracking-wide text-white/70">
                  PHONE
                </p>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="font-semibold hover:underline underline-offset-4 text-xl"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex rounded-full bg-white/15 p-8">
                <Mail className="h-32 w-32" />
              </div>
              <div className="min-w-0">
                <p className="text-xl text-center uppercase tracking-wide text-white/70">
                  EMAIL
                </p>
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="font-semibold hover:underline underline-offset-4 break-all text-xl"
                >
                  {CONTACT_EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
