import React from "react";
import { Link } from "react-router-dom";

import BgShape from "../Assets/hero/hero-bg.png";
import Car from "../Assets/hero/main-car.png";
import Bannerbg from "../Assets/banners/book-banner.png";
import { TbChevronRight, TbCircleCheck } from "react-icons/tb";
import Bookcar from "../components/Bookcar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import ChooseUs from "../components/ChooseUs";
import Testimonial from "../components/Testimonal";
import Faq from "../components/Faq";
import Download from "../components/Download";

const Home = () => {
  return (
    <>
      <main className="h-ht w-full bg-bg-gray relative">
        <section className="my-0 mx-auto py-0 px-10 max-w-8lx">
          <img
            src={BgShape}
            className="absolute top-0 right-0 z-1"
            alt="bg-shape"
          />
          <article className="w-full h-screen flex items-center lg:justify-normal sm:justify-center relative ">
            <div className="flex flex-col z-3 max-w-3lx mt-20">
              <h4 className="text-black text-h3 font-text font-bold">
                Plan your trip now
              </h4>
              <h1 className=" text-h1 font-text text-black mt-4 mb-9 font-bold">
                save <span className=" text-text-orange">big</span> with our car
                rental
              </h1>
              <p className="text-p font-text text-text-gray mb-16 leading-normal">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-8 text-p font-text text-white no-underline font-bold">
                <Link className="bg-orange-500 flex items-center py-6 px-12 rounded-md transition-all shadow-3xt hover:shadow-3xr">
                  Book Ride &nbsp;
                  <TbChevronRight className="text-bt" />
                </Link>
                <Link className="bg-black flex items-center py-6 px-12 rounded-md border-2 border-black hover:bg-transparent hover:text-black">
                  Learn More &nbsp;
                  <TbCircleCheck className="text-bt" />
                </Link>
              </div>
            </div>
            <img
              src={Car}
              className="z-2 hidden absolute right-0 mt-20 w-car 4k:w-car Lp-l:w-car lg:w-car lg:block"
              alt="car-img"
            />
          </article>
        </section>
      </main>
      <Bookcar />
      <PlanTrip />
      <PickCar />
      <section
        className=" flex w-full relative text-center my-32 mx-0 py-24 px-0 h-auto"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <article className=" bg-zinc-800 opacity-75 w-full h-full absolute top-0 right-0"></article>
        <article className="my-0 mx-auto max-w-8lx py-0 px-10">
          <div className="text-white flex flex-col gap-6 z-5 relative w-full h-full items-center justify-center ">
            <h2 className=" text-h1 leading-snug font-bold">
              Save big with our cheap car rental!
            </h2>
            <p className=" text-h3">
              Top Airports. Local Suppliers.{" "}
              <span className=" text-text-orange">24/7</span> Support.
            </p>
          </div>
        </article>
      </section>
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
    </>
  );
};

export default Home;
