import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    id: 1,
    image: "/public/images/banner-1.jpg",
    title: "🌼 Gardening Workshop",
    description: "Join our hands-on composting and soil improvement session.",
    button: "Join Now",
    link: "/explore-gardeners",
  },
  {
    id: 2,
    image: "/public/images/banner-2.jpg",
    title: "🌱 Balcony Gardening Tips",
    description: "Learn how to grow more in small spaces. Beginners welcome!",
    button: "Learn More",
    link: "/browse-tips",
  },
  {
    id: 3,
    image: "/public/images/banner-3.jpg",
    title: "💧 Hydroponics Basics",
    description: "Discover water-based farming and modern techniques.",
    button: "Explore",
    link: "/browse-tips",
  },
];

const Banner = () => {
  return (
    <div className="mb-10 mx-auto rounded-2xl shadow-lg overflow-hidden">
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
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="mb-4 text-sm sm:text-base">{slide.description}</p>
                <a
                  href={slide.link}
                  className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition duration-300 text-sm sm:text-base"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
