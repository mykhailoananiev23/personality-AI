import React from 'react';

export default function ContactInfo({ contactInfoData }) {
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          // data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="500"
        >
          {/* <label>{item.title}</label> */}
          {/* {item.email && <a href={`mailto:${item.email}`}>{item.email}</a>} */}
          {/* {item.skype && <a href={`tel:${item.skype}`}>{item.skype}</a>} */}

        </div>
      ))}
    </div>
  );
}
