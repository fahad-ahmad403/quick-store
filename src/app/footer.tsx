import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[var(--black-color)] mt-[60px] md:mt-[100px]">
      <div>
        <div className="flex flex-wrap gap-x-[102px] pt-[70px] pl-[50px] sm:pl-[100px] pb-[60px] w-fit gap-y-8 lg:gap-y-0">
          {/* Quick Column */}
          <div className="mb-10 md:mb-0">
            <Image src="/footer-logo.svg" alt="Footer Logo" width={148} height={56} />
          </div>
          
          {/* Repeated Columns */}
          <div className="flex flex-wrap gap-x-[150px] gap-y-8 md:gap-y-0">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="gap-x-[10px] min-w-[120px]">
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
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-white w-full h-auto md:h-[67px] px-[20px] md:px-[100px] py-4'>
          <p className='text-white text-sm md:text-base mb-4 md:mb-0'>Quickstore 2025 All right reserved</p>
          <div className="flex items-center space-x-[30px]">
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/linkedin-icon.svg" alt="LinkedIn Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/youtube-icon.svg" alt="Youtube Logo" width={24} height={16.85} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/facebook-icon.svg" alt="Facebook Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/x-icon.svg" alt="Twitter Logo" width={24} height={24} />
            </a>
            <a href="#" className="text-[rgb(100,100,100)] hover:text-[rgb(30,30,30)] transition-colors duration-200">
              <Image src="/insta-icon.svg" alt="Instagram Logo" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;