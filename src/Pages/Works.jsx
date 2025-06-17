import React, { useState } from 'react';
import certified from '../assets/certified.jpg';
import saving from '../assets/saving.jpg';
import secure from '../assets/secure.jpg';
import man from '../assets/man.jpg';
import warranty from '../assets/warranty.jpg';
import deliver from '../assets/deliver.jpg';
import support from '../assets/support.jpg';
import service from '../assets/service.jpg';
import brands from '../assets/brands.jpg'
import brands1 from '../assets/brands1.jpg'


const Works = () => {
  const [btntype, setBtntype] = useState('enquiry');

  const enquirySteps = [
    {
      num: '01',
      title: 'Book Appointment',
      desc: 'To schedule an appointment, fill out the form on our site or call our toll-free number',
    },
    {
      num: '02',
      title: 'Re-Confirm Appointment',
      desc: 'We confirm your request and appointment location',
    },
    {
      num: '03',
      title: 'We Arrange For Pick-Up',
      desc: 'Our delivery executive will pick up your device at the scheduled location and time.',
    },
    {
      num: '04',
      title: 'Enjoy Your Device Again',
      desc: 'After repairing your device, we\'ll deliver it right to your doorstep for free. And, if you had a great experience, don\'t forget to rate us!',
    },
  ];

  const courierSteps = [
    {
      num: '01',
      title: 'Book Slot',
      desc: 'Kindly enter the message in the box and click on book Appointment',
    },
    {
      num: '02',
      title: 'Request Analysis',
      desc: 'Our Technicians will call and gather details. Pickup will be arranged on request',
    },
    {
      num: '03',
      title: 'We Fix Your Device',
      desc: 'We validate and fix your device on-site',
    },
    {
      num: '04',
      title: 'Enjoy Your Device Again',
      desc: 'We\'ll notify you when your device is ready - don\'t forget to rate us!',
    },
  ];
const datas = [
    {
        img:deliver,
        desc:"Courier & Local Pickups Available",
    },
    {
        img:saving,
        desc:"Assured Competitive Pricing",
    },

    {
        img:warranty,
        desc:"Warranty Coverage Provided",

    },

    {
        img:support,
        desc:"Exceptional Customer Service",
    },

    {
        img:certified,
        desc:"Genuine High-Quality Replacement Parts",
    },
    {
        img:secure,
        desc:"Assured Data Security and Privacy",
    },

    {
    img:service,
    desc:"Cost-effective Professional Service",
    },
    {
        img:man,
        desc:"Level 3 Technicians at your service",
    },
]
  const activeSteps = btntype === 'courier' ? courierSteps : enquirySteps;

  return (
    <div className="p-6 bg-white text-center">
      <h2 className="text-green-600 font-bold text-xl mb-1">HOW IT WORKS</h2>
      <p className="text-black font-semibold text-lg mb-4">Simple steps for repairing the device</p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setBtntype('enquiry')}
          className={`px-5 py-2 rounded text-white font-semibold ${
            btntype === 'enquiry' ? 'bg-green-600' : 'bg-gray-300 text-black'
          }`}
        >
          Enquiry
        </button>

        <button
          onClick={() => setBtntype('courier')}
          className={`px-5 py-2 rounded text-white font-semibold ${
            btntype === 'courier' ? 'bg-green-600' : 'bg-gray-300 text-black'
          }`}
        >
          Courier Pickup
        </button>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left bg-gray-100 p-6 rounded shadow">
        {activeSteps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div className="bg-green-500  text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mb-2 ">
              {step.num}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm mt-1 text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>


   {/* Features Grid */}
      <div className="mt-10">
        <h2 className="text-green-600 font-bold text-2xl mb-4">EXPERT SERVICE & QUALITY ASSURANCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center bg-gray-100 p-6 rounded shadow">
          {datas.map((data, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={data.img} alt="feature" className="w-50 h-35 mb-2 rounded-2xl object-cover" />
              <p className="text-sm text-green-700">{data.desc}</p>
            </div>
          ))}
        </div>

     <div className="max-w-4xl w-full border-2 border-gray-700 bg-gray-300 mx-auto mt-10 p-6 rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-6 text-green-800">BRANDS WE REPAIR</h1>
    
  <div className="flex flex-col items-center gap-6">
   <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-green-600 mb-6">
  BRANDS WE REPAIR FOR HOME APPLIANCES
</h1>

    <img
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded"
      src={brands1}
      alt="Brand 1"
    />
    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-green-600 mb-6">
  BRANDS WE REPAIR FOR MOBILE AND LAPTOP
</h1>

    <img
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded"
      
      src={brands}
      alt="Brand 2"
    />
  </div>
</div>

 </div>
</div>
  );
};

export default Works;
