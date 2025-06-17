
import React from 'react';
import chip from '../assets/chip.jpg';
import lap from '../assets/lap.jpg';
import oldphone from '../assets/oldphone.jpg';
import repair from '../assets/repair.jpg';
import recycle from '../assets/recycle.jpg';
import vision from '../assets/vision.jpg';
import girl from '../assets/girl.jpg';
import products from '../assets/products.jpg';

const pictures = [
  { img: chip },
  { img: lap },
  { img: oldphone },
  { img: repair },
  { img: recycle },
];

const About = () => {
  return (
    <div className="mt-10 px-4">
      {/* WHO ARE WE Section */}
      <h1 className="text-center text-2xl md:text-5xl text-green-700 font-bold">WHO ARE WE?</h1>
      
      <div className="bg-gray-100 mt-6 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
        <h2 className="text-center text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed">
          When it comes to smartphones and gadgets services, <br className="hidden sm:block" />
          we’re the only one who does it all. <br />
          <span className="font-semibold text-green-600">At LetsFixIt, you get It.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pictures.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`pic-${index}`}
              className="w-full h-40 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* OUR VISION Section */}
      <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={vision}
            alt="Vision"
            className="w-full md:w-1/2 object-contain rounded shadow-md"
          />

          {/* Text */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <h2 className="text-green-600 font-semibold text-lg md:text-3xl">OUR VISION</h2>
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-2 leading-tight">
              Vision <br className="hidden md:block" />
              <span className="text-black px-2">that drives us continuously</span>
            </h1>
            <p className="mt-6 mx-auto text-center md:text-left text-gray-700 max-w-3xl px-4 md:px-0 leading-relaxed text-base md:text-lg bg-gray-100 rounded-xl shadow-md p-6">
              Our mission is to provide high-quality gadget repair services at affordable prices, eliminating the need to visit a physical store. We understand the challenges people face when local shops refuse to repair certain devices like smartphones, laptops, iPhones, smartwatches, and even home appliances such as ACs, refrigerators, and TVs. At <span className="text-green-700 font-semibold">LetsFixIt</span>, we’re committed to solving this problem by offering reliable and comprehensive repair solutions for all your devices — all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* IDEA SECTION */}
      <div className="container mx-auto px-4 mt-14 ">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={girl}
            alt="girl"
            className="h-100 md:w-1/2 object-contain rounded shadow-md"
          />

          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <h2 className="text-green-600 font-semibold text-lg md:text-3xl pt-5">HOW THIS IDEA CAME</h2>
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-2 leading-tight">
              AND SERVICES WE GIVE
            </h1>
            <p className="mt-4 mx-auto text-center md:text-left text-gray-700 max-w-3xl px-4 md:px-2 leading-relaxed text-base md:text-lg bg-gray-100 rounded-xl shadow-md p-6">
              The idea behind LetsFixIt came from everyday struggles we noticed around us — when a phone stopped working, people had to visit one place; for a laptop issue, another; and for home appliances like ACs or TVs, service was either unavailable or overpriced. This scattered and costly experience made us realize the need for a one-stop solution. That’s when we thought, “Why not bring everything under one roof and make repairs easier and more affordable?” That thought became LetsFixIt — a platform built to simplify gadget and appliance repair for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={products}
            alt="Products we sell"
            className="w-full h-100 md:w-1/2 object-contain rounded shadow-md"
          />

          {/* Text */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <h2 className="text-green-600 font-semibold text-lg md:text-3xl">PRODUCTS WE SELL</h2>
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-2 leading-tight">
              Best quality, <br className="hidden md:block" />
              <span className="text-black px-2">affordable products</span>
            </h1>
            <p className="mt-6 mx-auto text-center md:text-left text-gray-700 max-w-3xl px-4 md:px-0 leading-relaxed text-base md:text-lg bg-gray-100 rounded-xl shadow-md p-6">
              At <span className="text-green-700 font-semibold">LetsFixIt</span>, we don't just repair — we equip you with top-quality tech essentials. Our product range includes premium chargers, power banks, smartwatches, headphones, and more. Each item is tested for durability and offered at a price that fits your budget. We're committed to combining function, style, and value in every product we offer — ensuring your gadgets work their best, and you stay powered up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
