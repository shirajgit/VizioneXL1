import { useEffect, useState } from "react";

const testimonials = [
  {
    name: " Indra Construction",
    role: "Reliable and Scalable Solutions",
    feedback:
      " This construction management system has been a game-changer for our workflow. Delivered on time by a dedicated and professional team, it's helped us manage projects more efficientlyand stay on top of every detail..",
    image: "https://vizionexltechnologies.in/static/media/indra.d0362c8a4060f37c3a1f.png",
  },
  {
    name: "Platinum Construction",
    role: "Wonderful Support!",
    feedback:
      "The team delivered my project on time and exceeded expectations, thanks to theirexceptional expertise, professionalism, and dedication. Highly recommended for anyone seeking top-notch software solutions.",
    image: "https://vizionexltechnologies.in/static/media/plat.9ca42496e94c7777ae51.png",
  },
  {
    name: "Swaranshree",
    role: "Exceptional Service and Support!",
    feedback:
      "This billing app for my jewelry business has completely transformed how we operate-delivered on time with precision by a highly professional and skilled team. Their expertise andcommitment truly set them apart.",
    image: "https://tse1.mm.bing.net/th/id/OIP.GeXjJduQJ1KvoBH1Ne8kSAAAAA?pid=Api&p=10&h=120",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          What Our <span className="text-indigo-600">Esteemed Clients Say</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by professionals, students, and businesses who believe in our vision.
        </p>

        {/* Slider */}
        <div className="relative mt-14">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
                
                {/* Avatar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-34 w-90 rounded-3xl object-cover border-4 border-indigo-600"
                />

                {/* Feedback */}
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  “{item.feedback}”
                </p>

                {/* Name */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        
       
      </div>
    </section>
  );
};

export default TestimonialsSlider;
