import React from 'react'

import Bannerbg from '../Assets/banners/book-banner.png'
import { TbPhone } from "react-icons/tb";

const BookBanner = () => {
  return (
    <>
      <section
        className=" flex w-full relative mt-28 h-72"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <article className=" bg-slate-800 opacity-80 w-full h-full absolute top-0 right-0"></article>
        <article className="my-0 mx-auto max-w-8lx py-0 px-10">
          <div className="text-white z-5 relative w-full h-72 flex flex-col lg:flex-row items-center justify-center md:justify-center gap-9 lg:gap-20">
            <h2 className=" text-bh2">
              Book a car by getting in touch with us
            </h2>
            <span className="flex gap-4 text-sp items-center text-text-orange whitespace-nowrap">
              <TbPhone width={40} height={40} />
              <h3 className="flex gap-4 text-sp items-center text-text-orange whitespace-nowrap">
                +91 9988776600
              </h3>
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export default BookBanner