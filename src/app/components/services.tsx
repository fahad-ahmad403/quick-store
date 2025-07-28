import Image from 'next/image'
import { servicesData } from './data/servicedata'

function Services() {
  return (
    <section className='bg-[rgb(211,231,255)] w-full h-[450px] px-20'>
        <h2 className='text-[32px] font-semibold pt-8 flex justify-center items-center pb-[42px]'>Our Services</h2>
        <div className='flex justify-center gap-x-[72px]'>
            {servicesData.map((item) => (
            <div key={item.id} className="w-[250px] h-[250px] bg-white rounded-[5px] shadow-md text-center space-y-5">
            <div className="flex justify-center">
                <div className="bg-blue-100 p-4 rounded-xl mt-9">
                {/* <Truck className="text-blue-500 w-6 h-6" /> */}
                <Image alt='image' width={24} height={24} src={item.icon}/>
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
