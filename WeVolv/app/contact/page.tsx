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
            background-color: #eef1f3;
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

        .sub-header {
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
            font-weight: 600;
        }

        h1 {
            font-family: 'Times New Roman', Times, serif;
            font-size: 2.8rem;
            font-weight: 400;
            margin-bottom: 25px;
            color: #222;
        }

        h5 {
            font-weight: 500;
        }

        .intro-text {
            font-family: 'Times New Roman', Times, serif;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 30px;
            color: #333;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }

        .contact-details {
            font-size: 0.85rem;
            line-height: 1.8;
            color: #333;
        }

        .contact-details strong {
            display: block;
            font-size: 0.75rem;
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
            font-size: 0.75rem;
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
            font-size: 1rem;
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
            font-size: 0.8rem;
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
          <h1>Do you have questions?</h1>
          
          <h5 className="intro-text">
            Have any questions or ready to begin? Our wellness team is here to support you. Reach out and we'll respond shortly.
          </h5>

          <div className="contact-details">
            <h5>Customer Service Hours</h5>
            <p>Monday – Friday 9am – 6pm (PST)</p>
            <br />
            <p>Email: <a href="mailto:connect@wevolv.us">connect@wevolv.us</a></p>
            <br />
            <p>Text: <a href="tel:+17025278520">(702) 527 – 8520</a></p>
            <br />
            <p>Schedule a Call <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold'}}>here</a></p>
            <br />
            <p>You can also check our <a href="/faq" style={{fontWeight: 'bold'}}>FAQ Page</a> to find answers to our most commonly asked questions.</p>
          </div>
        </div>

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
      </div>
    </>
  );
}