// import React from 'react'
import WelcomeText from './components/WelcomeText';
import Slider from './components/Cart';

const Dashboard = () => {
  return (
    <>
      <div className=" mt-8 ml-20 mr-20">
        <WelcomeText />

        <Slider />

        <div >
          <h2 className="text-black ml-10 mt-10 text-4xl">Charlie, hope we understand you better</h2>
          <div className="flex mt-10 ml-10 mr-20 gap-4">
            <div className="max-w-lg mx-auto h-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image section */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src="src/assets/img/cusine_0.png"
                  alt="Epicurean Cuisine"
                />
                {/* Emoji Icon */}
                <div className="absolute top-4 left-4 bg-orange-200 rounded-full p-2">
                  <span className="text-2xl">😕</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Date */}
                <h3 className="text-lg font-semibold">Indulge in the Finest Epicurean Cuisines</h3>
                <p className="text-gray-500 text-sm mt-1">on Nov 17, 2022</p>

                {/* Message */}
                <p className="mt-4 text-gray-700">
                  Hi Charlie, we came to know from our chef John that you didn’t enjoy the Epicurean
                  cuisines yesterday. As a compensation, we would like to offer you a free Italian cuisine
                  as a goodwill gesture. Would you like to accept our request?
                </p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                    Yes, I accept
                  </button>
                  <button className="text-gray-600 hover:underline">No, thanks</button>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto h-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image section */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src="src\assets/img/cusine_0.png"
                  alt="Epicurean Cuisine"
                />
                {/* Emoji Icon */}
                <div className="absolute top-4 left-4 bg-orange-200 rounded-full p-2">
                  <span className="text-2xl">😕</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Date */}
                <h3 className="text-lg font-semibold">Indulge in the Finest Epicurean Cuisines</h3>
                <p className="text-gray-500 text-sm mt-1">on Nov 17, 2022</p>

                {/* Message */}
                <p className="mt-4 text-gray-700">
                  Hi Charlie, we came to know from our chef John that you didn’t enjoy the Epicurean
                  cuisines yesterday. As a compensation, we would like to offer you a free Italian cuisine
                  as a goodwill gesture. Would you like to accept our request?
                </p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                    Yes, I accept
                  </button>
                  <button className="text-gray-600 hover:underline">No, thanks</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <h2 className="text-black ml-10 mt-10 text-4xl">Today recommendations for you, Charlie!</h2>
          <div className="flex mt-10 ml-10 mr-20 gap-4">
            <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image section with overlay */}
              <div className="relative">
                <img
                  className="w-56 h-72 object-cover"
                  src="src/assets/Images Cropped/Golf/golf12.png"
                  alt="Round of Golf"
                />
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-.06-.06a5.5 5.5 0 00-7.78 7.78l7.84 7.84 7.84-7.84a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </div>

                {/* Large Number */}
                <div className="absolute bottom-4 right-4 text-white text-5xl font-bold">
                  1
                </div>

                {/* Tag and Date */}
                <div className="absolute bottom-2 left-2 text-white text-sm">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h18v18H3z"
                      />
                    </svg>
                    <span>Invigorating & Uplifting</span>
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 text-white text-sm">
                  Nov 10-29
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">Round of Golf</h3>
                {/* Time */}
                <p className="text-gray-500 text-sm mt-1">10:30 AM - 7:30 PM</p>
              </div>
            </div>
            {/* for next card */}

            <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image section with overlay */}
              <div className="relative">
                <img
                  className="w-56 h-72 object-cover"
                  src="src/assets/Images Cropped/Golf/golf12.png"
                  alt="Round of Golf"
                />
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-.06-.06a5.5 5.5 0 00-7.78 7.78l7.84 7.84 7.84-7.84a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </div>

                {/* Large Number */}
                <div className="absolute bottom-4 right-4 text-white text-5xl font-bold">
                  1
                </div>

                {/* Tag and Date */}
                <div className="absolute bottom-2 left-2 text-white text-sm">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h18v18H3z"
                      />
                    </svg>
                    <span>Invigorating & Uplifting</span>
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 text-white text-sm">
                  Nov 10-29
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">Round of Golf</h3>
                {/* Time */}
                <p className="text-gray-500 text-sm mt-1">10:30 AM - 7:30 PM</p>
              </div>
            </div>




          </div>
          <div className="gap-4 ml-10 mr-20">
            <h2 className="text-black mt-10 text-4xl">Charlie, here is your master journey with us so far</h2>
            <div className="flex mt-10  gap-4">
              <div className="max-w-xs h-auto bg-white rounded-lg shadow-lg overflow-hidden gap-4">
                <div className="relative">
                  <img className="w-56 h-72 object-cover" src="src/assets/Images Cropped/Golf/golf12.png" alt="Round OF Golf" />
                  {/* heart icon */}
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-.06-.06a5.5 5.5 0 00-7.78 7.78l7.84 7.84 7.84-7.84a5.5 5.5 0 000-7.78z"
                      />
                    </svg>
                  </div>
                  {/* for larger number on image */}
                  <div className="absolute bottom-4 right-4 text-white text-8xl font-bold opacity-80 text-stroke">
                    1
                  </div>
                  {/* Tag and Date */}
                  <div className="absolute bottom-2 left-2 text-white text-sm">
                    <span className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h18v18H3z"
                        />
                      </svg>
                      <span>Invigorating & Uplifting</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-sm">
                    Nov 10-29
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">Round of Golf</h3>
                  {/* Time */}
                  <p className="text-gray-500 text-sm mt-1">10:30 AM - 7:30 PM</p>
                </div>
              </div>
              <div className="max-w-xs h-auto bg-white rounded-lg shadow-lg overflow-hidden gap-4">
                <div className="relative">
                  <img className="w-56 h-72 object-cover" src="src/assets/Images Cropped/Golf/golf12.png" alt="Round OF Golf" />
                  {/* heart icon */}
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-.06-.06a5.5 5.5 0 00-7.78 7.78l7.84 7.84 7.84-7.84a5.5 5.5 0 000-7.78z"
                      />
                    </svg>
                  </div>
                  {/* for larger number on image */}
                  <div className="absolute bottom-4 right-4 text-white text-8xl font-bold opacity-80 text-stroke">
                    1
                  </div>
                  {/* Tag and Date */}
                  <div className="absolute bottom-2 left-2 text-white text-sm">
                    <span className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h18v18H3z"
                        />
                      </svg>
                      <span>Invigorating & Uplifting</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-sm">
                    Nov 10-29
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">Round of Golf</h3>
                  {/* Time */}
                  <p className="text-gray-500 text-sm mt-1">10:30 AM - 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 ml-10 mr-20">
            <h2 className="text-black mt-10 text-4xl flex items-center justify-center ">Find events on map</h2>
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.517347331312!2d34.705845773657096!3d28.047347459205383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15aca53e4bce93d9%3A0x31c070acff71674b!2sNEOM%20Sindalah%20Island!5e1!3m2!1sen!2sin!4v1727401463191!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-10"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard;