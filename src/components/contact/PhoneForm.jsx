import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneForm() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("in");

  const handlePhoneChange = (value, data) => {
    setPhone(value);
    setCountryCode(data.countryCode);
    console.log("Dial Code:", data.dialCode);
    console.log("Country Code:", data.countryCode);
    console.log("Phone:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Phone: +${phone}`);
    console.log("Country Code Submitted:", countryCode);
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <PhoneInput
        country={countryCode}
        value={phone}
        onChange={handlePhoneChange}
        enableSearch={true}
        inputStyle={{
          width: "100%",
          fontSize: "16px",
          color: "black",
        }}
      />

    </form>
  );
}

export default PhoneForm;
