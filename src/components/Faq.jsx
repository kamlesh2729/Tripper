import React, { useState } from 'react'

import Faqbg from '../Assets/faq/car.png'
import { TbChevronDown } from "react-icons/tb";

const Faq = () => {
  const [activeQ, setActiveQ] = useState('q1');

  // const ActiveAns = { 'max-height':'20rem', padding:'2.8rem 4.5rem', transition: '0.s ease',}
  // const ActiveQue = { backgroundcolor:'orange', color:'white',}

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  }

  const getClassAnswer = (id) => {
    return activeQ === id ? 'ActiveAns' : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? 'ActiveQue' : "";
  };

  return (
    <>
      <main
        className=" py-40 px-0 bg-auto bg-no-repeat"
        style={{
          backgroundPosition: "0 70%",
          backgroundImage: `url(${Faqbg})`,
        }}
      >
        <section className="my-0 mx-auto max-w-8lx py-0 px-10">
          <article className="flex flex-col text-text-black">
            <div className="flex flex-col my-0 mx-auto text-center max-w-80 leading-normal">
              <h5 className="text-h4 font-semibold">FAQ</h5>
              <h2 className="text-h2 mb-6 font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-p text-text-gray">
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="flex flex-col items-center mt-28">
              <div className="flex flex-col text-text-black bg-white shadow-1xr w-full lg:w-81 cursor-pointer">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`flex justify-between items-center shadow-1ts py-7 px-18 transition ease-in-out duration-1 ${getClassQuestion('q1')}`}
                >
                  <p className=" font-medium text-spn">
                    1. What is special about comparing rental car deals?
                  </p>
                  <TbChevronDown className='text-h4'/>
                </div>

                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`text-pn font-text font-medium text-text-gray leading-relaxed max-h-0 overflow-hidden ease-in-out duration-1 py-0 px-18 ${getClassAnswer('q1')}`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>

              <div className="flex flex-col text-text-black bg-white shadow-1xr w-full lg:w-81 cursor-pointer">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`flex justify-between items-center shadow-1ts py-7 px-18 transition ease-in-out duration-1 ${getClassQuestion('q2')}`}
                >
                  <p className=" font-medium text-spn">
                    2. How do I find the car rental deals?
                  </p>
                  <TbChevronDown className='text-h4'/>
                </div>

                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`text-pn font-text font-medium text-text-gray leading-relaxed max-h-0 overflow-hidden ease-in-out duration-1 py-0 px-18 ${getClassAnswer('q2')}`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>

              <div className="flex flex-col text-text-black bg-white shadow-1xr w-full lg:w-81 cursor-pointer">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`flex justify-between items-center shadow-1ts py-7 px-18 transition ease-in-out duration-1 ${getClassQuestion('q3')}`}
                >
                  <p className=" font-medium text-spn">
                    3. How do I find such low rental car prices?
                  </p>
                  <TbChevronDown className='text-h4' />
                </div>

                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`text-pn font-text font-medium text-text-gray leading-relaxed max-h-0 overflow-hidden ease-in-out duration-1 py-0 px-18 ${getClassAnswer('q3')}`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Faq