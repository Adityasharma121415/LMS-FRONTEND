import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Home Loan",
      description: "Get the best interest rates for your dream home",
      image: "../../images/homeLoan.png",
      link: "/home-loan",
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "Gold Loan",
      description: "Quick loans against your gold assets",
      image: "../../public/images/goldLoan.png",
      link: "/gold-loan",
      bgColor: "bg-yellow-600",
    },
    {
      id: 3,
      title: "Car Loan",
      description: "Drive your dream car today with our affordable rates",
      image: "../../public/images/carLoan.png",
      link: "/car-loan",
      bgColor: "bg-green-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-screen/2 lg:h-screen/2 overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 ${slide.bgColor} opacity-80`}
            ></div>
            <div className="relative z-20 flex h-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8">{slide.description}</p>
                <div>
                  <a
                    href={slide.link}
                    className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="hidden md:flex md:w-1/2 items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-full max-w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
