import "swiper/css"; // Core styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/navigation";
import "swiper/css/pagination"




const cardData = [
    // {
    //   isWishlisted: true,
    //   imageUrl: "src/assets/img/golf.jpg",
    //   category: "Invigorating & Uplifting",
    //   title: "Round of Golf",
    //   dateRange: "Nov 10-29",
    //   time: "10:30 AM - 7:30 PM",
    //   eventNumber: 1
    // },
    // {
    //   isWishlisted: true,
    //   imageUrl: "src/assets/img/music.jpg",
    //   category: "Relaxing & Fun",
    //   title: "Music Concert",
    //   dateRange: "Nov 15",
    //   time: "6:00 PM - 9:00 PM",
    //   eventNumber: 2
    // },
    // {
    //   isWishlisted: true,
    //   imageUrl: "src/assets/img/yoga.jpg",
    //   category: "Health & Wellness",
    //   title: "Morning Yoga",
    //   dateRange: "Nov 12-14",
    //   time: "7:00 AM - 8:00 AM",
    //   eventNumber: 3
    // },
    {
        isWishlisted: true,
        imageUrl: "src/assets/img/art.jpg",
        category: "Creative & Artsy",
        title: "Art Workshop",
        dateRange: "Nov 18-20",
        time: "1:00 PM - 3:00 PM",
        eventNumber: 4
    },
    {
        isWishlisted: true,
        imageUrl: "src/assets/img/cooking.jpg",
        category: "Culinary & Tasty",
        title: "Cooking Class",
        dateRange: "Nov 22",
        time: "4:00 PM - 6:00 PM",
        eventNumber: 5
    }
]




const Cart = ({ item }) => {
    console.log("data", item);
    // console.log(title)

    return (
        <div className="flex h-72 aspect-[25/10] gap-4 ml-12 bg-white rounded-lg shadow-lg border border-gray-300 mt-8">
            {/* Container */}
            <div className="flex">
                {/* Image Section */}
                <div className="w-1/3">
                    <img
                        className="h-full w-full rounded-l-lg object-cover"
                        src="src/assets/img/spa_0.png"
                        alt="Event image"
                    />
                </div>

                {/* Content Section */}
                <div className="w-2/3 p-4">
                    {/* Title and Rating */}
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <div className="flex items-center space-x-1">
                                <span className="text-red-500 text-sm">★★★★★</span>
                                <span className="text-gray-500 text-sm">(23 reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat...
                        <a href="#" className="text-blue-500">read more</a>
                    </p>

                    {/* Event Info */}
                    <div className="mt-4 space-y-2">
                        {/* Date and Time */}
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 2V3h6v1H7zM5 7h10v9H5V7z" clipRule="evenodd" />
                            </svg>
                            <span>Nov 10, 10:30 AM - Nov 29, 6:30 PM</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3a1 1 0 00.293.707l1 1a1 1 0 101.414-1.414L11 8.414V6z" clipRule="evenodd" />
                            </svg>
                            <span>Sindalah City</span>
                        </div>

                        {/* Category Tag */}
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 2V3h6v1H7zM5 7h10v9H5V7z" clipRule="evenodd" />
                            </svg>
                            <span>Golf</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-4">
                        {/* Weather */}
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <img src="weather-icon.svg" alt="weather" className="h-6 w-6" />
                            <span>18°C <small>(29°/16°)</small></span>
                        </div>

                        {/* Status */}
                        <div className="text-green-600 text-sm font-semibold">
                            Scheduled
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

const Slider = () => {
    return (
        <>
        <div className="flex  items-center">
            {cardData.map((item, index) => (
                <Cart key={index} item={item} />
            ))}
            {/* Optional navigation icons (without functionality) */}
            
        </div>
        <div className="flex ml-14 space-x-4 mt-4">
                <FaArrowLeft className="text-pink-500 w-8 h-8 cursor-pointer" />
                <FaArrowRight className="text-pink-500 w-8 h-8 cursor-pointer" />
            </div>
        </>
    );
};

export default Slider;