import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is e-commerce development ?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs..",
    },
    {
      question: "Which e-commerce platform is best for my business?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs.",
    },
    {
      question: "How can I ensure the security of my e-commerce website?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs.",
    },
    {
      question:
        "How can I optimize my e-commerce site for search engines (SEO)?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs.",
    },
    {
      question: "Can I integrate my e-commerce site with social media?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs.",
    },
    {
      question:
        "What is responsive design, and why is it important for e-commerce?",
      answer:
        " The choice of platform depends on your business requirements. Popular options include Magento for flexibility, WooCommerce for WordPress users, and Shopify for ease of use. Each has its strengths, catering to different business needs.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div
          className={`faq-item ${
            activeIndex === index ? "active" : ""
          }  px-4 pt-2 pb-3 rounded-lg border-b-2 mt-2 `}
          key={index}
        >
          <div
            className="faq-question flex flex-row items-center gap-2 text-lg xs:text-base font-semibold "
            onClick={() => toggleAnswer(index)}
          >
            <span className="rounded-full">
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1406 16.2505C10.2448 16.1567 10.3646 16.1099 10.5 16.1099C10.6354 16.1099 10.7552 16.1567 10.8594 16.2505L15.5 20.9067L20.1406 16.2505C20.2448 16.1567 20.3646 16.1099 20.5 16.1099C20.6354 16.1099 20.7552 16.1567 20.8594 16.2505C20.9531 16.3547 21 16.4744 21 16.6099C21 16.7453 20.9531 16.8651 20.8594 16.9692L15.8594 21.9692C15.7552 22.063 15.6354 22.1099 15.5 22.1099C15.3646 22.1099 15.2448 22.063 15.1406 21.9692L10.1406 16.9692C10.0469 16.8651 10 16.7453 10 16.6099C10 16.4744 10.0469 16.3547 10.1406 16.2505Z"
                  fill="#7E7E7E"
                />
                <rect
                  x="1"
                  y="1.75"
                  width="34"
                  height="34"
                  rx="17"
                  stroke="#EEEEEE"
                  stroke-width="2"
                />
              </svg>
            </span>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer text-[#7E7E7E]">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
