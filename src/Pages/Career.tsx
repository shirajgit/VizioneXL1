const Career = () => {
  return (
    <section className="bg-gray-950 text-white">
      
      {/* HERO SECTION */}
      <div className="relative py-28 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Define Your Career with Vizionexl
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold tracking-wide">
            CODE THE FUTURE. BUILD WITH VISION. DELIVER WITH EXCELLENCE
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-indigo-100">
            Our curiosity runs deep. We empower you to explore new paths at your
            own pace — continuously learning, innovating, and growing together.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>

          <ul className="space-y-4 text-gray-400">
            <li>🚀 Work on cutting-edge technology & real-world products</li>
            <li>🧠 Continuous learning & upskilling culture</li>
            <li>🤝 Collaborative & innovation-driven team</li>
            <li>🌍 Build impactful solutions with global reach</li>
          </ul>

          <div className="mt-8 flex items-center gap-3 text-lg">
            <span>📍</span>
            <span className="font-semibold">Job Location:</span>
            <span className="text-gray-300">Bijapur</span>
          </div>
        </div>

        {/* APPLICATION FORM */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">
            Apply Now
          </h3>

          <form className="space-y-5">
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Upload Resume
              </label>
              <input
                type="file"
                className="w-full text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-700"
              />
            </div>

            <select
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Select Experience Level</option>
              <option>Fresher</option>
              <option>1–3 Years</option>
              <option>3–5 Years</option>
              <option>5+ Years</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold hover:bg-indigo-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Career;
