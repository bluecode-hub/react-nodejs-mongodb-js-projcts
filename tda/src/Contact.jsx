import './Contact.css';
import Navbar from './Navbar';
import Base from './Base';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registration_no: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thanks for joining us!");
      setFormData({ name: '', email: '', registration_no: '', message: '' });
    } else {
      const data = await response.json(); // 👈 for better error debug
      console.error("❌ Backend error response:", data);
      alert('Error: failed to submit form.');
    }
  } catch (error) {
    console.error('❌ Network or fetch error:', error.message);
    alert('Error: failed to submit form.');
  }
};



  return (
    <div className='main_contact'>
      <Navbar />
      <div className='main_contact_contain'>
        <h2 className='contact_heading'>Join Us</h2>
        <form onSubmit={handleSubmit} className='contact_form'>
          <label className='contact_name'>Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='input_field'
          /><br />

          <label className='contact_name'>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='input_field'
          /><br /><br />

          <label className="contact_name">Registration Number</label><br />
          <input
            type="number"
            name="registration_no"
            value={formData.registration_no}
            onChange={handleChange}
            required
            className='input_field'
          /><br />

          <label className='contact_name'>Message</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className='input_field'
          /><br />

          <button type="submit" className='submit_button'>Submit</button>
        </form>
      </div>
      <Base />
    </div>
  );
}

export default ContactUs;
