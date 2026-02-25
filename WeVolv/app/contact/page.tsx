'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style jsx>{`
        /* --- RESET & GLOBAL STYLES --- */
        .contact-page {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f4e6df;
            color: #222;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 20px;
            min-height: 100vh;
        }

        .form-wrapper {
            background-color: #f5f5f5;
            width: 95%;
            max-width: 1400px;
            padding: 40px;
            box-shadow: 0 6px 25px rgba(0,0,0,0.08);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* --- HEADER SECTION --- */
        .header-section {
            text-align: center;
            max-width: 1400px;
            width: 95%;
            margin-bottom: 40px;
            background-color: #fff;
            padding: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-radius: 2px;
        }

        .contact-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            text-align: left;
            flex-wrap: wrap;
            padding: 0;
        }

        .location-card {
            flex: 0 0 auto;
            min-width: 180px;
            max-width: 240px;
            min-height: 280px;
            background-color: #faf8f5;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .contact-details {
            flex: 0 0 auto;
            min-width: 250px;
            max-width: 310px;
            min-height: 320px;
            background-color: #faf8f5;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .contact-note {
            margin-top: 30px;
            font-size: 1.1rem;
            color: #333;
            line-height: 1.6;
            text-align: center;
        }

        .contact-note a {
            color: #333;
            text-decoration: underline;
            font-weight: bold;
        }

        .location-card h4 {
            font-family: var(--font-montserrat), 'Montserrat', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #222;
        }

        .location-card p {
            font-size: 1.15rem;
            line-height: 1.6;
            color: #333;
            margin-bottom: 5px;
        }

        .sub-header {
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
            font-weight: 600;
        }

        h3 {
            font-family: var(--font-montserrat), 'Montserrat', sans-serif;
            font-size: 3.4rem;
            font-weight: 400;
            margin-bottom: 20px;
            color: #222;
        }

        h5 {
            font-weight: 500;
        }

        .intro-text {
            font-family: var(--font-montserrat), 'Montserrat', sans-serif;
            font-size: 1.25rem;
            line-height: 1.6;
            margin-bottom: 75px;
            color: #333;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }

        .contact-details {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #333;
            text-align: center;
        }

        .contact-details h5 {
            margin-bottom: 5px;
        }

        .contact-details p {
            margin-bottom: 12px;
        }

        .contact-details strong {
            display: block;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        .contact-details a {
            color: #333;
            text-decoration: underline;
        }

        /* --- FORM SECTION --- */
        .form-container {
            background-color: #fff;
            width: 100%;
            max-width: 700px;
            padding: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-radius: 2px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-size: 0.95rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #555;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
        }

        label span {
            color: #d9534f;
        }

        input[type="text"],
        input[type="email"],
        select,
        textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            font-size: 1.1rem;
            font-family: inherit;
            color: #555;
            background-color: #fafafa;
        }
        
        ::placeholder {
            color: #888;
            opacity: 1;
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-btn {
            background-color: #1f2a44;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 4px;
            cursor: pointer;
            letter-spacing: 1px;
            margin-top: 10px;
        }

        .submit-btn:hover {
            background-color: #2c3b5e;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 600px) {
            h1 { font-size: 2rem; }
            .form-wrapper { padding: 20px; }
            .header-section { padding: 30px 20px; }
            .form-container { padding: 30px 20px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="header-section">
          <div className="sub-header">Contact Us</div>
          <h3>Do you have questions?</h3>
          
          <h5 className="intro-text">
            Have any questions or ready to begin? Our wellness team is here to support you. Reach out and we'll respond shortly.
          </h5>

          <div className="contact-container">
            <div className="location-card">
              <h4>WeVolv Wellness - Summerlin</h4>
              <p>9440 W. Sahara Avenue</p>
              <p>Suite 245</p>
              <p>Las Vegas, Nevada 89117</p>
            </div>

            <div className="contact-details">
              <h5><strong>Customer Service Hours</strong></h5>
              <p>Monday - Friday 9am - 6pm (PST)</p>
              
              <h5 style={{marginTop: '30px'}}><strong>Appointment Hours</strong></h5>
              <p>Monday - Friday 9:30am - 1pm (PST)</p>
              <p style={{marginTop: '35px'}}>Email: <a href="mailto:connect@wevolv.us">connect@wevolv.us</a></p>
              <p>Call/Text: <a href="tel:+17025278520">(702) 527-8520</a></p>
              <p>Schedule a Call <a href="https://calendly.com/wevolvlife/slink" target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold'}}>here</a></p>
            </div>

            <div className="location-card">
              <h4>WeVolv Wellness - Southwest</h4>
              <p>6675 S. Tenaya Way</p>
              <p>Suite 200</p>
              <p>Las Vegas, Nevada 89113</p>
            </div>
          </div>

          <p className="contact-note">You can also check our <a href="/faq">FAQ Page</a> to find answers to our most commonly asked questions.</p>
        </div>

        {/* Contact form hidden
        <div className="form-wrapper">
          <div className="form-container">
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Your Name<span>*</span></label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email<span>*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zip">Zip Code<span>*</span></label>
              <input 
                type="text" 
                id="zip" 
                name="zip"
                placeholder="10001"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Please select question type below</label>
              <select 
                id="type" 
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">-</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Type your message below<span>*</span></label>
              <textarea 
                id="message" 
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>

          </form>
          </div>
        </div>
        */}
      </div>
    </>
  );
}