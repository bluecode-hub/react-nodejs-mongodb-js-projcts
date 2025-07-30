import './Contact.css';
import Navbar from './Navbar';
import Base from './Base';
// ContactUs.jsx
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for Joining us!');

    
    setFormData({ name: '', email: '',registration_no:'', message: '' });

   
  };

  return (
    <div className='main_contact'>
        <Navbar/>
        <div className='main_contact_contain'>
      <h2 className='contact_heading'>Join Us</h2>
      <form onSubmit={handleSubmit} className='contact_form' >
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
        /><br />
        <br/>
        <label className="contact_name">Registration_no</label><br/>
       <input
  type="number"
  name="registration_no"
  value={formData.registration_no} // ✅ correct
  onChange={handleChange}
  required
  className='input_field'
/><br/>


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
      <Base/>
    </div>
  );
}

export default ContactUs;
