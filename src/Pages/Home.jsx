
import React, { useEffect, useRef, useState } from 'react';

import phone from '../assets/phone.jpg';

import Tv from '../assets/Tv.jpg';
import Watch from '../assets/watch.jpg';
import HomeImg from '../assets/home.jpg';
import Delivery from '../assets/delivery.jpg';
import Laptop from '../assets/laptop.jpg';
import Works from './works';

const Images = [Phone, Tv, Watch, HomeImg, Delivery, Laptop];

const Home = () => {
  const [index, setIndex] = useState(0);
  const imageCount = Images.length;
  const touchStartX = useRef(null);
  const enquiryRef = useRef(null);

  const [formType, setFormType] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    email: '',
    message: '',
  });

  const [toast, setToast] = useState({ type: '', message: '', visible: false });

  const showToast = (type, message) => {
    setToast({ type, message, visible: true });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000);
  };

  const deviceOptions = ['Phone', 'Laptop', 'Tablet', 'Smartwatch', 'Home Appliances'];
  const brandOptions = {
    Phone: ['Samsung', 'Apple', 'OnePlus','Infinix','Redmi','poco','Vivo','oppo','Nokio','Realme','others'],
    Laptop: ['Dell', 'HP', 'Lenovo','Acer','Mac','Samsung','Others'],
    Tablet: ['iPad', 'Samsung Tab','others'],
    Smartwatch: ['Apple Watch', 'Galaxy Watch','others'],
    'Home Appliances': ['LG', 'Whirlpool', 'Bosch','others'],
  };

  const nextSlide = () => setIndex((prev) => (prev + 1) % imageCount);
  const prevSlide = () => setIndex((prev) => (prev - 1 + imageCount) % imageCount);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) nextSlide();
    else if (delta < -50) prevSlide();
  };

  const scrollToEnquiry = () => {
    enquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnquiryClick = () => {
    setFormType('enquiry');
    scrollToEnquiry();
  };

  const handlePickupClick = () => {
    setFormType('pickup');
    scrollToEnquiry();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.mobile || !formData.name || !formData.email) {
      showToast('error', 'Please fill out Mobile Number, Name, and Email.');
      return;
    }

    if (formType === 'enquiry') {
      if (!formData.message) {
        showToast('error', 'Please enter your message.');
        return;
      }
    } else if (formType === 'pickup') {
      if (!selectedDevice || !selectedBrand) {
        showToast('error', 'Please select a device and a brand.');
        return;
      }
    } else {
      showToast('error', 'Please select Enquiry or Pickup first.');
      return;
    }

    const newEntry = {
      ...formData,
      type: formType,
      device: selectedDevice,
      brand: selectedBrand,
      date: new Date().toLocaleString(),
    };

    const existingEntries = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    existingEntries.push(newEntry);
    localStorage.setItem('formSubmissions', JSON.stringify(existingEntries));

    showToast('success', 'Form submitted successfully!');

    setFormData({
      mobile: '',
      name: '',
      email: '',
      message: '',
    });
    setSelectedDevice('');
    setSelectedBrand('');
    setFormType(null);
  };

  return (
    <div>
      {/* ✅ Toast Notification */}
      {toast.visible && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-md text-white z-50 ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="bg-violet-300 text-white text-2xl mt-3.5 mb-3.5 w-60 m-auto pl-11 h-20 pt-3.5 items-center">
        <h1>Our Services</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-4 px-4">
        {/* Carousel */}
        <div
          className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg bg-white"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Images.map((src, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex justify-center items-center bg-black/5"
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="w-full max-h-[400px] object-contain p-4"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black"
          >
            ❯
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {Images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? 'bg-violet-500 scale-125' : 'bg-gray-50'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          ref={enquiryRef}
          className="w-full md:w-1/2 bg-white border border-gray-300 p-6 rounded-md shadow-md"
        >
          {/* Moved Button Here */}
          <div className="text-center mb-4">
            <button
              onClick={scrollToEnquiry}
              className="bg-violet-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-violet-600"
            >
              Contact Experts
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-green-700">
            CONTACT OUR CERTIFIED EXPERTS
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block font-medium">Mobile Number*</label>
              <input
                type="text"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium">Full Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex gap-2 mt-3">
              <button
                type="button"
                onClick={handleEnquiryClick}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Enquiry
              </button>
              <button
                type="button"
                onClick={handlePickupClick}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Pickup
              </button>
            </div>

            {formType === 'enquiry' && (
              <div className="mt-4">
                <label className="block font-medium">Write Message*</label>
                <textarea
                  name="message"
                  placeholder="Enter your query and doubt related to your device problem. Our teams will contact you!"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                ></textarea>
              </div>
            )}

            {formType === 'pickup' && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block font-medium">Select Device*</label>
                  <select
                    className="w-full border p-2 rounded"
                    value={selectedDevice}
                    onChange={(e) => {
                      setSelectedDevice(e.target.value);
                      setSelectedBrand('');
                    }}
                  >
                    <option value="">Select</option>
                    {deviceOptions.map((device) => (
                      <option key={device} value={device}>
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDevice && (
                  <div>
                    <label className="block font-medium">Select Brand*</label>
                    <select
                      className="w-full border p-2 rounded"
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                      <option value="">Select</option>
                      {brandOptions[selectedDevice]?.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Merged Works component here */}
      <Works />
    </div>
  );
};

export default Home;
