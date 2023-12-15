import React from 'react'

import Selectcar from '../Assets/plan/icon1.png'
import Contact from '../Assets/plan/icon2.png'
import Drive from '../Assets/plan/icon3.png'

const PlanTrip = () => {
  return (
    <>
      <main className=' bg-bg-white py-22 px-0'>
        <div className="my-0 mx-auto max-w-8lx py-0 px-10">
          <div className='flex flex-col'>
            <section className='my-0 mx-auto text-center text-text-black'>
              <h3 className="text-h3 font-semibold font-text">Plan your trip now</h3>
              <h2 className="text-h2 font-bold font-titles mt-5 mr-0 mb-12 ml-0">Quick & easy car rental</h2>
            </section>

            <section className="grid grid-cols-com lg:grid-cols-mod grid-rows-aut mt-15 py-0 px-12">
              <article className=' text-center flex flex-col items-center py-4 px-24'>
                <img src={Selectcar} className=' w-65 h-auto' alt="select-car" />
                <h3 className=' text-h3 mb-4 font-semibold'>Select Car</h3>
                <p className='text-p font-text text-text-gray leading-normal'>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </article>

              <article className='text-center flex flex-col items-center py-4 px-24'>
                <img src={Contact} className=' w-65 h-auto' alt="select-car" />
                <h3 className=' text-h3 mb-4 font-semibold'>Contact Operator</h3>
                <p className=' text-p font-text text-text-gray leading-normal'>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </article>

              <article className='text-center flex flex-col items-center py-4 px-24'>
                <img src={Drive} className=' w-65 h-auto' alt="select-car" />
                <h3 className=' text-h3 mb-4 font-semibold'>Let's Drive</h3>
                <p className=' text-p font-text text-text-gray leading-normal'>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default PlanTrip