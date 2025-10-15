"use client";

import { useState } from "react";
import PhoneForm from "../contact/PhoneForm";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

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

    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone is required";
    else if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.services.trim())
      newErrors.services = "This field is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       if (loading) return;
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

         

      try {


         setLoading(true);


        const response = await fetch(
          "https://backend.devnexussolutions.com/api/contact-us",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name || " ",
              email: formData.email || " ",
              phoneNumber: formData.phoneNumber || " ",
              services: formData.services || formData.services || " ",
              message: formData.message || " ",
            }),
          }
        );

        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();
        console.log("Success:", data);
        alert("Form submitted successfully!");

        // Reset the form
        setFormData({
          name: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          services: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
      finally {
        setLoading(false); // 👈 stop loading
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     alert("Form submitted successfully!");
  //     console.log(formData);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phoneNumber: "",
  //       services: "",
  //       message: "",
  //     });
  //   }
  // };

  return (
    <section className="flex justify-center ">
      <div
        className="w-full max-w-6xl px-2 sm:px-8 md:px-10 lg:px-16 pt-6 md:py-8 flex flex-col lg:flex-row gap-10 md:gap-8 lg:gap-16"
        style={{
          background: "linear-gradient(to right, white, #e9eef4, white)",
        }}
      >
        {/* Heading Section */}
        <div className="lg:w-1/3 flex items-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#002b5b] leading-snug">
            Let's Make Your Brand Shine & Competitors Envy!
          </h2>
        </div>
        {/* Form Section */}
        <div className="lg:w-[55%] w-full bg-[#f9f9f9] sm:py-5 sm:px-12 rounded-lg p-4 ">
          <h2 className="text-lg sm:text-2xl font-semibold ">Get in Touch</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-3  pt-3">
            Please fill out the form to help us understand the areas where you
            require assistance.
          </p>

          <form onSubmit={handleSubmit} className="">
            {/* Row 1: Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="border-[#828282] border rounded-xl sm:rounded-lg p-2 sm:p-2.5 w-full sm:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your First name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-sm sm:text-base"
                />
              </div>
              <div className="border-[#828282] border rounded-xl sm:rounded-lg p-2 sm:p-2.5 w-full sm:w-1/2">
                <input
                  type="text"
                name="lastname"
                  placeholder="Enter your Last name*"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <div className="border-[#828282] border rounded-xl sm:rounded-lg p-2 sm:p-2.5 w-full ">
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
                <p className="text-red-500 text-xs sm:text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Row 2: Country Code, Phone */}
            <div className="flex flex-row items-center sm:flex-row gap-4 mb-4">
              <div className="  w-40 ">
                <PhoneForm />
              </div>
              <div className="border-[#828282] border rounded-xl w-full sm:w-full p-2 ">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Mobile number*"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-[16px] py-1 rounded-md outline-none"
                />
              </div>
            </div>

            {errors.phoneNumber && (
              <p className="text-red-500 text-xs sm:text-sm">{errors.phone}</p>
            )}

            {/* Row 3: Looking For */}
         <div className="border-[#828282] border rounded-xl w-full p-1 sm:py-2.5 sm:px-3.5 text-gray-600 mb-4">
  {/* Accessible label for screen readers */}
  <label
    htmlFor="services"
    className="sr-only"
  >
    Select a Service
  </label>

  <select
    id="services"
    name="services"
    value={formData.services}
    onChange={handleChange}
    className="w-full text-sm sm:text-[16px] px-2 py-1 rounded-md outline-none"
  >
    <option value="" disabled hidden>
      Services
    </option>
    <option value="webDevelopment">Web Development</option>
    <option value="mobileDevelopment">Mobile App Development</option>
    <option value="UIUX">UI/UX Design</option>
    <option value="digitalMarketing">Digital Marketing</option>
    <option value="BlockChain">Blockchain Development</option>
    <option value="AITechnologies">AI Technologies</option>
    <option value="other">Other</option>
  </select>
</div>

            {errors.services && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.services}
              </p>
            )}

            {/* Row 4: Message */}
            <div className="border-[#828282] border rounded-xl p-1 sm:p-1.5 mb-4">
              <textarea
                name="message"
                placeholder="Brief description of your enquiry"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-sm sm:text-[16px] px-2 py-1 sm:py-2 rounded-md outline-none min-h-[80px]"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
                  disabled={loading} // 👈 disable during submit
              className={`flex items-center justify-center gap-2 bg-[#002b5b] hover:bg-[#003d82] text-white py-2 px-6 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto cursor-pointer transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
                          {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"
                  ></path>
                </svg>
              )}
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
