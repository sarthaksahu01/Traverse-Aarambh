import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="../../IMAGES/connected_world.svg"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
          id="connected_world"
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div
          className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0"
          id="header_description"
        >
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Travel in {/* <br className="hidden md:block" /> */}
              <span className="inline-block text-deep-purple-400">
                Your
              </span>{" "}
              Style
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Personalised, well-crafted tour packages for best experiences.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              reprehenderit amet perferendis cumque beatae praesentium omnis qui
              error atque! Magni consectetur harum sint inventore doloremque
              voluptas molestias hic numquam iusto.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              {/* <input
                placeholder="Name"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              /> */}
            </div>
            <div className="flex items-center mt-4">
              <Link to="/Tours" aria-label="">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Plan Now
                </button>
              </Link>
              <Link
                to="/Services"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </form>
        </div>
        <hr />
      </div>
    </div>
  );
};
