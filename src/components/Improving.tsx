const EmpoweringBusinesses = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Empowering <span className="text-indigo-600">All Businesses</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              No matter the size or stage of your business,
              <span className="font-semibold text-gray-900"> VizioneXL </span>
              is here to help you leverage the full potential of digital
              transformation. From agile startups bringing bold ideas to life
              to large enterprises upgrading legacy systems — we craft
              solutions that scale with you.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We combine deep tech expertise with strategic insight to help our
              clients lead with confidence in the digital era.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Digital Transformation"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-indigo-600/10"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid gap-10 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl bg-gray-50 p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900">
              Our <span className="text-indigo-600">Mission</span>
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To build intelligent and robust digital ecosystems that empower
              organizations and individuals globally, driving long-term value,
              innovation, and success.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-gray-50 p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900">
              Our <span className="text-indigo-600">Vision</span>
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To be a globally trusted technology partner—known for delivering
              cutting-edge innovation, seamless experiences, and measurable
              results in every solution we provide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmpoweringBusinesses;
