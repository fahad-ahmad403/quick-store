import Image from 'next/image'

function Discountsection() {
  return (
    <section className='w-full h-[420px] bg-[linear-gradient(-62.841deg,_rgb(5,21,22)_0%,_rgb(149,207,211)_100%)] flex relative mt-[162px]'>
      <div className='pt-[100px] pl-[110px] text-black'>
        <p className='text-[64px] font-semibold'>Samsung S25 Ultra</p>
        <p className='text-[24px] font-medium'>Power in every pixel</p>
        <button className='px-[44.5px] py-[18px] mt-[42px] text-[16px] bg-white text-black font-semibold rounded-full cursor-pointer hover:bg-gray-100'>Learn more</button>
      </div>
      <div>
        <Image src="/samsung-s25-ultra-thumbnail.svg" alt='image' className='absolute bottom-0 right-[180px]' width={334} height={500}/>
      </div>
    </section>
  )
}

export default Discountsection
