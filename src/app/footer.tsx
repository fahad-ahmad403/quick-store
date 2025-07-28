import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-[359px] bg-[var(--black-color)] mt-[100px]">
      <div>
        <div className="flex gap-x-[102px] pt-[70px] pl-[100px] pb-[60px] w-fit">
          {/* Quick Column */}
          <div>
            {/* <h3 className="text-[rgb(30,30,30)] font-bold text-xl mb-6 tracking-tight">
              Quick
            </h3> */}
            <Image src="/footer-logo.svg" alt="Footer Logo" width={148} height={56} />
          </div>
          
          {/* Repeated Columns */}
          <div className="flex gap-x-[150px]">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="gap-x-[10px]">
              <h3 className="text-white font-bold text-[18px] mb-5">
                About Us
              </h3>
              <ul>
                {['Contact', 'FAQ', 'Blog', 'Services'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white hover:text-[var(--blue-color)] text-lg"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Copyright and Social Media Links */}
        <div className='flex justify-between items-center border-t border-white w-full h-[67px] px-[100px]'>
          <p className='text-white'>Quickstore 2025 All right reserved</p>
          <div className="flex items-center space-x-[30px]">
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/linkedin-icon.svg" alt="Footer Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/youtube-icon.svg" alt="Footer Logo" width={24} height={16.85} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/facebook-icon.svg" alt="Footer Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/x-icon.svg" alt="Footer Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/insta-icon.svg" alt="Footer Logo" width={24} height={24} />
            </a>
          </div>
        </div>
        
        {/* Newsletter Form */}
        {/* <div className="mt-20 border-t border-[rgb(230,230,230)] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(30,30,30)] mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-[rgb(100,100,100)] text-lg max-w-md">
                Stay updated with our latest news and offers
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 border border-[rgb(200,200,200)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(80,80,80)] text-[rgb(30,30,30)]"
              />
              <button className="bg-[rgb(30,30,30)] hover:bg-[rgb(50,50,50)] text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;