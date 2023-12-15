import React from "react";
import { Link } from "react-router-dom";

import Heropages from "../components/Heropages";
import BookBanner from "../components/BookBanner";
import { TbStar, TbCar } from "react-icons/tb";

const CarModels = () => {
  return (
    <>
      <section>
        <Heropages name="Vehicle Models" />
        <section className="my-0 mx-auto w-full lg:max-w-8lx py-0 px-10">
          <main className="grid grid-cols-com sm:grid-cols-con lg:grid-cols-con Lp-l:grid-cols-mod grid-rows-aut gap-12 items-center text-center py-40 px-0 w-fit sm:w-fit lg:w-fit Lp-l:w-team my-0 mx-auto">
            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className=" border border-solid border-slate-200 rounded-md flex flex-col w-mbox">
              <div className="w-full h-auto rounded-md">
                <img src="" alt="" className="w-full h-98" />
                <div className="py-8 px-12 flex flex-col text-text-black">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left gap-2">
                      <p className="text-h3 font-bold">Audi A1</p>
                      <span className="flex gap-2">
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                        <TbStar className=" text-str text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className=" text-sp font-bold">Rs 290</h4>
                      <p className=" text-p">per hour</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-con gap-y-8 gap-x-28 mt-10 my-8 mx-auto pb-10 border-b border-solid border-slate-400">
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Audi
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      4/5 &nbsp; <TbCar className="text-bt" />{" "}
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      <TbCar className="text-bt" /> &nbsp; Manual
                    </span>
                    <span className=" text-spn flex items-center font-medium text-slate-500 text-left">
                      Diesel &nbsp; <TbCar className="text-bt" />
                    </span>
                  </div>
                  <div className=" bg-text-orange py-7 px-12 rounded-md shadow-3xt transition-all border-2 border-solid border-text-orange text-spn cursor-pointer hover:shadow-3xr hover:bg-text-orange">
                    <Link className=" no-underline text-white font-bold">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </section>
        <BookBanner />
      </section>
    </>
  );
};

export default CarModels;
