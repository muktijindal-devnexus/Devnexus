'use client'
import Image from "next/image";
import React, { useState } from "react";

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [currentNodeKey, setCurrentNodeKey] = useState("start");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [finalSelection, setFinalSelection] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const chatFlow = {
    start: {
      message: "Please choose a topic:",
      options: {
        Services: "services",
        Help: "help",
        Contact: "contactus",
        About: "about",
      },
    },
    services: {
      message: "Which service are you interested in?",
      options: {
        "Web Development": "webDev",
        "Mobile Development": "mobileDev",
        "UI/UX Design": "uiux",
        Marketing: "marketing",
        Blockchain: null,
        AI: null,
        SEO: null,
        "Cloud Services": null,
      },
    },
    webDev: {
      message: "Choose Web Development area:",
      options: {
        "Frontend (React, Angular)": null,
        "Backend (Node, Django)": null,
        "Full Stack Development": null,
        "E-commerce Sites": null,
      },
    },
    mobileDev: {
      message: "Choose Mobile Dev platform:",
      options: {
        "Android (Kotlin/Java)": null,
        "iOS (Swift)": null,
        "Cross-platform (Flutter/React Native)": null,
      },
    },
    uiux: {
      message: "What do you need in UI/UX?",
      options: {
        "Figma Prototyping": null,
        "Responsive Redesign": null,
        "Accessibility Audit": null,
      },
    },
    marketing: {
      message: "Which type of marketing?",
      options: {
        "Social Media Marketing": null,
        "Email Campaigns": null,
        "Lead Generation": null,
      },
    },
    help: {
      message: "For help, call 127809121 or email help@devnexus.com.",
      options: {},
    },
    contactus: {
      message: `Contact us:
Email: contactus@devnexus.com
Phone: +91-9876543210
LinkedIn: linkedin.com/company/devnexus
Twitter: twitter.com/devnexus
Address: Noida Sector 63, UP, India`,
      options: {},
    },
    about: {
      message: "We are Devnexus, a tech-driven agency. 💡",
      options: {},
    },
  };

  const handleStartChat = () => {
    setChatOpen(true);
    setChatLog([
      { type: "bot", text: "Hi!" },
      {
        type: "bot",
        text: "Welcome to Devnexus Solutions! How can we help you today?",
      },
      { type: "bot", text: chatFlow.start.message },
    ]);
    setCurrentNodeKey("start");
    setCurrentOptions(Object.keys(chatFlow.start.options));
    setEmail("");
    setPhoneNumber("");
    setFullName("");
    setFinalSelection("");
    setAwaitingEmail(false);
    setShowMessageBox(false);
    setMessage("");
  };

  const resetChat = () => {
    handleStartChat();
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleOptionClick = (option) => {
    const nextKey = chatFlow[currentNodeKey].options[option];
    setChatLog((prev) => [...prev, { type: "user", text: option }]);

    if (nextKey && chatFlow[nextKey]) {
      const nextNode = chatFlow[nextKey];
      setChatLog((prev) => [...prev, { type: "bot", text: nextNode.message }]);
      setCurrentNodeKey(nextKey);
      setCurrentOptions(Object.keys(nextNode.options || {}));
    } else {
      setChatLog((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "Got it! Before we move forward, could you please share your full name, phone number and email?",
        },
      ]);
      setFinalSelection(option);
      setCurrentOptions([]);
      setAwaitingEmail(true);
    }
  };

  const handleEmailSubmit = () => {
    if (!fullName.trim()) {
      setChatLog((prev) => [...prev, { type: "bot", text: "Please enter your full name." }]);
      return;
    }

    if (!/^\d{7,15}$/.test(phoneNumber)) {
      setChatLog((prev) => [...prev, { type: "bot", text: "Please enter a valid phone number." }]);
      return;
    }

    if (!validateEmail(email)) {
      setChatLog((prev) => [...prev, { type: "bot", text: "Please enter a valid email address." }]);
      return;
    }

    setChatLog((prev) => [
      ...prev,
      { type: "user", text: `Name: ${fullName}` },
      { type: "user", text: `Phone: ${countryCode} ${phoneNumber}` },
      { type: "user", text: `Email: ${email}` },
      {
        type: "bot",
        text:
          "Thank you for sharing your details! Please write any message or query you have below, or you can exit from here.",
      },
    ]);

    setAwaitingEmail(false);
    setShowMessageBox(true);

    console.log("📩 Submission Details:");
    console.log("Full Name:", fullName);
    console.log("Phone:", `${countryCode} ${phoneNumber}`);
    console.log("Email:", email);
    console.log("Last Selected Option:", finalSelection);
  };

  const handleMessageSubmit = () => {
    if (message.trim() === "") {
      setChatLog((prev) => [
        ...prev,
        { type: "bot", text: "Please enter a message before submitting." },
      ]);
      return;
    }
    setChatLog((prev) => [
      ...prev,
      { type: "user", text: message },
      {
        type: "bot",
        text: "Thank you for your message! We will get back to you shortly. ✅",
      },
    ]);
    console.log("Message:", message);
    setMessage("");
    setShowMessageBox(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!chatOpen && (
        <button onClick={handleStartChat}>
          <Image src='/images/contact/contact.svg' width={60} height={60} alt="Contact" />
        </button>
      )}

      {chatOpen && (
        <div className="w-80 bg-white rounded-xl shadow-xl p-4 flex flex-col max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Chat Assistant</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-sm text-[#00357A]"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 mb-2">
            {chatLog.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                  msg.type === "user"
                    ? "bg-[#00357A] ml-auto text-right text-white"
                    : "bg-white border border-[#00357A]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <ul className="space-y-1 mb-2">
            {currentOptions.map((opt, i) => (
              <li
                key={i}
                onClick={() => handleOptionClick(opt)}
                className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-sm"
              >
                {opt}
              </li>
            ))}
          </ul>

          {awaitingEmail && (
            <div className="flex flex-col gap-2 mb-2">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-2 py-2 border rounded w-24 text-sm"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-[#00357A] text-white px-3 py-2 rounded text-sm"
              >
                Submit Details
              </button>
            </div>
          )}

          {showMessageBox && (
            <div className="flex flex-col gap-2 mb-2">
              <textarea
                rows={3}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded resize-none"
              />
              <button
                onClick={handleMessageSubmit}
                className="bg-[#00357A] text-white px-3 py-2 rounded text-sm"
              >
                Submit Message
              </button>
            </div>
          )}

          <div className="flex justify-between mt-2">
            <button
              onClick={resetChat}
              className="text-[#00357A] text-sm hover:underline"
            >
              Reset Chat
            </button>
            <button
              onClick={() => setChatOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
