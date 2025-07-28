const Newslettersection = () => {
  return (
    <section className="bg-[var(--black-color)] px-20 md:px-16 mt-[100px] h-[150px] flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-[32px] font-semibold text-white">Subscribe our newsletter</h2>
          <p className="text-[18px] text-white">
            Get our updates over latest news and features
          </p>
        </div>
        <form className="flex w-full md:w-auto rounded-full overflow-hidden bg-white justify-center items-center pr-[6px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-black font-semibold w-[276px] h-[40px] pl-5 outline-none flex-1 min-w-0"
          />
          <button
            type="submit"
            className="bg-[var(--blue-color)] text-white text-[16px] rounded-full w-[120px] h-[30px] px-[30.5px] py-[3px] font-semibold hover:opacity-90 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newslettersection;
