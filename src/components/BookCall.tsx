import { RiCalendarCheckLine, RiArrowRightUpLine } from "react-icons/ri";

const BookConsultation = () => {
  return (
    <section className="relative overflow-hidden bg-blue-300 via-purple-600 to-pink-600 py-5">
      
      {/* Decorative blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
          <i className="ri-calendar-check-line text-3xl"></i>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Book a Free <span className="text-indigo-400">Consultation Call</span>
        </h2>

        {/* Description */}
        <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
          Discuss your ideas or challenges with our experts.
          Let’s find the right solution together.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg hover:scale-105 transition-transform">
            Book Now
            <i className="ri-arrow-right-up-line text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BookConsultation;
