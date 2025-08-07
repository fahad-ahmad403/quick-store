import Image from 'next/image'
import { servicesData } from './data/servicedata'

function Services() {
  return (
    <section className='bg-[rgb(211,231,255)] w-full h-auto px-5 sm:px-10 xl:px-20 mt-[60px] md:mt-[100px] pb-10 xl:pb-[78px]'>
        <h2 className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold pt-[30px] flex justify-center items-center pb-5 md:pb-[62px]'>Our Services</h2>
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-x-[72px] md:gap-x-5 justify-items-center'>
            {servicesData.map((item) => (
            <div key={item.id} className="max-w-[250px] h-[250px] bg-white rounded-[5px] shadow-md text-center space-y-5">
            <div className="flex justify-center">
                <div className="bg-blue-100 p-4 rounded-xl mt-9">
                <Image alt={item.alt} width={24} height={24} src={item.icon}/>
                </div>
            </div>
            <h3 className="text-[16px] font-bold text-black">{item.title}</h3>
            <p className="text-[10px] font-medium text-[rgb(70,70,70)] px-5">{item.description}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Services
