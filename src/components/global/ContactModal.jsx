'use client';
import React, { useState } from 'react';

export const ContactModal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    services: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://backend.devnexussolutions.com/api/contact-us", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name || " ",
            email: formData.email || " ",
            phoneNumber: formData.phoneNumber || " ",
            services: formData.services || " ",
            message: formData.message || " ",
          }),
        });

        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();
        console.log("Success:", data);
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          services: "",
          message: "",
        });
        setShowModal(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
      <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">Free Consultation</h2>
        <p className="text-sm text-gray-700 mb-4">Please fill the form and our team will get back to you.</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Your Phone No"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Service Interested In"
            value={formData.services}
            onChange={(e) => setFormData({ ...formData, services: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
            rows={3}
          />
          <button type="submit" className="bg-[#00357A] hover:bg-[#335D95] text-white px-4 py-2 rounded-md text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
