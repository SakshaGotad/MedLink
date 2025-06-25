import React from 'react';

const services = [
  {
    id: 1,
    title: 'Easy to use with us',
    description: 'Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi nibh.',
    highlight: true,
  },
  {
    id: 2,
    title: 'Communicate with doctor',
    description: 'Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi nibh.',
  },
  {
    id: 3,
    title: 'Med and Refill reminders',
    description: 'Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi nibh.',
  },
  {
    id: 4,
    title: 'Drug interaction warnings',
    description: 'Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi nibh.',
  },
  {
    id: 5,
    title: '24/7 App support',
    description: 'Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi nibh.',
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#12004d] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
       
        <div className="flex flex-col justify-start gap-6">
          <div>
            <h2 className="text-4xl font-semibold leading-snug">All The Service You Will Get</h2>
            <p className="text-[#ccc] mt-4">
              It’s important to address your health conditions during medications for the best substance.
            </p>
          </div>
          <button className="bg-[#8141dc] hover:bg-[#692fc2] transition text-white px-6 py-3 rounded-md font-medium w-max">
            Learn More
          </button>
        </div>

     
        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-md p-6 min-h-[220px] flex flex-col justify-between ${
                service.highlight ? 'bg-[#8141dc]' : 'bg-[#1c066b]'
              }`}
            >
              <div>
                <div className="bg-[#7c5fe9] text-white text-sm w-8 h-8 flex items-center justify-center rounded-md font-bold mb-4">
                  {service.id}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[#ccc]">{service.description}</p>
              </div>
              <div className="mt-4 text-sm font-medium text-[#c1a9ff] hover:underline cursor-pointer flex items-center gap-1">
                Learn More <span className="text-xs">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
