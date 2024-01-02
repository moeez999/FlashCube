import React from "react";
import ProposalForm from "./components/ProposalForm";
import BenefitCard from "./components/BenefitCard";
import ServiceCard from "./components/ServiceCard";
import PriceCard from "./components/PriceCard";
import Faq from "./components/Faq";
import MessageForm from "./components/MessageForm";

const App = () => {
  return (
    <div>
      <div className="hero-bg flex flex-col xs:bg-none pb-10">
        <div className="flex flex-row justify-between items-center mx-4 mt-3">
          <div className="logo">
            <img className="w-64 xs:w-32" src="logo.png" alt="" />
          </div>
          <div className="logo-2">
            <img src="logo-2.png" alt="" />
          </div>
          <div className=" flex flex-row gap-3 xsss:gap-1">
            <button className="bg-[#133384] rounded-3xl text-white px-6 py-1 xs:py-2 xs:text-xs xs:px-4 xsss:px-2 ">
              Request for Call
            </button>
            <button className="bg-[#133384] rounded-3xl text-white px-6 py-1 xs:py-2 xs:text-xs xs:px-4 xsss:px-2 ">
              +91 9953156485
            </button>
          </div>
        </div>
        <section class="flex flex-row justify-center xs:flex-col lg:gap-6 ">
          <div className="w-[45%] xs:w-full mt-20 xs:mt-10">
            <div className="flex flex-col gap-2 xs:px-4">
              <h1 className="text-5xl font-medium xs:text-center xs:text-3xl xs:font-semibold lg:text-3xl md:text-2xl">
                <span className="text-[#133384]">Ecommerce</span> Website
              </h1>
              <h1 className="text-5xl font-medium xs:text-center xs:text-3xl xs:font-semibold lg:text-3xl md:text-2xl">
                <span className="text-[#133384]">Development</span> Services :
              </h1>
              <h1 className="text-5xl font-medium xs:text-center xs:text-3xl xs:font-semibold lg:text-3xl md:text-2xl">
                Drive More Sales
              </h1>
              <div className="px-6 xs:hidden">
                <p className="text-2xl border-l-[3px] pl-4 xs:pl-2 border-black font-thin mt-8 xs:w-full xs:text-xl lg:text-base md:text-base">
                  "Boost online traffic and drive sales through a tailored
                  e-commerce website. Flashcube IT. specializes in crafting
                  custom e-commerce websites, featuring responsive designs.
                  Discover the transformative impact of our e-commerce web
                  design solutions on your business growth. Explore more with
                  Flashcube IT!"
                </p>
              </div>
              <div className="flex xs:justify-center  px-5 xs:hidden">
                <ul className="mt-8 flex flex-col gap-4 lg:gap-2 xs:items-start">
                  <li className="flex flex-row items-start text-2xl font-[500] gap-3 xs:text-xl lg:text-lg md:text-lg  ">
                    <img src="Frame.png" alt="" /> 24/7 Customer Support
                  </li>
                  <li className="flex flex-row items-start text-2xl font-[500] gap-3 xs:text-xl lg:text-lg md:text-lg ">
                    <img src="Frame.png" alt="" /> Professional Email Address
                  </li>
                  <li className="flex flex-row items-start text-2xl font-[500] gap-3 xs:text-xl lg:text-lg md:text-lg ">
                    <img src="Frame.png" alt="" /> 99.9% Uptime Guarantee
                  </li>
                  <li className="flex flex-row items-start text-2xl font-[500] gap-3 xs:text-xl lg:text-lg md:text-lg  ">
                    <img src="Frame.png" alt="" /> Regular Backups
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child-hero-bg  relative w-[45%] xs:bg-none xs:w-[90%] xs:ml-6 lg:bg-none md:bg-none">
            <ProposalForm />
          </div>
        </section>
      </div>
      <section className="mt-10 pt-8 xsss:mt-1 xsss:pt-1">
        <div className="flex flex-row justify-center gap-6 xs:flex-col lg:flex-col md:flex-col xs:mt-16 xs:px-4 ">
          <div className="w-[45%] mt-8 xsss:mt-2 xs:w-full md:w-full md:px-8 lg:px-8 lg:w-full md:full  xl:flex xl:flex-col xl:items-center">
            <img src="image-5.png" alt="" />
          </div>
          <div className="w-[45%] md:w-full lg:w-full md:px-8 xs:w-full xl:flex xl:flex-col xl:items-center">
            <div className="w-[85%] lg:w-full lg:px-8 mt-14 xs:w-full xs:flex xs:flex-col xs:items-center-center xs:px-4 ">
              <h1 className="text-4xl font-medium word-space-8 xs:text-2xl xs:font-semibold xs:text-start xl:text-5xl">
                Drive more sales with
                <span className="text-[#133384] "> ecommerce web design </span>
                and development services
              </h1>
              <p className="text-xl xs:text-lg mt-6 xl:text-2xl ">
                In the dynamic landscape of e-commerce, competition is fierce.
                That's why our services in e-commerce website design and
                development establish a robust foundation for success,
                encompassing the following:
              </p>
              <ul className="pl-6 mt-6">
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  Custom ecommerce web design
                </li>
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  Custom ecommerce development solutions
                </li>
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  Responsive design
                </li>
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  Secure (HTTPS) website
                </li>
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  Ecommerce SEO
                </li>
                <li className="list-disc text-xl mt-2 xs:text-base xl:text-2xl">
                  And more
                </li>
              </ul>
              <button className="bg-[#133384] text-white text-xl xl:text-2xl xl:mt-16 px-8 xs:px-4 py-2 set-web-btn mt-8 flex flex-row gap-2 items-center justify-center ">
                Set your website{" "}
                <img className="w-[2rem]" src="Frame-2.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-evenly bg-[#133384] py-5 mt-24 xs:flex-col xs:items-center xs:gap-4">
        <p className="text-white text-2xl xs:text-lg xs:text-center">
          Call Us Today for FREE Consultation
        </p>
        <button className="flex flex-row xs:w-[12rem] xs:font-semibold xs:py-2 items-center  gap-2 text-[#133384] bg-white px-4 rounded-md">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.725 11.3125C15.975 11.4375 16.1625 11.7188 16.1625 12.0312C16.1625 12.0625 16.1625 12.125 16.1625 12.1875L15.4125 15.4375C15.3188 15.7812 15.0375 16 14.6938 16C6.6625 16 0.19375 9.53125 0.19375 1.5C0.19375 1.15625 0.4125 0.875 0.75625 0.78125L4.00625 0.03125C4.06875 0.03125 4.13125 0 4.1625 0C4.475 0 4.75625 0.1875 4.88125 0.46875L6.38125 3.96875C6.4125 4.0625 6.44375 4.15625 6.44375 4.25C6.44375 4.5 6.31875 4.71875 6.1625 4.84375L4.25625 6.40625C5.4125 8.84375 7.35 10.7812 9.7875 11.9375L11.35 10.0312C11.475 9.875 11.6938 9.75 11.9125 9.75C12.0375 9.75 12.1313 9.78125 12.225 9.8125L15.725 11.3125Z"
              fill="#353535"
            />
          </svg>
          +91 9953156485
        </button>
      </div>
      <section className="mt-24">
        <div>
          <h1 className="text-4xl xs:text-2xl text-center font-semibold">
            Get Exclusive Benefits With
            <span className=" text-[#133384]">Flashcube IT.</span>
          </h1>
          <p className="text-xl text-center mt-4">
            "Our goal is to streamline the operations of ecommerce websites and
            unite them on a singular platform, transforming them into proficient
            travel professionals."
          </p>
        </div>
        <div className="mt-24 xs:mt-16 flex justify-center">
          <BenefitCard />
        </div>
        <div className="xs:px-12">
          <h1 className="text-center text-4xl mt-24 xs:text-2xl  font-semibold">
            <span className="text-[#133384]">eCommerce</span> Web/App
            Development <span className="text-[#133384]">Strategy</span>
          </h1>
        </div>
        <div className="xs:px-12 mt-16 flex justify-center lg:px-4 md:px-8">
          <img src="image-4.png" alt="" />
        </div>
        <div className="flex flex-row justify-evenly bg-[#133384] py-5 mt-24 xs:flex-col xs:items-center xs:gap-4">
          <p className="text-white text-2xl xs:text-lg xs:text-center">
            Call Us Today for FREE Consultation
          </p>
          <button className="flex flex-row xs:w-[12rem] xs:font-semibold xs:py-2 items-center  gap-2 text-[#133384] bg-white px-4 rounded-md">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.725 11.3125C15.975 11.4375 16.1625 11.7188 16.1625 12.0312C16.1625 12.0625 16.1625 12.125 16.1625 12.1875L15.4125 15.4375C15.3188 15.7812 15.0375 16 14.6938 16C6.6625 16 0.19375 9.53125 0.19375 1.5C0.19375 1.15625 0.4125 0.875 0.75625 0.78125L4.00625 0.03125C4.06875 0.03125 4.13125 0 4.1625 0C4.475 0 4.75625 0.1875 4.88125 0.46875L6.38125 3.96875C6.4125 4.0625 6.44375 4.15625 6.44375 4.25C6.44375 4.5 6.31875 4.71875 6.1625 4.84375L4.25625 6.40625C5.4125 8.84375 7.35 10.7812 9.7875 11.9375L11.35 10.0312C11.475 9.875 11.6938 9.75 11.9125 9.75C12.0375 9.75 12.1313 9.78125 12.225 9.8125L15.725 11.3125Z"
                fill="#353535"
              />
            </svg>
            +91 9953156485
          </button>
        </div>
      </section>
      <section className="mt-16">
        <div class="flex flex-col items-center">
          <h3 className="text-[#133384] text-center text-2xl font-medium">
            Why choose us
          </h3>
          <h1 className="text-center text-2xl font-semibold mt-8 w-[50%] xs:w-[80%] ">
            Tailored{" "}
            <span className="text-[#133384] text-center">
              E-commerce Development Services
            </span>{" "}
            for Seamless Digital Success!
          </h1>
        </div>
        <div className="flex justify-center mt-16 xs:mt-4">
          <ServiceCard />
        </div>
        <div className="flex justify-center mt-16 xs:mt-4">
          <PriceCard />
        </div>
      </section>
      <section className="mt-24">
        <div className="flex flex-row justify-center gap-8 items-center  md:flex-col ">
          <div className="w-[45%]  xs:hidden xl:flex xl:flex-col xl:items-center md:w-[90%]">
            <img src="media.png" alt="" />
          </div>
          <div className="w-[45%] px-4 xs:w-full md:w-[90%]">
            <p className="text-lg font-semibold support xs:text-center">
              SUPPORT
            </p>
            <h1 className="text-4xl font-semibold mt-4 xs:text-center">
              Frequently asked <br /> questions
            </h1>
            <div class="mt-8">
              <Faq />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-4 mt-16 xs:px-4 ">
        <div className="flex flex-row justify-center md:justify-start gap-8 lg:gap-10 items-center px-8 py-8 xsss:px-1 xs:flex-col">
          <div className="w-[40%] mt-8 xs:w-full lg:w-full xl:flex xl:flex-col xl:items-center">
            <p className="text-2xl text-white">SEND MESSAGE</p>
            <h1 className="text-5xl text-white word-spacing-4 xs:text-4xl">
              DROP <span className="font-semibold"> US A LINE</span>
              <div className="mt-10">
                <MessageForm />
              </div>
            </h1>
          </div>
          <div className="w-[40%] mt-8 xs:hidden md:hidden lg:w-full xl:flex xl:flex-col xl:items-center">
            <h1 className="text-4xl text-white mt-4">
              All-IN-One Website Solution
            </h1>
            <ul className="mt-6">
              <li className="flex flex-row items-center gap-4 text-xl text-white">
                <svg
                  width="35"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2478 25.4647C7.31583 25.4673 6.40365 25.7387 5.61678 26.2473C4.82991 26.756 4.20052 27.4812 3.80141 28.339C3.4023 29.1967 3.2498 30.1521 3.36153 31.0945C3.47327 32.0369 3.84468 32.9278 4.4328 33.6641L16.9701 49.3068C17.4172 49.8721 17.9902 50.3206 18.6416 50.6151C19.293 50.9096 20.0039 51.0416 20.7155 51C22.2372 50.9168 23.6111 50.0876 24.4871 48.7244L50.5303 6.00504C50.5346 5.99796 50.539 5.99087 50.5436 5.98389C50.788 5.60175 50.7087 4.84444 50.2043 4.36869C50.0658 4.23804 49.9024 4.13767 49.7244 4.07375C49.5463 4.00983 49.3572 3.98372 49.1689 3.99703C48.9805 4.01034 48.7968 4.06278 48.6291 4.15113C48.4614 4.23947 48.3132 4.36186 48.1937 4.51074C48.1843 4.52244 48.1747 4.53397 48.1648 4.54532L21.8998 34.7704C21.7999 34.8854 21.6785 34.979 21.5427 35.0459C21.407 35.1127 21.2595 35.1514 21.1089 35.1597C20.9583 35.168 20.8076 35.1457 20.6656 35.0942C20.5235 35.0427 20.3929 34.9629 20.2814 34.8595L11.5645 26.7802C10.6592 25.935 9.47594 25.4656 8.2478 25.4647Z"
                    fill="white"
                  />
                </svg>
                Effortless Design Customization
              </li>
              <li className="flex flex-row items-center gap-4 text-xl text-white">
                <svg
                  width="35"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2478 25.4647C7.31583 25.4673 6.40365 25.7387 5.61678 26.2473C4.82991 26.756 4.20052 27.4812 3.80141 28.339C3.4023 29.1967 3.2498 30.1521 3.36153 31.0945C3.47327 32.0369 3.84468 32.9278 4.4328 33.6641L16.9701 49.3068C17.4172 49.8721 17.9902 50.3206 18.6416 50.6151C19.293 50.9096 20.0039 51.0416 20.7155 51C22.2372 50.9168 23.6111 50.0876 24.4871 48.7244L50.5303 6.00504C50.5346 5.99796 50.539 5.99087 50.5436 5.98389C50.788 5.60175 50.7087 4.84444 50.2043 4.36869C50.0658 4.23804 49.9024 4.13767 49.7244 4.07375C49.5463 4.00983 49.3572 3.98372 49.1689 3.99703C48.9805 4.01034 48.7968 4.06278 48.6291 4.15113C48.4614 4.23947 48.3132 4.36186 48.1937 4.51074C48.1843 4.52244 48.1747 4.53397 48.1648 4.54532L21.8998 34.7704C21.7999 34.8854 21.6785 34.979 21.5427 35.0459C21.407 35.1127 21.2595 35.1514 21.1089 35.1597C20.9583 35.168 20.8076 35.1457 20.6656 35.0942C20.5235 35.0427 20.3929 34.9629 20.2814 34.8595L11.5645 26.7802C10.6592 25.935 9.47594 25.4656 8.2478 25.4647Z"
                    fill="white"
                  />
                </svg>
                Integrated E-Commerce Capabilities
              </li>
              <li className="flex flex-row items-center gap-4 text-xl text-white">
                <svg
                  width="35"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2478 25.4647C7.31583 25.4673 6.40365 25.7387 5.61678 26.2473C4.82991 26.756 4.20052 27.4812 3.80141 28.339C3.4023 29.1967 3.2498 30.1521 3.36153 31.0945C3.47327 32.0369 3.84468 32.9278 4.4328 33.6641L16.9701 49.3068C17.4172 49.8721 17.9902 50.3206 18.6416 50.6151C19.293 50.9096 20.0039 51.0416 20.7155 51C22.2372 50.9168 23.6111 50.0876 24.4871 48.7244L50.5303 6.00504C50.5346 5.99796 50.539 5.99087 50.5436 5.98389C50.788 5.60175 50.7087 4.84444 50.2043 4.36869C50.0658 4.23804 49.9024 4.13767 49.7244 4.07375C49.5463 4.00983 49.3572 3.98372 49.1689 3.99703C48.9805 4.01034 48.7968 4.06278 48.6291 4.15113C48.4614 4.23947 48.3132 4.36186 48.1937 4.51074C48.1843 4.52244 48.1747 4.53397 48.1648 4.54532L21.8998 34.7704C21.7999 34.8854 21.6785 34.979 21.5427 35.0459C21.407 35.1127 21.2595 35.1514 21.1089 35.1597C20.9583 35.168 20.8076 35.1457 20.6656 35.0942C20.5235 35.0427 20.3929 34.9629 20.2814 34.8595L11.5645 26.7802C10.6592 25.935 9.47594 25.4656 8.2478 25.4647Z"
                    fill="white"
                  />
                </svg>
                Responsive Across All Devices
              </li>
              <li className="flex flex-row items-center gap-4 text-xl text-white">
                <svg
                  width="35"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2478 25.4647C7.31583 25.4673 6.40365 25.7387 5.61678 26.2473C4.82991 26.756 4.20052 27.4812 3.80141 28.339C3.4023 29.1967 3.2498 30.1521 3.36153 31.0945C3.47327 32.0369 3.84468 32.9278 4.4328 33.6641L16.9701 49.3068C17.4172 49.8721 17.9902 50.3206 18.6416 50.6151C19.293 50.9096 20.0039 51.0416 20.7155 51C22.2372 50.9168 23.6111 50.0876 24.4871 48.7244L50.5303 6.00504C50.5346 5.99796 50.539 5.99087 50.5436 5.98389C50.788 5.60175 50.7087 4.84444 50.2043 4.36869C50.0658 4.23804 49.9024 4.13767 49.7244 4.07375C49.5463 4.00983 49.3572 3.98372 49.1689 3.99703C48.9805 4.01034 48.7968 4.06278 48.6291 4.15113C48.4614 4.23947 48.3132 4.36186 48.1937 4.51074C48.1843 4.52244 48.1747 4.53397 48.1648 4.54532L21.8998 34.7704C21.7999 34.8854 21.6785 34.979 21.5427 35.0459C21.407 35.1127 21.2595 35.1514 21.1089 35.1597C20.9583 35.168 20.8076 35.1457 20.6656 35.0942C20.5235 35.0427 20.3929 34.9629 20.2814 34.8595L11.5645 26.7802C10.6592 25.935 9.47594 25.4656 8.2478 25.4647Z"
                    fill="white"
                  />
                </svg>
                Comprehensive E-commerce Platforms
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-10">
        <div className="flex flex-col items-center w-[90%] gap-8">
          <img className="xs:w-64" src="logo.png" alt="" />
          <p className="text-center text-lg xs:text-start">
            “Embark on a digital journey with our expert website development
            services. We craft seamless and visually stunning websites that not
            only capture your brand essence but also deliver an unparalleled
            user experience. Elevate your online presence with cutting-edge
            design, functionality, and a touch of creativity. Let's bring your
            vision to life, one pixel at a time.”
          </p>
          <div className="flex flex-row justify-center gap-10 xs:flex-col xs:gap-2">
            <p className="flex flex-row gap-8 items-center text-[#133384] xs:font-medium">
              <svg
                width="35"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_392)">
                  <path
                    d="M53.197 11.2627L37.0221 27.3334L53.197 43.4042C53.4894 42.793 53.6668 42.1174 53.6668 41.3959V13.2709C53.6668 12.5494 53.4894 11.8738 53.197 11.2627Z"
                    fill="black"
                  />
                  <path
                    d="M48.9793 8.58398H5.02099C4.29943 8.58398 3.62391 8.76138 3.01276 9.05378L23.686 29.6228C25.5139 31.4508 28.4864 31.4508 30.3143 29.6228L50.9875 9.05378C50.3764 8.76138 49.7009 8.58398 48.9793 8.58398Z"
                    fill="black"
                  />
                  <path
                    d="M0.803288 11.2627C0.510892 11.8738 0.333496 12.5494 0.333496 13.2709V41.3959C0.333496 42.1175 0.510892 42.7931 0.803288 43.4042L16.9782 27.3334L0.803288 11.2627Z"
                    fill="black"
                  />
                  <path
                    d="M34.8127 29.543L32.5238 31.8318C29.4781 34.8776 24.5221 34.8776 21.4764 31.8318L19.1877 29.543L3.01276 45.6137C3.62391 45.9061 4.29943 46.0835 5.02099 46.0835H48.9793C49.7009 46.0835 50.3764 45.9061 50.9875 45.6137L34.8127 29.543Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_392">
                    <rect
                      width="53.3333"
                      height="53.3333"
                      fill="white"
                      transform="translate(0.333496 0.666992)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Support@flashcubeit.com
            </p>
            <p className="flex flex-row gap-8 items-center text-[#133384] xs:font-medium">
              <svg
                width="35"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_387)">
                  <path
                    d="M34.403 0.666992H13.5976C11.8643 0.666992 10.4456 2.08433 10.4456 3.81899V44.1803C10.4456 45.915 11.8643 47.3337 13.5976 47.3337H34.403C36.1363 47.3337 37.555 45.9177 37.555 44.1817V3.81899C37.555 2.08433 36.1363 0.666992 34.403 0.666992ZM20.6723 2.93899H27.3283C27.539 2.93899 27.7096 3.10966 27.7096 3.32166C27.7096 3.53233 27.539 3.70299 27.3283 3.70299H20.6723C20.4616 3.70299 20.291 3.53233 20.291 3.32166C20.291 3.10966 20.4616 2.93899 20.6723 2.93899ZM24.0003 45.7577C23.1296 45.7577 22.4243 45.0523 22.4243 44.1803C22.4243 43.3083 23.1296 42.6043 24.0003 42.6043C24.871 42.6043 25.5763 43.3083 25.5763 44.1803C25.5763 45.0523 24.871 45.7577 24.0003 45.7577ZM35.3616 41.5003H12.639V5.66566H35.3616V41.5003Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_387">
                    <rect
                      width="46.6667"
                      height="46.6667"
                      fill="white"
                      transform="translate(0.666931 0.666992)"
                    />
                  </clipPath>
                </defs>
              </svg>
              +91 9953156485
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-[#262C31] mt-10">
        <p className="text-center text-lg text-white py-4 xs:text-base">
          Copyrights © 2023 | Designed With by Flashcube IT Services Pvt. Ltd
        </p>
      </footer>
    </div>
  );
};

export default App;
