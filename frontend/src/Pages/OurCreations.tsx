import BookConsultation from "../components/BookCall";

const OurCreations = () => {
  return (
    <section className=" bg-gray-100shadow-2xl shadow-2xl  text-white ">

      
        <section className="py-24 h-90 bg-cover bg-center opacity-90 bg-no-repeat"
             style={{
             backgroundImage:
                  "url('https://vizionexltechnologies.in/images/wwd.png')",
                }}>

        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Our <span className="text-yellow-300">Creations</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Explore a diverse range of tailor-made digital projects designed to transform businesses and enable innovation.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Creations Grid */}
        <div className="mt-16 mb-20 gap-8 text-indigo-500  font-semibold "> 
          
          {/* Card */}
          <div className="group rounded-2xl bg-gray-100 shadow-2xl shadow-2xl  p-8   m-8">
            <i className="ri-restaurant-fill text-5xl "></i>
            <h3 className="text-3xl font-bold mb-4">
              Restaurant Management System
            </h3>
            <p className="text-gray-400 group-hover:text-black leading-relaxed">
              A comprehensive restaurant suite built to streamline end-to-end
              operations. Features include dynamic menu management, real-time
              table bookings, kitchen coordination, billing automation, and
              customer order tracking—ideal for dine-in, takeaway, and delivery
              businesses.
            </p>
          </div>

          <div className="group rounded-2xl bg-gray-100 shadow-2xl shadow-2xl  p-8    m-8">
            <i className="ri-diamond-fill text-yellow-500 text-5xl"></i>
            <h3 className="text-3xl font-bold mb-4">
              Jewelry Shop Management System
            </h3>
            <p className="text-gray-400 group-hover:text-black leading-relaxed">
              A robust solution for gold, silver, and diamond retailers. Enables
              live inventory tracking, purity-based categorization, dynamic rate
              updates, billing, and CRM with SMS/email alerts for personalized
              marketing.
            </p>
          </div>

          <div className="group rounded-2xl bg-gray-100 shadow-2xl shadow-2xl  p-8 m-8">
            <i className="ri-receipt-fill text-green-500 text-5xl"></i>
            <h3 className="text-3xl font-bold mb-4">
              Custom Billing System
            </h3>
            <p className="text-gray-400 group-hover:text-black leading-relaxed">
              A flexible plug-and-play billing system for salons, retail stores,
              and clinics. Includes invoice generation, multi-tax support,
              discount management, product/service listings, and real-time
              reporting dashboards.
            </p>
          </div>

          <div className="group rounded-2xl bg-gray-100 shadow-2xl shadow-2xl  p-8  transition m-8">
             <i className="ri-heart-pulse-fill text-red-500 text-5xl"></i>
            <h3 className="text-3xl font-bold mb-4">
              Healthcare Research Publication Portal
            </h3>
            <p className="text-gray-400 group-hover:text-black leading-relaxed">
              Designed for medical colleges and research institutions, this
              platform supports article submissions, double-blind peer reviews,
              editorial workflows, and secure research dissemination to uphold
              academic integrity.
            </p>
          </div>

          <div className="group rounded-2xl bg-gray-100 shadow-2xl shadow-2xl  p-8 m-8">
            <i className="ri-smartphone-fill text-gray-500 text-5xl"></i>
            <h3 className="text-3xl font-bold mb-4">
              Embedded & IoT Projects
            </h3>
            <p className="text-gray-400 group-hover:text-black leading-relaxed">
              From smart homes to industrial IoT, our embedded solutions use
              Arduino, Raspberry Pi, and ESP32. Projects include automation
              systems, energy monitoring, security solutions, robotics, and
              academic showcase deployments.
            </p>
          </div>

        </div>
      </div>

      <BookConsultation></BookConsultation>

    </section>
  );
};

export default OurCreations;
