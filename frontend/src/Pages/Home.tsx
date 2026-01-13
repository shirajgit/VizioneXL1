 
import BookConsultation from '../components/BookCall'
import TestimonialsSlider from '../components/ClientsSay'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
 
      <Slider></Slider>
       <div className='lg:px-30 md:px-10 sm:px-5 px-2'>
        <h1 className="text-5xl font-bold   text-center mt-10">
         About Us
        </h1>
        <div className=' lg:flex lg:p-5'>
           <p className="text-center mt-5 lg:mx-20 text-lg">
      At Vizionexl, we are a technology-driven company focused on empowering businesses through smart digital solutions. With expertise in emerging technologies and real-world challenges, we deliver scalable, secure IT services tailored for startups, enterprises, and institutions. Our team of developers, ethical hackers, designers, and consultants work collaboratively to drive innovation with impact. We believe every business deserves access to modern digital transformation. By aligning technology with strategy, we help clients stay ahead in a fast-paced digital world. At Vizionexl, your digital success marks the start of a transformative journey. <br />
      <button className='mt-4 mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Know more</button>
        </p>
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="" className='w-150 h-99' />
        </div>
       
       </div>

       <div className='lg:px-30 md:px-10 mb-15 sm:px-5 px-2'>
        <h3 className="text-3xl font-semibold   text-center mt-10">
          Why Choose <span className='text-indigo-400'>Vizionexl</span>?
        </h3>
        <p className="text-center mt-5 lg:mx-20 text-lg">
       We deliver quality, innovation, and scalable technology solutions to meet your business goals.
        </p>
       </div>

       <div className='grid lg:grid-cols-3 text-center gap-6 px:5 lg:px-30 mb-20'>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
         <i className="ri-flashlight-fill text-4xl text-blue-400"></i>
          <p>Agile & Scalable Development</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
         <i className="ri-bar-chart-2-fill text-4xl text-blue-400"></i>
          <p>SEO & Conversion-Optimized Products</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
         <i className="ri-empathize-fill text-4xl text-blue-400"></i>
          <p>Full Lifecycle Support </p>
        </div>
         <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <i className="ri-verified-badge-fill text-4xl text-blue-400"></i>
          <p>Certified & Experienced Team</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <i className="ri-refund-2-line text-4xl text-blue-400"></i>
          <p>Transparent & Competitive Pricing</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <i className="ri-tools-fill text-4xl text-blue-400"></i>
          <p>Post-Launch Support & Maintenance</p>
        </div>
       </div>
 
      <BookConsultation></BookConsultation>

      <div className='lg:px-10 md:px-10 mb-15 sm:px-10 px-2'>
        <h1 className='text-3xl font-semibold  text-center mt-10 mb-15'>What We Do</h1>

           <div className='grid lg:grid-cols-3   gap-8 px:5  mb-20'>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400 '>Custom Software Development</h1>
          <p>Tailored software solutions to meet your unique business requirements.</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Web & Mobile App Development</h1>
          <p>Responsive and user-friendly applications for web and mobile platforms.</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Cybersecurity Solutions</h1>
          <p>Protect your digital assets with our comprehensive cybersecurity services.</p>
        </div>
         <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Digital Marketing</h1>
          <p>Boost your online presence with our strategic digital marketing services.</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Automation & Manual Testing</h1>
          <p>Ensure software quality with our rigorous testing methodologies.</p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>IT Training & Upskilling</h1>
          <p>Gain in-demand skills with our professional IT training and career upskilling programs.</p>
        </div>
       </div>
      </div>

      <div className='lg:px-10 md:px-10 mb-15 sm:px-10 px-2'>
      <TestimonialsSlider></TestimonialsSlider>
      </div>

    </div>
  )
}

export default Home
