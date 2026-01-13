import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-blue-300  ">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-20 items-center justify-between">
          
          <a href="/">
            <div className="leading-tight p-2">
             <img src="/logo-vizion.png" alt="Logo" className="w-50 m-2" />
          
          </div>
          </a>
          
 
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            {[
              "Who Are We",
              "What We Do",
              "Our Creations",
              "Careers",
              "Contact Us",
            ].map((item) => (
              <a
                key={item}
                href={item === "Contact Us" ? "/contact" : item === "Who Are We" ? "/whoarewe" : item === "What We Do" ? "/whatwedo" : item === "Our Creations" ? "/ourcreations" : "/career"}
                className="relative group transition"
              >
                <span className="group-hover:text-indigo-600">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md px-6 py-6 space-y-4 text-gray-700 font-medium">
          {[
            "Who Are We",
            "What We Do",
            "Our Creations",
            "Careers",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block hover:text-indigo-600 transition"
            >
              {item}
            </a>
          ))}

      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
