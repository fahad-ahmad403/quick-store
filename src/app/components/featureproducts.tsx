import Image from 'next/image'
import { featuredProductsData } from './data/featureddata';

function Featureproducts() {

  return (
    <section className='w-full h-auto px-[80px] pt-[100px] pb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-items-center'>
        {featuredProductsData.map(item => (
        <div key={item.id} className={`max-w-[410px] h-[250px] rounded-[5px] hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)] p-4 flex justify-between items-center transition-all ${item.css}`}>
            <div className="flex flex-col pl-8">
                <span className="text-[8px] font-medium bg-white text-black px-[9px] py-1 rounded-full w-fit">
                {item.badge}
                </span>
                <h3 className={`text-2xl font-semibold mt-5 text-black ${item.titlecss}`}>{item.title}</h3>
                <p className="text-xs text-black font-medium mt-[15px]">From {item.price}</p>
                <button className="mt-[15px] bg-[var(--blue-color)] text-white text-xs font-medium px-4 py-3 rounded-full hover:bg-blue-600 transition w-fit cursor-pointer">
                Buy Now
                </button>
            </div>
            <div className={item.imagestyles}>
                <Image
                src={item.image}
                width={160}
                height={160}
                alt="Samsung S25 Ultra"
                className="object-contain"
                />
            </div>
        </div>
        ))}
    </section>
  )
}

export default Featureproducts
