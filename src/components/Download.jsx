import React from 'react'

import Img1 from '../Assets/download/googleapp.svg'
import Img2 from '../Assets/download/appstore.svg'
import Dbg from '../Assets/banners/bg02.png'

const Download = () => {
  return (
    <>
      <main
        className=" bg-bg-gray bg-top bg-no-repeat bg-cover w-full h-auto py-40 px-0"
        style={{ backgroundImage: `url(${Dbg})` }}
      >
        <section className="my-0 mx-auto max-w-8lx py-0 px-10">
          <article className='flex flex-col gap-8 max-w-3x4 text-left'>
            <h2 className='text-h2 font-bold text-text-black'>Download our app to get moust out of it</h2>
            <p className='text-p text-text-gray font-text leading-normal'>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className='flex gap-12 mt-8'>
              <img src={Img1} className=' cursor-pointer w-2/5' alt="Android-img" />
              <img src={Img2} className=' cursor-pointer w-2/5' alt="Ios-img" />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Download