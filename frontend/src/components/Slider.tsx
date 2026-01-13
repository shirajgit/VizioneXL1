import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "IT-Level Training",
    highlight: "Training",
    description: "Get trained by industry experts to elevate your skills.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "Innovative ",
    highlight: " Solutions",
    description: "Empowering your business with scalable tech solutions.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Our ",
    highlight: "Creations",
    description: "Built for performance, built for people.",
    image:
      "/img2.png",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh]  overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="slide"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {slide.title.split(slide.highlight)[0]}
                <span className="text-indigo-400">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-lg text-gray-300">
                {slide.description}
              </p>
 
              <div className="mt-8 flex gap-4">
                {slide.title === "Our " ? (
                  <Link to="/ourcreations">
                    <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:scale-105 transition">
                      Explore
                    </button>
                  </Link>
                ) : (
                  <Link to="/whatwedo">
                    <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:scale-105 transition">
                      Explore
                    </button>
                  </Link>
                )}
                <Link to="/contact">
                  <button className="rounded-xl border border-white/30 px-6 py-3 hover:bg-white/10 transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition ${
              current === i ? "bg-indigo-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
