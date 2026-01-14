import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("https://job-backend-1-l1hq.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
    console.log(data);
    

    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    alert("Failed to send message");
  }
};


  return (<> 
  <section className="py-24 h-90 bg-cover bg-center opacity-90 bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://vizionexltechnologies.in/images/wwd.png')",
  }}> 
  
 

        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hello, our team is here to assist you. Reach out to
            us through the form below or visit us at our office location.
          </p>
        </div>
       </section>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">

      


      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>

      {/* Contact Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Visit Us At</h2>
        <p className="text-gray-600 mb-2">Opp Hanamashetty Tyres Shop,</p>
        <p className="text-gray-600 mb-2">Gurukul Road, Vijayapura – 586101</p>
      </div>

      {/* Contact Form */}
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        action="https://your-backend.onrender.com/apply-job"
         className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl space-y-6"
         method="POST"
         >
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Phone
    </label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91 XXXXX XXXXX"
      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Message
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={5}
      placeholder="Write your message..."
      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition"
  >
    Send Message
  </button>
</form>

    </div> 
    </>
  );
};

export default ContactUs;
