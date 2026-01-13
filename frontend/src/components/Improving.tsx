const EmpoweringBusinesses = () => {
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">

  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Main Content */}
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Text */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Empowering <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            All Businesses
          </span>
        </h2>

        <p className="mt-8 text-gray-600 leading-relaxed text-lg">
          No matter the size or stage of your business,
          <span className="font-semibold text-gray-900"> VizioneXL </span>
          helps you unlock the full potential of digital transformation.
          From agile startups launching bold ideas to large enterprises
          modernizing legacy systems — we build solutions that scale with you.
        </p>

        <p className="mt-5 text-gray-600 leading-relaxed text-lg">
          We blend deep technical expertise with strategic thinking to help
          organizations lead confidently in the digital era.
        </p>
      </div>

      {/* Image */}
      <div className="relative group">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="Digital Transformation"
          className="relative z-10 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-xl" />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="mt-28 grid gap-10 md:grid-cols-2">

      {/* Mission */}
      <div className="group rounded-3xl border border-white/40 bg-white/70 p-12 backdrop-blur-xl shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900">
          Our <span className="text-indigo-600">Mission</span>
        </h3>
        <p className="mt-5 text-gray-600 leading-relaxed text-lg">
          To build intelligent, secure, and scalable digital ecosystems that
          empower organizations and individuals globally—driving long-term
          value, innovation, and success.
        </p>
      </div>

      {/* Vision */}
      <div className="group rounded-3xl border border-white/40 bg-white/70 p-12 backdrop-blur-xl shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900">
          Our <span className="text-indigo-600">Vision</span>
        </h3>
        <p className="mt-5 text-gray-600 leading-relaxed text-lg">
          To be a globally trusted technology partner—recognized for delivering
          cutting-edge innovation, seamless user experiences, and measurable
          impact across every solution we provide.
        </p>
      </div>

    </div>

  </div>
</section>

  );
};

export default EmpoweringBusinesses;
