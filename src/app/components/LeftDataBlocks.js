export default function LeftDatablocks() {
  return (
    <>
      <section className="text-gray-950 bg-[#DFDFDF] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              src="https://live.staticflickr.com/65535/53558413646_d3fcf8d7e0_z.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
            We offer a wide range of high- quality services to pharmaceutical, medical device companies and life science consultants across global and local levels. Our dedicated team of experienced health economists, market access specialists, medical and regulatory writers, data analysts and strategy consultants work collaboratively to enable quicker project initiation and deliveries on tighter timelines.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#fc9b4c] border-2 border-[#EE7015] py-2 px-6 focus:outline-none hover:bg-[#EE7015] rounded-full text-lg">
                International Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
