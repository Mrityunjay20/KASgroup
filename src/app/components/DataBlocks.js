export default function Datablocks() {
  return (
    <>
      <section className="text-gray-950 bg-[#dfdfdf] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 w-[90%] leading-relaxed">
            A health services innovation group Improving health and implementation process through high-quality evidence-based insights and solutions for multiple stakeholders. It empowers decision makers to make informed decisions, improve patient outcomes, and optimize resource allocation.
            </p>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#fc9b4c] border-2 border-[#EE7015] py-2 px-6 focus:outline-none hover:bg-[#EE7015] rounded-full text-lg">
                International Services
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              src="https://live.staticflickr.com/65535/53558401911_08fa087299_z.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
