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
  } catch (error) {
    alert("Failed to submit application");
  }
};


  return (
    <section className="bg-gray-950 text-white">
      {/* HERO */}
      <div className="relative py-28 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Define Your Career with Vizionexl
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold">
            CODE THE FUTURE. BUILD WITH VISION. DELIVER WITH EXCELLENCE
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
          <ul className="space-y-4 text-gray-400">
            <li>🚀 Work on cutting-edge technology</li>
            <li>🧠 Continuous learning culture</li>
            <li>🤝 Collaborative team</li>
            <li>🌍 Global impact</li>
          </ul>
          <div className="mt-8 flex gap-2">
            <span>📍</span>
            <span className="font-semibold">Job Location:</span>
            <span className="text-gray-300">Bijapur</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Apply Now</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
                className="input"
              />
              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className="input"
              />
            </div>

            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="input"
            />

            <input
              name="phone"
              type="tel"
              onChange={handleChange}
              placeholder="Phone Number"
              className="input"
            />

            <input
              type="file"
              name="resume"           // ✅ SAME AS BACKEND
              onChange={handleFileChange}
              className="w-full text-gray-300"
              required
             />


            <select
              name="experience"
              onChange={handleChange}
              className="input"
            >
              <option value="">Select Experience Level</option>
              <option>Fresher</option>
              <option>1–3 Years</option>
              <option>3–5 Years</option>
              <option>5+ Years</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold hover:bg-indigo-700"
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
