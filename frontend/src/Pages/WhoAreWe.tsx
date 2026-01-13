import BookConsultation from "../components/BookCall";
import EmpoweringBusinesses from "../components/Improving";

const WhoAreWe = () => {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat">
  {/* Overlay for better text readability */}
  <div
    className="absolute inset-0 bg-black/40"
    style={{
      backgroundImage:
        "url('https://vizionexltechnologies.in/images/wwd.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
      Who <span className="text-yellow-300">We Are</span>
    </h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
      Driving innovation, empowering businesses, and building future-ready digital solutions.  
      We combine creativity, technology, and strategy to help organizations thrive in the digital era.
    </p>
   
  </div>
</section>


      {/* SECTION 1 */}
      {/* SECTION 1 */}
<section className="py-28 bg-white">
  <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* TEXT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Driving <span className="text-indigo-600">Innovation</span><br />
        with Technology
      </h2>

      <p className="mt-8 text-gray-600 text-lg leading-relaxed">
        At <span className="font-semibold text-gray-900">VizioneXL</span>, we’re not just a
        technology company — we’re innovation enablers. Our passion lies in
        harnessing the power of emerging technologies to solve real-world
        problems and unlock business potential.
      </p>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        Whether it’s developing scalable platforms, optimizing enterprise
        operations, or crafting engaging user experiences, our solutions are
        designed to fuel transformation and accelerate growth.
      </p>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        With each project, we deliver not just functionality — but strategic,
        future-focused value.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative group">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        alt="Technology Innovation"
        className="rounded-3xl shadow-2xl group-hover:scale-[1.02] transition duration-500"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/10"></div>
    </div>
  </div>
</section>

{/* SECTION 2 */}
<section className="bg-gray-50 py-28">
  <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* IMAGE */}
    <div className="relative group order-2 md:order-1">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Team Collaboration"
        className="rounded-3xl shadow-2xl group-hover:scale-[1.02] transition duration-500"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/20 to-indigo-600/10"></div>
    </div>

    {/* TEXT */}
    <div className="order-1 md:order-2">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        A Team Built for the <span className="text-indigo-600">Future</span>
      </h2>

      <p className="mt-8 text-gray-600 text-lg leading-relaxed">
        At the heart of VizioneXL is a team that thrives on challenge and
        collaboration. From expert developers and ethical hackers to UI/UX
        specialists and strategic consultants, our people blend creativity,
        precision, and deep technical insight.
      </p>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        We believe the future belongs to the agile. That’s why our team
        continuously evolves — learning, adapting, and innovating to stay ahead
        in an ever-changing digital landscape.
      </p>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        Every solution we create is powered by a future-ready mindset and a
        relentless commitment to quality.
      </p>
    </div>
  </div>
</section>


      <EmpoweringBusinesses></EmpoweringBusinesses>

      <BookConsultation></BookConsultation>

    </main>
  );
};

export default WhoAreWe;
