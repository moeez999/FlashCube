import React, { useState } from "react";
import emailjs from "emailjs-com";

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the specific error when the user starts typing again
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const template = {
          from_name: formData.fullName,
          to_name: formData.email,
          phone: formData.phone,
          message: formData.message,
        };

        // Use Email.js to send the email with a template
        const response = await emailjs.send(
          "serviceid",
          "templateid",
          template,
          "privatekey"
        );

        // Form submission successful
        console.log("Email sent:", response);

        // Clear form fields
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="ms:mt-1 max-w-md xs:max-w-sm lg:max-w-sm  xs:mt-10 mt-24  px-6 py-12 rounded-[2rem] shadow-md bg-white flex flex-col items-center justify-center space-y-4 ">
      <h2 className="text-lg">Request For Proposal</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          required
        />
        {formErrors.fullName && (
          <p className="text-red-500">{formErrors.fullName}</p>
        )}

        <input
          placeholder="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          required
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

        <input
          placeholder="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          required
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          required
        ></textarea>
        {formErrors.message && (
          <p className="text-red-500">{formErrors.message}</p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-56 py-2 px-4 bg-[#133384] xs:bg-[#2E85A3] text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
