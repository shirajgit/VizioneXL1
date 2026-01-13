import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b1e2d] to-[#07131e] text-gray-300">

  {/* Glow Orbs */}
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 py-20">

    {/* Top Grid */}
    <div className="grid gap-12 md:grid-cols-4">

      {/* Brand */}
      <div>
        <h2 className="text-3xl font-extrabold text-white">
          Vizione<span className="text-orange-500">XL</span>
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Where Vision Meets Excellence
        </p>

        <p className="mt-6 text-sm leading-relaxed text-gray-400">
          At Vizionexl, we empower businesses with end-to-end technology solutions.
          Whether you're a startup or an enterprise, we deliver scalable,
          secure, and high-performing digital products tailored to your goals.
        </p>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          Company
        </h3>
        <ul className="space-y-3 text-sm">
          <Link to="/whoarewe"><li className="hover:text-white mb-3 transition">Who Are We</li></Link>
          <Link to="/whtawedo"><li className="hover:text-white mb-3 transition">What We Do</li></Link>
          <Link to="/ourcreations"><li className="hover:text-white mb-3 transition">Our Creations</li></Link>
          <Link to="/career"><li className="hover:text-white mb-3 transition">Careers</li></Link>
          <Link to="/contact"><li className="hover:text-white mb-3 transition">Contact Us</li></Link>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          Contact
        </h3>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="leading-relaxed">
            📍 Opp Hanamashetty Tyres Shop,<br />
            Gurukul Road, Vijayapura – 586101,<br />
            Karnataka, India
          </li>
          <li>📧 vizionexlpvtltd@gmail.com</li>
          <li>🌐 www.vizionexltechnologies.in</li>
          <li>📞 +91 6362789427</li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-indigo-400 text-center md:text-left">
          Social
        </h3>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a href="https://www.instagram.com/vizionexl_technologies" target="_blank">
            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20 transition">
              <i className="ri-instagram-line text-lg"></i> Instagram
            </button>
          </a>

          <a href="https://www.linkedin.com/company/vizionexl" target="_blank">
            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20 transition">
              <i className="ri-linkedin-box-fill text-lg"></i> LinkedIn
            </button>
          </a>

          <a href="https://github.com/Vizionexl" target="_blank">
            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20 transition">
              <i className="ri-github-fill text-lg"></i> GitHub
            </button>
          </a>

          <a href="https://www.facebook.com/people/Vizionexl-Techonologies" target="_blank">
            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20 transition">
              <i className="ri-facebook-box-fill text-lg"></i> Facebook
            </button>
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-12 border-t border-white/10" />

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} VizioneXL Technologies. All rights reserved.
      </p>

      <div className="mt-4 md:mt-0 flex gap-6">
        <span className="cursor-pointer hover:text-white transition">
          Privacy Policy
        </span>
        <span className="cursor-pointer hover:text-white transition">
          Terms & Conditions
        </span>
      </div>
    </div>

  </div>
</footer>

  );
};

export default Footer;
