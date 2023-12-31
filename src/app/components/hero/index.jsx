const Hero = () => {
  return (
    <div className="container mx-auto max-w-4xl text-center flex flex-col justify-center items-center">
      <div className="rounded-[40px] border uppercase backdrop-blur-sm text-xs text-primary font-medium md:mt-0 mb-4 py-2 px-4 border-primary/40 w-fit mx-auto text-center z-10">
        Top Notch Commerece Tools
      </div>
      <h1 className="text-4xl md:text-6xl font-bold md:leading-[72px] mt-6 max-w-3xl">
      The new standard for <br />
       Commerce Infrastructure
      </h1>
      <p className="mt-6 text-primary/80 text-lg md:text-xl mb-10 max-w-xl">
      Shopwave is the leading platform for enterprise retail and fast service hospitality. We help the world's leading brands to improve efficiency.


      </p>
      <form className="flex flex-1 flex-col gap-6 items-center w-full">
        <div className="flex md:flex-row flex-col items-center justify-center mt-6 w-full max-w-lg">
          <div className="flex flex-1 flex-col w-full relative">
            <div className="group flex items-center space-x-2 w-full rounded-md border-input px-3 py-2 focus-within:outline-none focus-within:border-primary/30 h-11 md:h-14 rounded-b-none border-0 border-t border-x md:rounded-r-none md:rounded-l-md md:border md:border-r-0 bg-background md:px-6">
              <input
                className="bg-transparent w-full ring-offset-background file:border-0 outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground text-base"
                placeholder="Email address"
                name="email"
                value=""
              />
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-accent text-accent-foreground hover:bg-accent/90 h-11 md:h-14 px-6 rounded-md text-base rounded-t-none md:rounded-l-none w-full md:w-fit md:rounded-r-md"
            type="submit"
          >
            Book Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Hero;
