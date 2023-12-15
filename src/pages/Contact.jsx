import React from "react";

import Heropages from "../components/Heropages";
import BookBanner from "../components/BookBanner";
import Contactbg from "../Assets/banners/bg-contact.png";
import { TbPhone, TbMail, TbLocation, TbMailOpened } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <section>
        <Heropages name="Contact" />
        <main className="my-0 mx-auto max-w-8lx py-0 px-10">
          <article
            className="grid grid-cols-com lg:grid-cols-con gap-12 mx-auto my-0 text-text-black py-40 px-8 bg-auto bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Contactbg})` }}
          >
            <aside className="flex flex-col md:max-w-full lg:max-w-2xl text-center md:text-center lg:text-left gap-4 max-w-2xl">
              <h2 className="text-h2 font-bold leading-snug mb-8">
                Need additional information?
              </h2>
              <p className=" text-p font-text text-text-gray leading-relaxed mb-8">
                A multifacered professional skilled in multiple fields of
                research, development as well as a learning specialist, over 15
                years of exprience.
              </p>
              <a
                href="/"
                className=" flex items-center justify-center lg:justify-start no-underline text-text-black text-p font-semibold transition-all mb-2 hover:text-text-orange"
              >
                <TbPhone className="text-bt" /> &nbsp;&nbsp;&nbsp; +91
                9988776600
              </a>
              <a
                href="/"
                className="flex items-center justify-center lg:justify-start no-underline text-text-black text-p font-semibold transition-all mb-2 hover:text-text-orange"
              >
                <TbMail className="text-bt" /> &nbsp; Zoomcarrental@gmail.com
              </a>
              <a
                href="/"
                className="flex items-center justify-center lg:justify-start no-underline text-text-black text-p font-semibold transition-all mb-2 hover:text-text-orange"
              >
                <TbLocation className="text-bt" /> &nbsp; India
              </a>
            </aside>
            <aside className="flex flex-col">
              <form className=" flex flex-col">
                <label htmlFor="Fname" className="text-p font-semibold mb-4">
                  Full Name <b className=" text-text-orange">*</b>
                </label>
                <input
                  className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9"
                  type="text"
                  name="name"
                  id="Fname"
                />
                <label htmlFor="Email" className="text-p font-semibold mb-4">
                  Email<b className=" text-text-orange">*</b>
                </label>
                <input
                  className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9"
                  type="email"
                  name="email"
                  id="Email"
                />
                <label htmlFor="msg" className="text-p font-semibold mb-4">
                  Tell us about it<b className=" text-text-orange">*</b>
                </label>
                <textarea
                  className="bg-slate-100 h-52 py-5 px-7 text-p border outline-none mb-10"
                  name="msg"
                  id="Mesg"
                  placeholder="Write Here.."
                ></textarea>

                <button
                  className=" bg-text-orange flex justify-center items-center py-7 px-12 rounded-md shadow-3xt transition-all border border-solid border-text-orange text-white text-bt font-semibold cursor-pointer hover:shadow-3xr hover:bg-text-orange"
                  type="submit"
                >
                  <TbMailOpened className="text-bt" /> &nbsp; Send Message
                </button>
              </form>
            </aside>
          </article>
        </main>
        <BookBanner />
      </section>
    </>
  );
};

export default Contact;
