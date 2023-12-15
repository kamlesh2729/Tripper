import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CarBox = ({ data, carID }) => {
    const [carLoad, setCarLoad] = useState(true);

return (
    <>
    {data[carID].map((car, id) => (
    <main key={id} className=' gap-44 flex flex-col lg:flex-row sm:flex-row items-center justify-between'>
            <section className=' w-full lg:w-50 sm:w-50 relative'>
                {carLoad && <span className=' w-12 h-12 border-4 border-solid border-purple-500 rounded-round inline-block box-border absolute top-tp right-rt' id='ImgLoader'></span> }
                <img
                    style={{ display: carLoad ? "none" : "block"}}
                    className=' w-fit lg:w-full mt-24'
                    src={car.img} alt="car-img"
                onLoad={()=> setCarLoad(false)}/>
            </section>

            <section className=' w-61'>
                <article className=' w-full bg-text-orange text-spn flex items-center gap-6 text-white py-1 px-7 whitespace-nowrap'>
                    <span className='text-sp font-bold'>Rs{car.price }</span>/ rent per hours
                </article>

                <article className='grid grid-cols-com grid-rows-aut text-p'>
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'>
<span className='border-r-2 border-solid border-gray-500'>Model</span>
<span>{car.model}</span>
</div>

<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>Mark</span>
<span>{car.mark}</span>
</div>
                    
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>Year</span>
<span>{car.year}</span>
</div>
                    
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>Door</span>
<span>{car.doors}</span>
</div>
                    
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>AC</span>
<span>{car.air}</span>
</div>
                    
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>Transmission</span>
<span>{car.transmission}</span>
</div>
                    
<div className='grid grid-cols-con text-center grid-rows-aut py-3 px-2 border-b-2 border-solid border-x-2 border-gray-500'> 
<span className='border-r-2 border-solid border-gray-500'>Fuel</span>
<span>{car.fuel}</span>
</div>
                </article>

                <Link className='text-bt uppercase no-underline font-semibold text-white font-titles bg-text-orange py-4 px-4 flex w-full justify-center mt-6'>Reserve Now</Link>
            </section>     
    </main>   
    ))}
    </>
  )
}

export default CarBox