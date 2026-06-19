"use client";

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 pt-12 opacity-0 animate-text-reveal">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Get In Touch</h1>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Let's discuss your next architectural masterpiece.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">
          <div className="flex flex-col">
            <h2 className="font-heading text-3xl font-bold text-[#2C3539] mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">We would love to hear from you. Reach out to us using the details below or fill out the form.</p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2C3539] text-white rounded flex items-center justify-center shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#2C3539] mb-1">Our Office</h3>
                  <p className="text-gray-600">Ranchi, Jharkhand, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2C3539] text-white rounded flex items-center justify-center shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#2C3539] mb-1">Phone</h3>
                  <p className="text-gray-600">9971189665</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2C3539] text-white rounded flex items-center justify-center shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#2C3539] mb-1">Email</h3>
                  <p className="text-gray-600">info@planedgearchitect.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium text-[#2C3539]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded font-primary text-[#2C3539] outline-none transition-all focus:border-[#2C3539] focus:bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-[#2C3539]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded font-primary text-[#2C3539] outline-none transition-all focus:border-[#2C3539] focus:bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium text-[#2C3539]">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  placeholder="Tell us about your project..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded font-primary text-[#2C3539] outline-none transition-all resize-y focus:border-[#2C3539] focus:bg-white"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full mt-4 px-8 py-4 bg-[#2C3539] text-white font-heading font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-[#3d4a4f] hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && <p className="text-green-600 bg-green-50 p-4 rounded text-center font-medium">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-600 bg-red-50 p-4 rounded text-center font-medium">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
