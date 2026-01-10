import React from 'react';
import './services.css';

// Dummy service data (replace with actual data or import it)
const Services_Data = [
  {
    s_no: 1,
    s_name: 'Web Development',
    s_desc: 'Building responsive and performant websites using React.',
  },
 
];

const Services = () => {
  return (
    <div id='Services'className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
