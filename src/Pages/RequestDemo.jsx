import { useState } from "react";
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import Navbar from '../Component/Navbar'

function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    designation: "",
    teamSize: "",
    city: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-[#fcf8ea] p-4 my-20">
        <div className="max-w-lg w-full p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Request a Demo</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="number" name="teamSize" placeholder="Size of Sales Team" value={formData.teamSize} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="city" placeholder="Requirement City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required />
            <div className="flex items-center gap-2">
              <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="w-4 h-4" />
              <label className="text-sm text-gray-600">I agree to the terms and conditions.</label>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Request Demo</button>
          </form>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
}


export default RequestDemo