import React from 'react'

function Hero() {
  return (
    <div className='hero p-10 font-poppins'>
      <img src="images/Logo.png " alt=""  className='mx-auto w-40 lg:w-60'/>
      <div className='flex mx-10 items-center justify-center -mt-6'>
        <h1 className='text-5xl font-bold z-[1] lg:text-7xl'>TECFEST</h1>
        <div className='relative pt-14 -ml-10 w-max'>
          <h2 className='italic font-semibold -rotate-[20deg] absolute z-[1] text-[#E26767] lg:text-xl text-sm m-7 my-8 '>2022</h2>
          <img src="images/Star 1.png" className='lg:w-24 w-20' alt="" />
        </div> 
      </div>
      <div className='text-white items-center text-lg py-10 lg:text-2xl'>
        <div className=' mx-auto text-center bg-[#353A40] w-max -rotate-[4.63deg]'>
          <span className='px-3'>Catalyzing Indonesia's Future Entrepreneurs</span>
        </div>
        <div className=' mx-auto text-center bg-[#353A40] w-max -rotate-[2.77deg]'>
          <span className='px-3'>Through Technology and Youth-Led Innovations</span>
        </div>
      </div>
    </div>
    
    
  )
}

export default Hero