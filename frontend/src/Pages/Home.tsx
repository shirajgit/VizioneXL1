 
import { Link } from 'react-router-dom'
import BookConsultation from '../components/BookCall'
import TestimonialsSlider from '../components/ClientsSay'
import Slider from '../components/Slider'

const Home = () => {
  return (
<div className="bg-white">

  {/* HERO SLIDER */}
  <Slider />

  {/* ABOUT US */}
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-6">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center">
        About <span className="text-indigo-600">Us</span>
      </h1>

      <div className="mt-14 grid lg:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Vizionexl</span>,
            we are a technology-driven company empowering businesses through
            smart digital solutions. From startups to enterprises, we deliver
            scalable, secure IT services tailored to real-world challenges.
          </p>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Our team of developers, ethical hackers, designers, and consultants
            collaborates to drive innovation with impact. By aligning technology
            with strategy, we help businesses stay ahead in a fast-paced digital world.
          </p>
           <Link to="/whoarewe">
          <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-indigo-700 transition">
            Know More
          </button></Link>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team Collaboration"
            className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-3xl bg-indigo-600/10" />
        </div>

      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */}
  <section className="bg-gray-50 py-24">
    <div className="mx-auto max-w-7xl px-6 text-center">

      <h3 className="text-3xl md:text-4xl font-bold">
        Why Choose <span className="text-indigo-500">Vizionexl</span>?
      </h3>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We deliver quality, innovation, and scalable technology solutions
        aligned with your business goals.
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: "ri-flashlight-fill", text: "Agile & Scalable Development" },
          { icon: "ri-bar-chart-2-fill", text: "SEO & Conversion-Optimized Products" },
          { icon: "ri-empathize-fill", text: "Full Lifecycle Support" },
          { icon: "ri-verified-badge-fill", text: "Certified & Experienced Team" },
          { icon: "ri-refund-2-line", text: "Transparent & Competitive Pricing" },
          { icon: "ri-tools-fill", text: "Post-Launch Support & Maintenance" },
        ].map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <i className={`${item.icon} text-4xl text-indigo-500`} />
            <p className="mt-4 font-medium text-gray-800">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* BOOK CONSULTATION */}
  <BookConsultation />

  {/* WHAT WE DO */}
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        What <span className="text-indigo-600">We Do</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Custom Software Development",
            desc: "Tailored software solutions designed to match your business needs.",
          },
          {
            title: "Web & Mobile App Development",
            desc: "High-performance, responsive applications for web and mobile.",
          },
          {
            title: "Cybersecurity Solutions",
            desc: "Protect your digital assets with enterprise-grade security.",
          },
          {
            title: "Digital Marketing",
            desc: "Data-driven marketing strategies to grow your online presence.",
          },
          {
            title: "Automation & Manual Testing",
            desc: "Reliable testing methodologies ensuring software quality.",
          },
          {
            title: "IT Training & Upskilling",
            desc: "Professional training programs for career growth.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-50 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-6">
      <TestimonialsSlider />
    </div>
  </section>

</div>

  )
}

export default Home
