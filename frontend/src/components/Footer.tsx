const Footer = () => {
  return (
    <footer className="bg-[#0b1e2d]   text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Vizione<span className="text-orange-500">XL</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Where Vision Meets Excellence
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Empowering students and professionals with industry-ready
              IT training, innovation, and real-world solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Who Are We</li>
              <li className="hover:text-white cursor-pointer">What We Do</li>
              <li className="hover:text-white cursor-pointer">Our Creations</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 Opp Hanamashetty Tyres Shop,
                     Gurukul Road, Vijayapura – 586101,
                      Karnataka, India </li>
              <li>📧 vizionexlpvtltd@gmail.com</li>
              <li>🌐 www.vizionexltechnologies.in</li>
              <li>📞 +91 6362789427</li>
            </ul>
          </div>


          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Social</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer">
                <a href="https://www.instagram.com/vizionexl_technologies"><button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">Instagram</button> </a> </li>
              <li className="hover:text-white cursor-pointer"><a href="https://www.linkedin.com/company/vizionexl"><button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded">LinkedIn</button></a></li>
              <li className="hover:text-white cursor-pointer"><a href="https://github.com/Vizionexl"><button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded">Github</button></a></li>
              <li className="hover:text-white cursor-pointer"><a href="https://www.facebook.com/people/Vizionexl-Techonologies"><button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">Facebook</button></a></li>
            </ul>
          </div>
</div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} VizioneXL Technologies. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
