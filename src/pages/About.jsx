import React from "react";

import Heropages from "../components/Heropages";
import BookBanner from "../components/BookBanner";
import AbImg from "../Assets/about/about-main.jpg";
import Icon1 from "../Assets/about/icon1.png";
import Icon2 from "../Assets/about/icon2.png";
import Icon3 from "../Assets/about/icon3.png";
import PlanTrip from "../components/PlanTrip";

const About = () => {
  return (
    <>
      <section>
        <Heropages name="About" />
        <section className="my-0 mx-auto w-full max-w-8lx py-0 px-10">
          <main className="flex flex-col lg:flex-row my-40 mx-auto gap-20 max-w-ab items-center">
            <img src={AbImg} alt="about-img" className=" w-83 h-83" />
            <article className=" text-text-black text-center lg:text-left flex flex-col">
              <h3 className=" text-h4 font-text font-semibold mb-4">
                About Company
              </h3>
              <h2 className=" text-h2 font-bold leading-tight">
                You start the engine and your adventure begins
              </h2>
              <p className="text-p text-text-gray font-text leading-normal mt-8 mb-16">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="grid grid-cols-com lg:grid-cols-mod gap-16">
                <div className="flex flex-col items-center">
                  <img src={Icon1} alt="car-icon" className="w-28" />
                  <span className="flex flex-col sm:flex-row lg:flex-row items-center lg:gap-4">
                    <h4 className="text-ab font-semibold">20</h4>
                    <p className="text-sp lg:text-p text-text-gray font-text leading-normal mt-8 mb-8">
                      Car Types
                    </p>
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Icon2} alt="car-icon" className="w-28" />
                  <span className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:gap-4">
                    <h4 className="text-ab font-semibold">85</h4>
                    <p className="text-sp lg:text-p text-text-gray font-text leading-normal mt-8 mb-8">
                      Rental Outlets
                    </p>
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Icon3} alt="car-icon" className="w-20" />
                  <span className="flex flex-col sm:flex-row lg:flex-row items-center lg:gap-4">
                    <h4 className="text-ab font-semibold">75</h4>
                    <p className="text-sp lg:text-p text-text-gray font-text leading-normal mt-8 mb-8">
                      Repair Shop
                    </p>
                  </span>
                </div>
              </div>
            </article>
          </main>
        </section>
        <PlanTrip />
      </section>
      <BookBanner />
    </>
  );
};

export default About;
