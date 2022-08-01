export const FAQs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-deep-purple-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">Why Aarambh?</p>
              <p className="text-gray-700">
                Established in 2022, Aarambh has since positioned itself as one
                of the leading companies, providing great tourism destinations,
                exclusive discounts, and a seamless online booking experience to
                many of its customers.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Booking exotic destinations with Aarambh
              </p>
              <p className="text-gray-700">
                At Aarambh, you can find the best of deals and cheap tickets to
                famous place you want by booking your tickets on our website or
                app.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How are you different from other players?
              </p>
              <p className="text-gray-700">
                Quality Supply - We believe in genuineness, in building
                vacations true to our travellers’ hearts. we dedicate our 100%
                to design best in class destinations
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Will the prices increase after I have booked my trip?
              </p>
              <p className="text-gray-700">
                This is the rarest of rare case. This generally happens when
                multiple travellers are looking at the destinations. there are
                chances that your prices may have changed after you booked. In
                such cases, we will intimate you as soon as we come to know of
                it and also ensure that we provide you suitable options.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                I want to cancel my trip due to personal reasons, but there is
                no cancel button. How do I go about it?
              </p>
              <p className="text-gray-700">
                You would need to write us an email as we will have to speak to
                all our partners to give you a consolidated cancellation amount.
                It will take anywhere between 48-72 hours for the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
