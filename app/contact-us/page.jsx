'use client'

import { useState } from 'react';
import {message} from 'antd'

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        message.success('Email sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        message.error('Error sending email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      message.error('Error sending email. Please try again later.');
    }
  };

  return (
    <div className=''>
      <div className="flex justify-center items-center max-w-screen-2xl mx-auto h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input 
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="text" 
                placeholder="Your Full Name*" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
              />
              <input 
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="number" 
                placeholder="Phone*" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required
              />
              <input 
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="email" 
                placeholder="Email*" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="my-4">
              <textarea 
                placeholder="Message*" 
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                name="message"
                value={formData.message}
                onChange={handleChange} // Corrected onChange handler for textarea
                required
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button 
                type="submit" 
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
