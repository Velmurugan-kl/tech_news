import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.phone && !/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number format';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      try {
        await axios.post('/api/contact', formData);
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        setStatus('error');
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      {status === 'success' && (
        <div className="contact-status-message success">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="contact-status-message error">
          Something went wrong. Please try again later.
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form-control ${errors.name ? 'error' : ''}`}
            aria-describedby="nameError"
          />
          {errors.name && <span id="nameError" className="contact-error-message">{errors.name}</span>}
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form-control ${errors.email ? 'error' : ''}`}
            aria-describedby="emailError"
          />
          {errors.email && <span id="emailError" className="contact-error-message">{errors.email}</span>}
        </div>

        <div className="contact-form-group">
          <label htmlFor="phone">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`contact-form-control ${errors.phone ? 'error' : ''}`}
            aria-describedby="phoneError"
          />
          {errors.phone && <span id="phoneError" className="contact-error-message">{errors.phone}</span>}
        </div>

        <div className="contact-form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`contact-form-control ${errors.subject ? 'error' : ''}`}
            aria-describedby="subjectError"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support Request">Support Request</option>
            <option value="Feedback">Feedback</option>
          </select>
          {errors.subject && <span id="subjectError" className="contact-error-message">{errors.subject}</span>}
        </div>

        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`contact-form-control ${errors.message ? 'error' : ''}`}
            aria-describedby="messageError"
          />
          {errors.message && <span id="messageError" className="contact-error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
