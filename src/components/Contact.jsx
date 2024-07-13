import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bvrerzwb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact <span className='text-red-700'>Me</span></h1>
        <span className='block text-center font-bold'>Please Fill Out the form below to Contact Me</span>
        <div className='flex flex-col md:flex-row gap-0 md:gap-3'>

          <div className='flex-1 mt-8 md:mt-3 order-1 md:order-2'>
            <div className='mt-1 bg-blue-100 w-98 px-8 py-6 rounded-xl'>
              <div className="flex items-center justify-center mt-10 mb-6">
                <img src='/assests/images/gmail.png' alt='' className="w-10 h-16 mr-2 object-contain" />
              </div>
              <p className="text-sm font-normal flex items-center justify-center">Email: artikaintura274@gmail.com</p>
              <br />
              <div className="flex items-center justify-center mt-16 mb-5">
                <img src='/assests/images/phone.png' alt='' className="w-10 h-16 mr-2 object-contain" />
              </div>
              <p className="text-sm font-normal flex items-center justify-center">Contact: 9997141587</p>
            </div>
          </div>



          <div className='flex-1 mt-8 md:mt-3 order-1 md:order-2'>
            <form onSubmit={handleSubmit(onSubmit)}
             // action='https://getform.io/f/bvrerzwb'
              //method='POST'
              className='mt-1 bg-blue-100 w-98 px-8 py-6 rounded-xl'>
              <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
              <div className='flex flex-col mb-4'>
                <label className='block text-grey-700'>Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='name'
                  name="name"
                  type="text"
                  placeholder="Enter your fullname"
                />
                {errors.name && <span className='text-red-600'>This Field is required</span>}
              </div>
              <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input
                  {...register("email", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='email'
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && <span className='text-red-600'>This Field is required</span>}

              </div>
              <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='message'
                  name="message"
                  type="text"
                  placeholder="Enter Your Query!"
                />
                {errors.message && <span className='text-red-600'>This Field is required</span>}

              </div>
              <button type='submit' className="bg-gradient-to-r from-pink-400 to-purple-300 hover:from-blue-400 hover:to-purple-400 rounded-md border border-pink-700 text-white font-bold py-2 px-4">Send</button>
            </form>
          </div>


        </div>
      </div>
      <hr />
    </>
  )
}

export default Contact;
