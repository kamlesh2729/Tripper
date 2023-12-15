import React from 'react'
import { Link } from 'react-router-dom';

import { TbChevronRight } from "react-icons/tb";
import Chbg from '../Assets/chooseUs/bg.png'
import MainImg from '../Assets/chooseUs/main.png'
import Box1 from '../Assets/chooseUs/icon1.png'
import Box2 from '../Assets/chooseUs/icon2.png'
import Box3 from '../Assets/chooseUs/icon3.png'

const ChooseUs = () => {
  return (
    <>
      <main
        className="bg-white px-0 pt-8 pb-40 bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "-225px 255px",
          backgroundImage: `url(${Chbg})`,
        }}
      >
        <section className="my-0 mx-auto max-w-8lx py-0 px-10">
          <article className="flex flex-col">
            <img
              src={MainImg}
              className="w-11/11 h-auto my-0 mx-auto"
              alt="car-img"
            />
            <article className="flex flex-col lg:flex-row lg:justify-center items-center gap-12 mt-12 w-full">
              <aside className="text-center flex flex-col items-center lg:items-start max-w-3lx text-text-black">
                <h4 className="text-h3 mb-2 font-bold font-text">
                  Why Choose Us
                </h4>
                <h2 className="text-h2 font-bold lg:text-left leading-snug mb-8">
                  Best valued deals you will ever find
                </h2>
                <p className="text-p font-text lg:text-left leading-normal text-text-gray mb-14">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <Link className="text-white flex items-center text-p font-bold w-fit bg-text-orange py-6 px-10 rounded-md shadow-3xt transition duration-all boredr-2 border-solid border-text-orange  hover:shadow-3xr hover:bg-text-orange">
                  Find Details&nbsp;
                  <TbChevronRight />
                </Link>
              </aside>
              <aside className="flex flex-col gap-16/5 max-w-44 ">
                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
                  <img src={Box1} className=" w-44 h-44 mr-5" alt="box-img" />
                  <div className="flex flex-col gap-4 justify-center">
                    <h4 className="text-h3">Cross Country Drive</h4>
                    <p className="text-p text-text-gray font-text leading-snug">
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
                  <img src={Box2} className=" w-44 h-44 mr-5" alt="box-img" />
                  <div className="flex flex-col gap-4 justify-center">
                    <h4 className="text-h3">All Inclusive Pricing</h4>
                    <p className="text-p text-text-gray font-text leading-snug">
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
                  <img src={Box3} className=" w-44 h-44 mr-5" alt="box-img" />
                  <div className="flex flex-col gap-4 justify-center">
                    <h4 className="text-h3">No Hidden Charges</h4>
                    <p className="text-p text-text-gray font-text leading-snug">
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </aside>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}

export default ChooseUs