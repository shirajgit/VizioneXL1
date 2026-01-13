import { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.resume) {
    alert("Please upload resume");
    return;
  }

  const data = new FormData();
  data.append("firstName", formData.firstName);
  data.append("lastName", formData.lastName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("experience", formData.experience);
  data.append("resume", formData.resume); // ✅ ADD THIS LINE

  try {
    const res = await fetch("http://localhost:5000/apply-job", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert(result.message);
    setFormData({
      firstName: "",
      lastName: "", 
      email: "",
      phone: "",
      experience: "",
      resume: null,
    });

 
  } catch (error) {
    alert("Failed to submit application");
  }
};


  return (
   <section className="relative overflow-hidden bg-gray-950 text-white">

  {/* HERO */}
  <div className="relative py-32 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
    <div className="absolute inset-0 bg-black/30" />

    {/* Glow */}
    <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
    <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Define Your Career <br />
        <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
          with Vizionexl
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl font-semibold tracking-wide text-white/90">
        CODE THE FUTURE. BUILD WITH VISION. DELIVER WITH EXCELLENCE.
      </p>
    </div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-6 py-28 grid gap-16 lg:grid-cols-2">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Why Work With <span className="text-indigo-400">Us?</span>
      </h2>

      <ul className="space-y-5 text-gray-300 text-lg">
        <li className="flex items-center gap-3">🚀 Work on cutting-edge technologies</li>
        <li className="flex items-center gap-3">🧠 Continuous learning & mentorship</li>
        <li className="flex items-center gap-3">🤝 Highly collaborative culture</li>
        <li className="flex items-center gap-3">🌍 Build products with global impact</li>
      </ul>

      <div className="mt-10 flex items-center gap-3 text-lg">
        <span className="text-xl">📍</span>
        <span className="font-semibold">Job Location:</span>
        <span className="text-gray-300">Bijapur</span>
      </div>
    </div>

    {/* FORM */}
    <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl shadow-2xl">
  <h3 className="text-2xl font-semibold mb-8 text-white">
    Apply <span className="text-indigo-400">Now</span>
  </h3>

  <form onSubmit={handleSubmit} className="space-y-6">

    {/* Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        className="input focus:ring-2 border border-white/20 rounded p-1 focus:ring-indigo-500/60"
      />
      <input
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
        className="input border border-white/20 rounded p-1 focus:ring-2 focus:ring-indigo-500/60"
      />
    </div>

    {/* Email */}
    <input
      name="email"
      type="email"
      onChange={handleChange}
      placeholder="Email Address"
      className="input border w-60 mr-5 border-white/20 rounded p-1 focus:ring-2 focus:ring-indigo-500/60"
    />

    {/* Phone */}
    <input
      name="phone"
      type="tel"
      onChange={handleChange}
      placeholder="Phone Number"
      className="input border border-white/20 rounded p-1 focus:ring-2 focus:ring-indigo-500/60"
    />

    {/* Resume Upload */}
    <div className="rounded-xl border border-white/20 bg-white/5 p-4 hover:bg-white/10 transition">
      <label className="block text-sm text-gray-300 mb-2">
        Upload Resume
      </label>
      <input
        type="file"
        name="resume"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 transition"
        required
      />
    </div>

    {/* Experience */}
    <select
      name="experience"
      onChange={handleChange}
      className="input border border-white/20 rounded p-1 focus:ring-2 focus:ring-indigo-500/60"
    >
      <option value="" className="bg-black">Select Experience Level</option>
      <option className="bg-black">Fresher</option>
      <option className="bg-black">1–3 Years</option>
      <option className="bg-black">3–5 Years</option>
      <option className="bg-black">5+ Years</option>
    </select>

    {/* Submit */}
    <button
      type="submit"
      className="group w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all"
    >
      Submit Application
    </button>
  </form>
</div>


  </div>
</section>

  );
};

export default Career;
