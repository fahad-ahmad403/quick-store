import Image from 'next/image'

function Discountsection() {
  return (
    <section className='w-full h-auto sm:h-[350px] lg:h-[420px] bg-[linear-gradient(-62.841deg,_rgb(5,21,22)_0%,_rgb(149,207,211)_100%)] flex relative mt-[100px] md:mt-[160px] flex-col'>
      <div className='pt-[50px] sm:pt-[100px] pl-0 sm:pl-10 lg:pl-14 xl:pl-[110px] text-black flex flex-col items-center sm:items-start pb-4 sm:pb-0'>
        <p className='text-[42px] lg:text-[52px] xl:text-[64px] font-semibold text-center'>Samsung S25 Ultra</p>
        <p className='text-[24px] font-medium'>Power in every pixel</p>
        <button className='px-[44.5px] py-[18px] mt-[42px] text-[16px] bg-white text-black font-semibold rounded-full cursor-pointer hover:bg-gray-100 w-fit'>Learn more</button>
      </div>
      <div className='flex justify-center'>
        <Image src="/samsung-s25-ultra-thumbnail.svg" alt='Samsung S25 Ultra' className='sm:absolute sm:bottom-0 sm:right-16 lg:right-14 xl:right-[180px] w-[250px] h-[280px] sm:w-[270px] sm:h-[380px] lg:w-[334px] lg:h-[500px] static' width={334} height={500}/>
      </div>
    </section>
  )
}

export default Discountsection
