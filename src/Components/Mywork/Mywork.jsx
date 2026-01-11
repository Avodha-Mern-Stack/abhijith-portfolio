import React from 'react';
import './Mywork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-card">
            <img src={work.w_img} alt={`work-${index}`} className="work-image" />
            <h3 className="work-title">{work.title}</h3>
            <p className="work-tech">
              {work.technologies.join(" | ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
