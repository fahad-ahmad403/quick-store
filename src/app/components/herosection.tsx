import Image from 'next/image'
import React from 'react'

function Herosection() {
  return (
    <section className='relative'>
      <Image src="/hero-section-image.jpg" alt='Hero Section Image' width={3000} height={500} className='mt-[-1px]' />
      <div className='absolute left-5 lg:left-20 bottom-8 md:bottom-[53px]'>
        <h1 className='font-bold xl:text-[64px] lg:text-[45px] md:text-[35px] sm:text-[28px] text-white'>Galaxy S25 Ultra</h1>
        <h3 className='font-medium xl:text-[24px] text-white pb-[30px] lg:text-[24px] md:text-[18px]'>Power in every Pixel</h3>
        <button className='font-semibold py-[18px] px-[55.5px] bg-[var(--blue-color)] hover:bg-blue-600 text-white rounded-full text-[16px]'>Buy Now</button>
      </div>
    </section>
  )
}

export default Herosection
