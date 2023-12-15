import React, { useState } from 'react'

import CAR_DATA from './CarData'
import CarBox from './CarBox';

const PickCar = () => {

  const [Active, setActive] = useState('FirstCar');
  const [colorBtn, setColorBtn] = useState('btn1');

  

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  }

  const coloringButton = (id) => {
    return colorBtn === id ? 'coloreDBtn' : "";
  }

  return (
    <>
      <main className=" py-40 px-0">
        <section className="my-0 mx-auto max-w-8lx py-0 px-10">
          <section className="flex flex-col">
            <atricle className=" my-0 mx-auto text-center text-text-black max-w-3lx mb-20">
              <h3 className=" text-h3 font-text font-medium">Vehicle Models</h3>
              <h2 className="text-h2 font-titles mt-2 mr-0 mb-4 ml-0">
                Our rental fleet
              </h2>
              <p className="text-p font-text text-text-gray leading-normal">
                Choose from a veriety of our amazing vehicles to rnt for your
                next adventure or business trip.
              </p>
            </atricle>

            <atricle className="flex flex-col Lp-l:flex-row justify-between gap-20">
              <div className="flex flex-col gap-3">
                
                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn1')}`}
                  onClick={() => { setActive('SecondCar'); btnID('btn1');}} >
                  Audi A1 S-Line
                </button>

                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn2')}`}
                  onClick={() => { setActive('FirstCar'); btnID('btn2'); coloringButton('btn2'); }}>
                  VW Golf 6
                </button>

                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn3')}`}
                  onClick={() => { setActive('ThirdCar'); btnID('btn3'); coloringButton('btn3'); }}>
                  Toyota Camry
                </button>

                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn4')}`}
                  onClick={() => { setActive('FourthCar'); btnID('btn4'); coloringButton('btn4'); }}>
                  BMW 320 ModernLine
                </button>

                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn5')}`}
                  onClick={() => { setActive('FifthCar'); btnID('btn5'); coloringButton('btn5'); }}>
                  Mercedes-Benz GLK
                </button>

                <button className={`text-bt font-titles font-semibold border-0 cursor-pointer py-6 px-10 bg-gray-200 text-left transition duration-all hover:bg-text-orange hover:text-white ${coloringButton('btn6')}`}
                  onClick={() => { setActive('SixthCar'); btnID('btn6'); coloringButton('btn6'); }}>
                  VW Passat CC
                </button>

              </div>
              {Active === "FirstCar" && <CarBox data={CAR_DATA} carID={0}/>}
              {Active === "SecondCar" && <CarBox data={CAR_DATA} carID={1}/>}
              {Active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2}/>}
              {Active === "FourthCar" && <CarBox data={CAR_DATA} carID={3}/>}
              {Active === "FifthCar" && <CarBox data={CAR_DATA} carID={4}/>}
              {Active === "SixthCar" && <CarBox data={CAR_DATA} carID={5}/>}
            </atricle>
          </section>
        </section>
      </main>
    </>
  );
}

export default PickCar