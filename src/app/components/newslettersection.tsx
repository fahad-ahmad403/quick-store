const Newslettersection = () => {
  return (
    <section className="bg-[var(--black-color)] px-7 md:px-5 lg:px-20 mt-[60px] md:mt-[100px] h-auto py-8 md:py-0 md:h-[150px] flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-semibold text-white">Subscribe our newsletter</h2>
          <p className="text-base lg:text-[18px] text-white">
            Get our updates over latest news and features
          </p>
        </div>
        <form className="flex flex-row w-fit md:w-auto rounded-full overflow-hidden bg-white justify-center items-center md:pr-[6px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-black font-semibold w-full md:w-[276px] h-[40px] pl-5 outline-none flex-1 min-w-0 md:rounded-none"
          />
          <button
            type="submit"
            className="bg-[var(--blue-color)] text-white text-[16px] rounded-full w-fit md:w-[120px] h-[40px] md:h-[30px] px-6 md:px-[30.5px] py-[3px] font-medium hover:opacity-90 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newslettersection;
