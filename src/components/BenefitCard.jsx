import React from "react";
let cardData = [
  {
    img: "card-1.png",
    title: "Tailored E-commerce Solutions",
    desc: "We specialize in creating customized e-commerce websites that cater to the unique needs and goals of your company. Our team works closely with you to understand your products, target audience, and business objectives, ensuring that the website is tailored to enhance user experience and drive sales.",
  },
  {
    img: "card-2.png",
    title: "User-Friendly Design",
    desc: "We prioritize user experience by implementing intuitive and user-friendly designs. Our e-commerce websites are crafted to make navigation seamless for visitors, with clear calls-to-action and an optimized checkout process. A user-friendly design not only attracts potential customers but also encourages repeat business.",
  },
  {
    img: "card-3.png",
    title: "One-Stop Platform for all your needs",
    desc: "Discover unparalleled convenience with our one-stop platform, catering to all your needs. Whether it's services, products, or solutions, we've got you covered. Streamline your experience and find everything you're looking for in one centralized hub, making your journey smoother and more efficient.",
  },
  {
    img: "card-4.png",
    title: "Secure Payment Integration",
    desc: "Security is paramount in e-commerce. We offer robust payment gateway integrations to ensure secure transactions for both you and your customers. By implementing industry-standard security measures, we provide a safe online shopping environment, building trust and credibility for your brand.",
  },
  {
    img: "card-5.png",
    title: "Mobile Optimization",
    desc: "Recognizing the prevalence of mobile users, we ensure that your e-commerce website is fully optimized for mobile devices. This responsive design guarantees a consistent and engaging experience across various screen sizes, capturing a broader audience and maximizing your reach in the rapidly growing mobile commerce market.",
  },
  {
    img: "card-6.png",
    title: "Access to Latest Technology",
    desc: "Experience the forefront of innovation with our commitment to providing access to the latest technology. Stay ahead in your endeavors, benefit from cutting-edge solutions, and embrace efficiency. We ensure that you have the tools and resources needed to thrive in a rapidly evolving technological landscape.",
  },
];

const BenefitCard = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <div
          className="flex flex-col items-center px-6 py-6 gap-4 xs:py-4 xs:px-4  border-[#737373] border-[1.5px] w-[25rem] xs:w-[20rem] rounded-[2rem] "
          key={index}
        >
          <img src={card.img} alt="" />
          <h2 className="text-[#133384] text-3xl xs:text-2xl text-center">
            {card.title}
          </h2>
          <p className="text-[#737373] text-lg xs:text-base text-center">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitCard;
