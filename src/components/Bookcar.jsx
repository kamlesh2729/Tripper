import React, { useEffect, useState } from 'react'

import { TbX, TbCar, TbCalendarEvent, TbMapPinFilled, TbInfoCircleFilled  } from "react-icons/tb";
import Bookbg from '../Assets/book-car/book-bg.png'
import CarAudi from "../Assets/cars-big/audia1.jpg";
import CarGolf from "../Assets/cars-big/golf6.jpg";
import CarToyota from "../Assets/cars-big/toyotacamry.jpg";
import CarBmw from "../Assets/cars-big/bmw320.jpg";
import CarMercedes from "../Assets/cars-big/benz.jpg";
import CarPassat from "../Assets/cars-big/passatcc.jpg";

const Bookcar = () => {
  const [model, setModel] = useState(false);

  const [cartype, setCarType] = useState("");
  const [pickup, setPickUp] = useState("");
  const [dropoff, setDropOff] = useState("");
  const [picktime, setPickTime] = useState("");
  const [droptime, setDropTime] = useState("");
  const [carimg, setCarImg] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  let imgUrl;
  switch (carimg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModerLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector("#error-Msg");
    if (
      pickup === "" ||
      dropoff === "" ||
      picktime === "" ||
      droptime === "" ||
      cartype === ""
    ) { errorMsg.style.display = "flex"; }
    else {
      setModel(!model);
      const modalBook = document.querySelector('#book-Model');
      modalBook.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  }

  const BookcarD = (e) => {
    e.preventDefault();
    const doneMes = document.querySelector("#done-Msg");
    const errorMsg = document.querySelector("#error-Msg");
    if (
      name === "" ||
      lastname === "" ||
      phone === "" ||
      age === "" ||
      email === "" ||
      address === "" ||
      city === "" || 
      zipcode === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      doneMes.style.display = "flex";
    }
  }

  useEffect(() => {
    if (model === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
   }, [model]);

  const hideMessage = () => {
    const doneMes = document.querySelector("#done-Msg");
    doneMes.style.display = "none";
    const errorMsg = document.querySelector("#error-Msg");
    errorMsg.style.display = "none";
  }

return (
  <>
    <main className=" relative bg-gradient-to-b from-bg-gray to-bg-white">
      <section
        onClick={openModal}
        className={`fixed w-full h-full bg-mo z-300 top-0 right-0
        ${model ? "active-model" : "block-model"}`}
      ></section>

      <section className="my-0 mx-auto max-w-8lx py-0 px-10">
        <article className="my-0 mx-auto mb-40">
          <div
            className=" bg-bg-white w-full h-auto pt-16 pr-18 pb-20 pl-21 shadow-2ts relative z-5 text-black rounded-md bg-center bg-no-repeat bg-cover flex flex-col"
            style={{ backgroundImage: `url(${Bookbg})` }}
          >
            <h2 className="text-h3 font-bold mb-10">Book a car</h2>
            <p
              id="error-Msg"
              className=" text-red-900 bg-red-200 py-4 px-6 mb-7 -mt-4 border border-solid border-transparent rounded-xl text-p font-medium hidden justify-between items-center"
            >
              All fields required!
              <TbX
                className="cursor-pointer"
                onClick={hideMessage}
                width={20}
                height={20}
              />
            </p>
            <p
              id="done-Msg"
              className=" text-green-800 bg-green-200 py-4 px-6 mb-7 -mt-4 border border-solid border-transparent rounded-xl text-p font-medium hidden justify-between items-center"
            >
              Check your email to confirm an order.
              <TbX
                className=" cursor-pointer"
                onClick={hideMessage}
                width={20}
                height={20}
              />
            </p>
            <form className="grid grid-cols-com lg:grid-cols-mod grid-rows-aut3 gap-8">
              <div className="flex flex-col">
                <label className="text-p flex items-center font-semibold mb-lb">
                  <TbCar className="text-h3" /> &nbsp; Select Your Car Type
                  <b className=" text-text-orange">*</b>
                </label>
                <select
                  onChange={(e) => {
                    setCarType(e.target.value);
                    setCarImg(e.target.value);
                  }}
                  required
                  className="text-p text-gray-300 font-text border border-solid border-blue-200 rounded font-normal py-5 px-5 outline-0"
                >
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModerLine">BMW 320 ModerLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-p flex items-center font-semibold mb-lb">
                  <TbMapPinFilled className="text-h3" /> &nbsp; Pick-up{" "}
                  <b className=" text-text-orange">*</b>
                </label>
                <select
                  onChange={(e) => setPickUp(e.target.value)}
                  required
                  className="text-p text-gray-300 font-text border border-solid border-blue-200 rounded font-normal py-5 px-5 outline-0"
                >
                  <option>Select pick up location</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chenai">Chenai</option>
                  <option value="Banglor">Banglor</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Gujrat">Gujrat</option>
                </select>
              </div>

              <div className=" flex flex-col">
                <label className="text-p flex items-center font-semibold mb-lb">
                  <TbMapPinFilled className="text-h3" /> &nbsp; Drop-of{" "}
                  <b className=" text-text-orange">*</b>
                </label>
                <select
                  onChange={(e) => setDropOff(e.target.value)}
                  className="text-p text-gray-300 font-text border border-solid border-blue-200 rounded font-normal py-5 px-5 outline-0"
                >
                  <option>Select drop of location</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chenai">Chenai</option>
                  <option value="Banglor">Banglor</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Gujrat">Gujrat</option>
                </select>
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="picktime"
                  className="text-p flex items-center font-semibold mb-lb"
                >
                  <TbCalendarEvent className="text-h3" /> &nbsp; pick-up{" "}
                  <b className=" text-text-orange">*</b>
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={(e) => setPickTime(e.target.value)}
                  className=" outline-0 text-p text-gray-400 pr-12 border border-solid border-blue-100"
                  id="Picktime"
                />
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="droptime"
                  className="text-p flex items-center font-semibold mb-lb"
                >
                  <TbCalendarEvent className="text-h3" /> &nbsp; Drop-of{" "}
                  <b className=" text-text-orange">*</b>
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={(e) => setDropTime(e.target.value)}
                  className=" outline-0 text-p text-gray-400 pr-12 border border-solid border-blue-100"
                  id="droptime"
                />
              </div>

              <button
                type="submit"
                onClick={openModal}
                className="py-5 px-5 h-fit self-end border font-text text-spn font-medium text-white bg-text-orange shadow-3xt cursor-pointer transition-all hover:shadow-3xr"
              >
                Search
              </button>
            </form>
          </div>
        </article>
      </section>
    </main>

    <section
      id="book-Model"
      className={`flex-col fixed overflow-x-hidden overflow-y-scroll z-90 top-2/2 left-2/4 -translate-x-1/2 -translate-y-1/2 w-full lg:w-82 h-full border-2 border-solid border-white bg-slate-50 pr-1 text-text-black 
      ${model ? "active-modal" : "block-model"}`}
    >
      {/* title */}
      <article className="flex justify-between py-4 px-6 bg-text-orange text-white items-center">
        <h2 className=" text-h3 font-semibold uppercase">
          Complete Reservation
        </h2>
        <TbX className="text-h3" onClick={openModal} />
      </article>
      {/* message */}
      <article className="flex flex-col gap-6 py-8 lg:px-12 bg-red-100">
        <h4 className="text-4h flex lg:items-center font-extrabold text-text-orange">
        <TbInfoCircleFilled/> &nbsp;icon Upon complete this reservation enquiry, you will receive:
        </h4>
        <p className="text-pn text-gray-500 font-semibold leading-relaxed ">
          Your rental voucher to produce on arrival at the rental desk and
          toll-free customer support number.
        </p>
      </article>
      {/* car-details  */}
      <article className="bg-white py-12 px-12 grid grid-cols-com lg:grid-cols-con lg:gap-0 gap-14 border-b border-solid border-gray-400">
        <div className="flex items-center lg:items-start flex-col gap-13">
          <div className="flex items-center flex-col gap-8">
            <h5 className="text-bt text-text-orange font-bold">
              Loction & Date
            </h5>
            <span className="flex gap-4">
              <TbMapPinFilled className='text-bt'/>
              <div>
                <h6 className="text-p mb-1 font-semibold">
                  Pick-Up Date & Time
                </h6>
                <p className="text-p text-gray-500">
                  {picktime}
                  <input
                    type="time"
                    className=" text-center w-32 text-input cursor-pointer border border-black"
                  />
                </p>
              </div>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="flex gap-4">
              <TbMapPinFilled className='text-bt'/>
              <div>
                <h6 className="text-p mb-1 font-semibold">
                  Drop-Off Date & Time
                </h6>
                <p className="text-p text-gray-500">
                  {droptime}
                  <input
                    type="time"
                    className=" text-center w-32 text-input cursor-pointer border border-black"
                  />
                </p>
              </div>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="flex gap-4">
              <TbMapPinFilled className='text-bt'/>
              <div>
                <h6 className="text-p mb-1 font-semibold">Picj-Up Location</h6>
                <p className="text-p text-gray-500">{pickup}</p>
              </div>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="flex gap-4">
              <TbMapPinFilled className='text-bt' />
              <div>
                <h6 className="text-p mb-1 font-semibold">Drop-Off Location</h6>
                <p className="text-p text-gray-500">{dropoff }</p>
              </div>
            </span>
          </div>
        </div>

        <div className="flex items-center lg:items-start flex-col gap-12">
          <h5 className="text-bt text-text-orange font-bold">
            <span className=" text-text-black">Car -</span>
            {cartype}
          </h5>
          {imgUrl && <img src={imgUrl} alt="car-img" />}
        </div>
      </article>
      {/* personal-info  */}
      <article className="py-12 px-12 bg-white flex flex-col">
        <h4 className="text-spn uppercase font-semibold text-text-orange mb-8">
          Personal Information
        </h4>
        <form onSubmit={BookcarD} className="flex flex-col">
          <div className="grid grid-cols-com lg:grid-cols-con gap-8 py-4 px-0">
            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                First Name <b className=" text-text-orange">*</b>
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your first name"
              />
              <p>This field is required.</p>
            </span>

            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Last Name <b className=" text-text-orange">*</b>
              </label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your last name"
              />
              <p>This field is required.</p>
            </span>

            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Phone Number <b className=" text-text-orange">*</b>
              </label>
              <input
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your phone number"
              />
              <p>This field is required.</p>
            </span>

            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Age <b className=" text-text-orange">*</b>
              </label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="19"
              />
              <p>This field is required.</p>
            </span>
          </div>

          <div className="grid grid-cols-com gap-8 py-4 px-0">
            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Email <b className=" text-text-orange">*</b>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your email address"
              />
              <p>This field is required.</p>
            </span>

            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Address <b className=" text-text-orange">*</b>
              </label>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your address"
              />
              <p>This field is required.</p>
            </span>
          </div>

          <div className="grid grid-cols-com lg:grid-cols-con gap-8 py-4 px-0">
            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                City <b>*</b>
              </label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your city"
              />
              <p>This field is required.</p>
            </span>

            <span className="flex flex-col gap-2">
              <label className="text-p font-medium text-gray-500">
                Zip Code <b className=" text-text-orange">*</b>
              </label>
              <input
                type="number"
                onChange={(e) => setZipCode(e.target.value)}
                className="py-ft px-st bg-gray-300 text-gray-600 text-p font-medium outline-0 border-0"
                placeholder="Enter your zip code"
              />
              <p>This field is required.</p>
            </span>
          </div>

          <span className="flex gap-4 items-center text-p text-gray-500 mt-8 mb-12">
            <input type="checkbox" className="w-6 h-6" required></input>
            <p className="text-gray-600">
              Please send me latest news and updates
            </p>
          </span>

          <div className=" bg-slate-200 my-0 -mx-12 p-12 text-center lg:text-right">
            <button
              type="submit"
              className="text-h3 text-white font-bold bg-text-orange border border-solid border-yellow-300 py-5 px-8 cursor-pointer transition-all hover:bg-red-500"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </article>
    </section>
  </>
);
}

export default Bookcar