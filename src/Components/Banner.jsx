import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    id: 1,
    image: "/images/banner-1.jpg",
    title: " Gardening Workshop",
    description: "Join our hands-on composting and soil improvement session.",
    button: "Join Now",
    link: "/explore-gardeners",
  },
  {
    id: 2,
    image: "/images/banner-2.jpg",
    title: "Balcony Gardening Tips",
    description: "Learn how to grow more in small spaces. Beginners welcome!",
    button: "Learn More",
    link: "/browse-tips",
  },
  {
    id: 3,
    image: "/images/banner-3.jpg",
    title: " Hydroponics Basics",
    description: "Discover water-based farming and modern techniques.",
    button: "Explore",
    link: "/browse-tips",
  },
];

const Banner = () => {
  return (
    <div className=" home-div mb-10 mx-auto rounded-2xl shadow-lg overflow-hidden">
      <Fade
        duration={4000}
        transitionDuration={1000}
        infinite
        arrows
        indicators
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-center flex items-center justify-start px-4 sm:px-8 md:px-16 text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="  p-4 sm:p-6 md:p-8 rounded-xl max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="mb-4 text-lg sm:text-base">{slide.description}</p>
                <a
                  href={slide.link}
                  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block"
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
                  <span className="relative group-hover:text-white">
                    {" "}
                    {slide.button}
                  </span>
                </a>
                ;
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
