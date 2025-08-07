import Image from 'next/image'
import { featuredProductsData } from './data/featureddata';

function Featureproducts() {

  return (
    <section className='w-full h-auto px-4 sm:px-6 md:px-10 lg:px-[80px] mt-[60px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] max-w-[1280px] mx-auto justify-items-center'>
        {featuredProductsData.map(item => (
        <div key={item.id} className={`w-full max-w-[410px] h-[250px] rounded-[5px] hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)] p-4 flex justify-between items-center transition-all ${item.css}`}>
            <div className="flex flex-col pl-4 sm:pl-4 lg:pl-2 xl:pl-8">
                <span className="text-[8px] font-medium bg-white text-black px-[9px] py-1 rounded-full w-fit">
                {item.badge}
                </span>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4 md:mt-5 text-black ${item.titlecss}`}>{item.title}</h3>
                <p className="text-xs text-black font-medium mt-[10px] sm:mt-[15px]">From {item.price}</p>
                <button className="mt-[10px] sm:mt-[15px] bg-[var(--blue-color)] text-white text-xs font-medium px-4 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition w-fit cursor-pointer">
                Buy Now
                </button>
            </div>
            <div className={item.imagestyles}>
                <Image
                src={item.image}
                width={160}
                height={160}
                alt={item.alt}
                className="object-contain"
                />
            </div>
        </div>
        ))}
    </section>
  )
}

export default Featureproducts
