import BookConsultation from "../components/BookCall";

const WhatWeDo = () => {
  return (
    <section className="bg-white">

  {/* Hero */}
 <section
  className="relative flex items-center justify-center py-28 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://vizionexltechnologies.in/images/wwd.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fadeIn">
      What <span className="text-yellow-300">We Do</span>
    </h1>
    <p className="mt-6 text-lg md:text-xl text-white/90 animate-fadeIn delay-150">
      Building next-gen digital experiences for businesses worldwide.
    </p>
     
  </div>
</section>


  {/* Expertise */}
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">
      Our Areas of Expertise
    </h2>

    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          Custom Software Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Tailored, scalable, and robust software solutions designed to align
          perfectly with your business goals and operational needs.
        </p>
      </div>

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          Web & Mobile App Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Responsive and high-performance applications delivering seamless user
          experiences across web and mobile platforms.
        </p>
      </div>

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          Cybersecurity Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Advanced security strategies and implementations to protect your
          digital assets from modern cyber threats.
        </p>
      </div>

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          Digital Marketing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Data-driven SEO, social media, and growth strategies to increase
          visibility, engagement, and conversions.
        </p>
      </div>

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          Automation & Manual Testing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Comprehensive QA services combining automated and manual testing for
          reliable, high-quality software delivery.
        </p>
      </div>

      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-500 mb-3">
          IT Training & Upskilling
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Industry-focused training programs helping individuals and teams gain
          in-demand technical skills.
        </p>
      </div>

    </div>
  </div>

  <BookConsultation />
</section>

  );
};

export default WhatWeDo;
