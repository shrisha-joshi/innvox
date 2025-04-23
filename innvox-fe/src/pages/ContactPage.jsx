import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email" 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Subject of your message" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-secondary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="purple">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-2">Phone</h3>
          <p className="text-gray-400">+91 99999 99999</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="purple">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-2">Email</h3>
          <p className="text-gray-400">innvox_ksit@gmail.com</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="purple">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-2">Location</h3>
          <p className="text-gray-400">KSIT, Bengaluru</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 