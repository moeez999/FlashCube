import React from "react";
let cardData = [
  {
    img: "card-a-1.png",
    title: "Customized Solutions",
    desc: "Tailored e-commerce development services to meet the unique needs and goals of your business.",
  },
  {
    img: "card-b-2.png",
    title: "Platform Expertise",
    desc: "Proficiency in major e-commerce platforms such as Magento, WooCommerce, Shopify, and more.",
  },
  {
    img: "card-c-3.png",
    title: "Responsive Design",
    desc: "Ensuring your online store is accessible and visually appealing across various devices for a seamless user experience.",
  },
  {
    img: "card-d-4.png",
    title: "Secure Payment Integration",
    desc: "Implementing robust payment gateways to ensure secure and smooth online transactions.",
  },
  {
    img: "card-e-5.png",
    title: "Scalability",
    desc: "Developing scalable solutions that can grow with your business, accommodating increased traffic and product offerings.",
  },
  {
    img: "card-f-6.png",
    title: "User-Friendly Interface",
    desc: "Intuitive and user-friendly interfaces that enhance the shopping experience and drive customer satisfaction.",
  },
  {
    img: "card-g-7.png",
    title: "Search Engine Optimization (SEO)",
    desc: "Incorporating SEO best practices to improve online visibility and attract more organic traffic.",
  },
  {
    img: "card-h-8.png",
    title: "Analytics and Reporting",
    desc: "Integration of analytics tools to provide valuable insights into customer behavior, enabling data-driven decision-making for continuous improvement..",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
      {cardData.map((card, index) => (
        <div
          className="bg-[#F8F8F8] flex flex-col items-start px-6 py-4 gap-4 xs:py-4 xs:px-4 w-[18rem] xs:w-[20rem] rounded-lg"
          key={index}
        >
          <img src={card.img} alt="" />
          <h2 className="font-semibold text-2xl xs:text-2xl ">{card.title}</h2>
          <p className="text-[#737373] text-lg xs:text-base ">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
