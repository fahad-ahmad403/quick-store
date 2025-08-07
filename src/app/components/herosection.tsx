import Image from 'next/image'
import React from 'react'

function Herosection() {
  return (
    <section className='relative'>
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[515px]'>
        <Image src="/hero-section-image.jpg" alt='Hero Section Image' fill className='mt-[-1px] object-cover' />
      </div>
      <div className='absolute left-4 sm:left-6 md:left-10 lg:left-20 bottom-6 sm:bottom-8 md:bottom-[50px] lg:bottom-[53px]'>
        <h1 className='font-bold text-white text-[26px] sm:text-[28px] md:text-[35px] lg:text-[45px] xl:text-[64px]'>Galaxy S25 Ultra</h1>
        <h3 className='font-medium text-white pb-[30px] text-[16px] sm:text-[18px] lg:text-[24px]'>Power in every Pixel</h3>
        <button className='font-semibold py-[14px] px-[40px] sm:py-[18px] sm:px-[55.5px] bg-[var(--blue-color)] hover:bg-blue-600 text-white rounded-full text-[14px] sm:text-[16px]'>Buy Now</button>
      </div>
    </section>
  )
}

export default Herosection
