import BookConsultation from "../components/BookCall";

const OurCreations = () => {
  return (
    <section className=" bg-gray-100shadow-2xl shadow-2xl  text-white ">

      
 <section
  className="relative flex items-center justify-center py-28 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://vizionexltechnologies.in/images/wwd.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fadeIn">
      Our <span className="text-yellow-300">Creations</span>
    </h1>
    <p className="mt-6 text-lg md:text-xl text-white/90 animate-fadeIn delay-150">
      Explore a diverse range of tailor-made digital projects designed to transform businesses and enable innovation.
    </p>
     
  </div>
</section>

      <div className="max-w-7xl mx-auto px-6">
        

        {/* Creations Grid */}
       <div className="mt-20 mb-24 grid gap-10  px-6">

  {/* Card */}
  <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white text-3xl">
      <i className="ri-restaurant-fill"></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      Restaurant Management System
    </h3>
    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
      A comprehensive restaurant suite with menu management, table booking,
      kitchen coordination, billing automation, and real-time order tracking.
    </p>
  </div>

  <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white text-3xl">
      <i className="ri-diamond-fill"></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      Jewelry Shop Management System
    </h3>
    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
      Inventory tracking with purity-based categorization, live gold rate
      updates, billing, and CRM with marketing alerts.
    </p>
  </div>

  <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 text-white text-3xl">
      <i className="ri-receipt-fill"></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      Custom Billing System
    </h3>
    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
      Plug-and-play billing for retail, salons, and clinics with tax handling,
      invoices, discounts, and analytics.
    </p>
  </div>

  <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-red-400 to-pink-600 text-white text-3xl">
      <i className="ri-heart-pulse-fill"></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      Healthcare Research Portal
    </h3>
    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
      Research publication platform with peer reviews, editorial workflows, and
      secure academic content dissemination.
    </p>
  </div>

  <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-purple-600 text-white text-3xl">
      <i className="ri-smartphone-fill"></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      Embedded & IoT Projects
    </h3>
    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700">
      Smart automation using Arduino, Raspberry Pi, and ESP32 for homes,
      industries, and academic showcases.
    </p>
  </div>

</div>

      </div>

      <BookConsultation></BookConsultation>

    </section>
  );
};

export default OurCreations;
