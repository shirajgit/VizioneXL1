import BookConsultation from "../components/BookCall";
import EmpoweringBusinesses from "../components/Improving";

const WhoAreWe = () => {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 h-90 bg-cover bg-center opacity-90 bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://vizionexltechnologies.in/images/wwd.png')",
  }}> 
  
 

        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Who <span className="text-yellow-300">We Are</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Driving innovation, empowering businesses, and building
            future-ready digital solutions.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Driving <span className="text-indigo-600">Innovation</span> with Technology
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <span className="font-semibold text-gray-900">VizioneXL</span>, we’re not just a technology company —
              we’re innovation enablers. Our passion lies in harnessing the power
              of emerging technologies to solve real-world problems and unlock
              business potential.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it’s developing scalable platforms, optimizing enterprise
              operations, or crafting engaging user experiences, our solutions
              are tailored to fuel transformation and accelerate growth.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With each project, we commit to delivering not just functionality,
              but forward-thinking, strategic value.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Technology Innovation"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-indigo-600/10"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team Collaboration"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-purple-600/10"></div>
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-extrabold text-gray-900">
              A Team Built for the <span className="text-indigo-600">Future</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At the heart of VizioneXL is a team that thrives on challenge and
              collaboration. Comprised of expert developers, ethical hackers,
              UI/UX specialists, analysts, and strategic consultants, our people
              bring a rich mix of creativity, technical mastery, and domain insight.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe that the future belongs to the agile. That’s why our team
              continuously evolves — learning, adapting, and innovating to stay
              ahead in a fast-changing digital landscape.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every solution we create is backed by a future-ready mindset and a
              deep commitment to quality.
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
