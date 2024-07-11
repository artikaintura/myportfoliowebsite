import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Full Name is required";
    if (!formData.email) formErrors.email = "Email Address is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/contact', formData);
        if (response.status === 201) {
          toast.success('Your message has been sent!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }
      } catch (error) {
        toast.error('Failed to send message.');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact <span className='text-red-700'>Me</span></h1>
        <span className='block text-center'>Please Fill Out the form below to Contact Me</span>
        <br />
        <div className='flex flex-col md:flex-row gap-8'>

        <div className='flex-1 mt-8 md:mt-0 order-1 md:order-2'>
            <div className='bg-white-100 w-98 px-8 py-6 rounded-xl'>
              <div className="flex items-center justify-center mb-4">
                <img src='/assests/images/gmail.png' alt='' className="w-10 h-16 mr-2 object-contain" />
              </div>
              <p className="text-sm font-normal flex items-center justify-center">Email: artikaintura274@gmail.com</p>
              <br />
              <div className="flex items-center justify-center mb-4">
                <img src='/assests/images/phone.png' alt='' className="w-10 h-16 mr-2 object-contain" />
              </div>
              <p className="text-sm font-normal flex items-center justify-center">Contact: 9997141587</p>
            </div>
          </div>
          


          <div className='flex-1 mt-8 md:mt-0 order-1 md:order-2'>
            <form onSubmit={handleSubmit} className='bg-blue-100 w-98 px-8 py-6 rounded-xl'>
              <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
              <div className='flex flex-col mb-4'>
                <label className='block text-grey-700'>Full Name</label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your fullname"
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message Here!"
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
              </div>
              <button className="bg-gradient-to-r from-pink-400 to-purple-300 hover:from-blue-400 hover:to-purple-400 rounded-md border border-pink-700 text-white font-bold py-2 px-4">Send</button>
              {statusMessage && <p className="mt-4 text-green-600">{statusMessage}</p>}
            </form>
          </div>

        
        </div>
      </div>
      <hr />
    </>
  )
}

export default Contact;
