import BookConsultation from "../components/BookCall";

const WhatWeDo = () => {
  return (
    <section className="bg-white text-white ">
     
        
 <section className="py-24 h-90 bg-cover bg-center opacity-90 bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://vizionexltechnologies.in/images/wwd.png')",
  }}> 
  
 

        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            What <span className="text-yellow-300">We Do</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Building next-gen digital experiences for businesses worldwide.
          </p>
        </div>
      </section>

      <div className='lg:px-35 md:px-10 mb-15 sm:px-20 px-2'>
        <h1 className='text-4xl font-bold text-black text-center mt-10 mb-15'>Our Areas of Expertise</h1>

           <div className='grid lg:grid-cols-2 text-black   gap-8 px:8  mb-20'>
        <div className='bg-gray-100 p-9 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400 '>Custom Software Development</h1>
          <p>Tailored software solutions to meet your unique business requirements. 
            We build scalable, robust applications that align with your business goals.
          </p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Web & Mobile App Development</h1>
          <p>Responsive and user-friendly applications for web and mobile platforms.
            Our team crafts seamless digital experiences that engage users across all devices.
          </p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Cybersecurity Solutions</h1>
          <p>Protect your digital assets with our comprehensive cybersecurity services.
            We implement advanced security measures to safeguard your business from evolving threats.
          </p>
        </div>
         <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Digital Marketing</h1>
          <p>Boost your online presence with our strategic digital marketing services.
            From SEO to social media, we help you reach and engage your target audience effectively.
          </p>
        </div>
        <div className='bg-gray-100 p-6  shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>Automation & Manual Testing</h1>
          <p>Ensure software quality with our rigorous testing methodologies.
            We provide both automated and manual testing to deliver reliable and bug-free software.
          </p>
        </div>
        <div className='bg-gray-100 p-6 shadow-xl rounded-lg'>
          <h1 className='font-bold text-2xl text-indigo-400'>IT Training & Upskilling</h1>
          <p>Gain in-demand skills with our professional IT training and career upskilling programs.
            We offer comprehensive courses to help individuals and teams stay ahead in the tech industry.
          </p>
        </div>
       </div>
      </div>
   
    
      <BookConsultation></BookConsultation>
    </section>
  );
};

export default WhatWeDo;
