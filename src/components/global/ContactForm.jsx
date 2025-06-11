"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    lookingFor: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.lookingFor.trim())
      newErrors.lookingFor = "This field is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        lookingFor: "",
        message: "",
      });
    }
  };

  return (
    <section className="flex justify-center px-4 sm:px-6">
      <div
        className="w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10"
        style={{
          background: "linear-gradient(to right, white, #e9eef4, white)",
        }}
      >
        {/* Heading Section */}
        <div className="lg:w-1/3 flex items-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#002b5b] leading-snug">
            Let's Make Your Brand Shine & Competitors Envy!
          </h1>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full bg-[#f9f9f9] p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Please fill out the form to help us understand the areas where you
            require assistance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Row 1: Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="border-[#828282] border rounded-xl sm:rounded-2xl p-2 sm:p-3.5 w-full sm:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-sm sm:text-base"
                />
              </div>
              <div className="border-[#828282] border rounded-xl sm:rounded-2xl p-2 sm:p-3.5 w-full sm:w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm">{errors.name}</p>
              )}
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>
              )}
            </div>

            {/* Row 2: Country Code, Phone, Website */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="border-[#828282] border rounded-xl w-20 flex items-center justify-center bg-gray-100 text-xs sm:text-sm font-medium p-1 sm:p-1.5 text-center">
                IN +91
              </div>
              <div className="border-[#828282] border rounded-xl w-full sm:w-1/3 p-1 sm:p-1.5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-center text-sm sm:text-[16px] py-1 sm:py-2 rounded-md outline-none"
                />
              </div>
              <div className="border-[#828282] border rounded-xl flex-grow p-1 sm:p-1.5">
                <input
                  type="url"
                  name="website"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full text-center text-sm sm:text-[16px] px-2 py-1 sm:py-2 rounded-md outline-none"
                />
              </div>
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs sm:text-sm">{errors.phone}</p>
            )}

            {/* Row 3: Looking For */}
            <div className="border-[#828282] border rounded-xl w-full sm:w-1/2 p-1 sm:p-1.5">
              <input
                type="text"
                name="lookingFor"
                placeholder="Looking for*"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full text-center text-sm sm:text-[16px] px-2 py-1 sm:py-2 rounded-md outline-none"
              />
            </div>
            {errors.lookingFor && (
              <p className="text-red-500 text-xs sm:text-sm">{errors.lookingFor}</p>
            )}

            {/* Row 4: Message */}
            <div className="border-[#828282] border rounded-xl p-1 sm:p-1.5">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-center text-xs sm:text-sm px-2 py-1 sm:py-2 rounded-md outline-none min-h-[80px]"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#002b5b] hover:bg-[#003d82] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};