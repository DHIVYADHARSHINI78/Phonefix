import React from 'react';
import a from '../assets/a.jpg';
import rec from '../assets/rec.jpg';
import water from '../assets/water.jpg';
import charge from '../assets/charge.jpg';
import sound from '../assets/sound.jpg';
import sett from '../assets/sett.jpg';
import b from '../assets/b.jpg';
import l from '../assets/l.jpg';
import homeapp from '../assets/homeapp.png';


const services = [
    {
    id:9,
    title:"Home Appliences Also We Repair",
    description:
    "We All repair a Home Appliences and gadgets with Affordable price with good quality and we all give some product  warranty Also!",
    image: homeapp,
  },
  {
    id: 1,
    title: "Mobile Screen Replacement",
    description:
      "If you've accidentally dropped your mobile and the screen is damaged, cracked or scratched, don't worry. We replace your damaged screen with a genuine part, restoring it to original condition.",
    image: a,
  },
  {
    id: 2,
    title: "Battery Replacement",
    description:
      "Is your battery draining quickly? Our experts provide battery replacement services using high-quality parts to keep your device powered all day long.",
    image: rec,
  },
  {
    id: 3,
    title: "Water Damage",
    description:
      "If your device gets submerged in water, we can fix it! Our technicians have the tools and experience to restore water-damaged devices back to working condition.",
    image: water,
  },
  {
    id: 4,
    title: "Charging Problem",
    description:
      "Is your device not charging? We diagnose and fix issues from dirty ports to internal board failures. Get your phone fully functional again.",
    image: charge,
  },
  {
    id: 5,
    title: "Sound Issues",
    description:
      "Having trouble with speaker or mic sound? We fix audio problems caused by hardware faults or software glitches.",
    image: sound,
  },
  {
    id: 6,
    title: "Wi-Fi / Bluetooth Fix",
    description:
      "Trouble connecting to Wi-Fi or Bluetooth? We repair antennas, chips, or software to restore seamless wireless functionality.",
    image: sett,
  },
  {
    id: 7,
    title: "Software Update",
    description:
      "Running outdated software? We install the latest OS updates safely, ensuring security and new features for your device.",
    image: b,
  },
  {
    id: 8,
    title: "Sensor Repair",
    description:
      "If your proximity or light sensors are not working, we test and repair sensor-related issues quickly and effectively.",
    image: l,
  },

];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-16">OUR SERVICES</h2>

      <div className="max-w-7xl mx-auto space-y-16 px-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-52 h-52 object-contain"
            />
            <div className="md:w-1/2">
              <h3 className="text-green-600 font-bold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
