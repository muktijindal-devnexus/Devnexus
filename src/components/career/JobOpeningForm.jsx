"use client";

import React, { useState } from "react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    jobApplied: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle API submission or other actions
    console.log("Form Data Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      jobApplied: "",
      resume: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-[#00357A] mb-6 text-center">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Job Applied</label>
          <input
            type="text"
            name="jobApplied"
            value={formData.jobApplied}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Upload Resume (PDF, DOC, DOCX)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 file:py-2 file:px-4 file:bg-[#335D95] file:text-white file:rounded file:border-0 file:font-semibold"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#335D95] text-white py-2 rounded hover:bg-[#274d7a] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobPostingForm;
