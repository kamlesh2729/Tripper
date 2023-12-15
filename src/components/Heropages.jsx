import React from 'react'
import { Link } from 'react-router-dom'

import Herobg from '../Assets/hero/heroes-bg.png'

import '../App.css'

const Heropages = ({name}) => {
  return (
    <>
      <section
        className="w-full h-ho relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Herobg})` }}
      >
        <article className=" w-full h-full absolute top-0 right-0 bg-slate-50/90"></article>
        <article className="my-0 mx-auto w-full lg:max-w-8lx py-0 px-10">
          <div className="flex flex-col z-3 relative w-full h-ho justify-center text-black">
            <h3 className=" mb-2 font-semibold text-title">{name}</h3>
            <p className=" text-pn font-semibold">
              <Link
                to="/"
                className="text-black no-underline hover:text-text-orange"
              >
                Home
              </Link>
              / {name}
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Heropages