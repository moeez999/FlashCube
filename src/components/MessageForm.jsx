import React, { useState } from "react";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 xsss:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 w-[34rem] xs:w-full lg:w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-2 text-xl px-4 py-4 rounded-md w-64 xs:text-base xs:px-2 xs:py-3 xs:w-[10rem] xsss:w-[8.5rem] text-black lg:w-[13.5rem]"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-2 text-xl px-4 py-4 rounded-md w-64 xs:text-base xs:px-2 xs:py-3 xs:w-[10rem] xsss:w-[8.5rem] text-black lg:w-[13.5rem]"
          placeholder="Your Email"
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mb-2 text-xl px-4 py-4 rounded-md w-64 xs:text-base xs:px-2 xs:py-3 xs:w-[10rem] xsss:w-[8.5rem] text-black lg:w-[13.5rem]"
          placeholder="Company Name"
        />
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="mb-2 text-xl px-4 py-4 rounded-md w-64 xs:text-base xs:px-2 xs:py-3 xs:w-[10rem] xsss:w-[8.5rem] text-black lg:w-[13.5rem]"
          placeholder="Your Topic"
        />

        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg col-span-2"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-xl bg-[#2E85A3] px-8 py-4 mt-4 rounded-lg xs:py-2 xs:px-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessageForm;
