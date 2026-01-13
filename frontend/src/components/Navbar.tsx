import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="sticky top-0 z-50 backdrop-blur-xl bg-blue-300 border-b border-white/30">

  {/* Gradient Line */}
  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

  <div className="mx-auto max-w-7xl px-8">
    <div className="flex h-20 items-center justify-between">

      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src="/logo-vizion.png" alt="VizioneXL Logo" className="h-12 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
        {[
          { label: "Who Are We", href: "/whoarewe" },
          { label: "What We Do", href: "/whatwedo" },
          { label: "Our Creations", href: "/ourcreations" },
          { label: "Careers", href: "/career" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative group"
          >
            <span className="transition group-hover:text-indigo-600">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}

        {/* CTA */}
        <a href="/contact">
          <button className="ml-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg hover:shadow-xl transition">
            Contact Us
          </button>
        </a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-gray-800 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 ${
      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
    } overflow-hidden`}
  >
    <div className="bg-white/90 backdrop-blur-xl px-6 py-6 space-y-5 text-gray-800">

      {[
        { label: "Who Are We", href: "/whoarewe" },
        { label: "What We Do", href: "/whatwedo" },
        { label: "Our Creations", href: "/ourcreations" },
        { label: "Careers", href: "/career" },
        { label: "Contact Us", href: "/contact" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block text-lg font-medium hover:text-indigo-600 transition"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}

      {/* Mobile CTA */}
      <a href="/contact">
        <button className="w-full mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-white font-semibold shadow-lg">
          Book a Call
        </button>
      </a>

    </div>
  </div>
</nav>

  );
};

export default Navbar;
