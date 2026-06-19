"use client";

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './contact.css';

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
    <div className="contact-page section-padding">
      <div className="container">
        <div className="contact-header text-center mb-lg mt-lg animate-fade-in">
          <h1>Get In Touch</h1>
          <p>Let's discuss your next architectural masterpiece.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="mb-md">We would love to hear from you. Reach out to us using the details below or fill out the form.</p>
            
            <div className="info-item">
              <div className="info-icon"><FiMapPin size={24} /></div>
              <div>
                <h3>Our Office</h3>
                <p>Ranchi, Jharkhand, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiPhone size={24} /></div>
              <div>
                <h3>Phone</h3>
                <p>9971189665</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiMail size={24} /></div>
              <div>
                <h3>Email</h3>
                <p>info@planedgearchitect.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && <p className="status-message success">Message sent successfully!</p>}
              {status === 'error' && <p className="status-message error">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
