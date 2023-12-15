import React from "react";

import Heropages from "../components/Heropages";
import BookBanner from "../components/BookBanner";

const OurTeam = () => {
  const teamPpl = [
    { name: "Raj Singh", age: 21, Role: "Business Owner" },
    { name: "Sameer Shrama", age: 21, Role: "Sales Manger" },
    { name: "Saurabh Pawar", age: 21, Role: "Maneger" },
    { name: "Viraj Shaha", age: 21, Role: "Photographer" },
    { name: "Leo Das", age: 21, Role: "Mechanic" },
    { name: "Lauren Rivera", age: 21, Role: "Car Detailist" },
  ];
  return (
    <>
      <section>
        <Heropages name="Our Team" />
        <main className="my-0 mx-auto w-full lg:max-w-8lx py-0 px-10">
          <article className="grid grid-cols-com sm:grid-cols-con lg:grid-cols-con Lp-l:grid-cols-mod Lp-l:grid-rows-aut gap-16 items-center text-center py-40 px-8 w-fit sm:w-fit lg:w-fit Lp-l:w-team my-0 mx-auto">
            {teamPpl.map((Ppl, id) => (
              <div key={id} className=" w-full lg:w-tbox bg-white shadow-3tb">
                <div className="w-full h-auto bg-slate-100">
                  <img src={Ppl.age} className="w-full" alt="team-img" />
                </div>
                <div className=" text-text-black p-12">
                  <h3 className=" text-h4">{Ppl.name}</h3>
                  <p className="text-p font-medium text-gray-600">{Ppl.Role}</p>
                </div>
              </div>
            ))}
          </article>
        </main>
        <BookBanner />
      </section>
    </>
  );
};

export default OurTeam;
