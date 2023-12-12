import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" id='footer'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>1051, Athmeya Geleyara, Balaga Gruha, </p>
          <p> Nirmana Sahakara Sangha Niyamitha, <br/>Jalahalli, Bangalore </p>
        </div>

        {/* Phone */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Phone</h2>
          <p>+918618696505</p>
        </div>

        {/* Map */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Find Us</h2>
          {/* Add your map component here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.791178428834!2d77.5043689!3d13.0707823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23640db0f0bf%3A0xb5a5c547bbd737d9!2sSadhana%20Food%20Carnival!5e0!3m2!1sen!2sin!4v1702392888058!5m2!1sen!2sin"
            width="95%"
            height="80%"
            style={{ border: 0 , }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='mr-9'
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
