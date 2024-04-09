import React from 'react';
import parser from 'html-react-parser';

export default function Modal({setModal, modal, modalData }) {
  const { thumbUrl, details } = modalData;
  const { title, description, type, langages, platform, country, url } =
    details;
  return (
    <div className="px-modal">
      <div className="single-project-box">
        <div className="row align-items-start">
          <div className="col-lg-7">
            <img className="border" src={thumbUrl} title alt="Thumbnail" />
            <div className='w-100  text-center mt-5'>
              <a className='me-5' href={parser(url)} target="_blank" >
                <button className='btn btn-success ps-4 pe-4' > VIEW </button>
              </a>
              <a className='ms-5'  >
                <button className='btn btn-danger  ps-3 pe-3' to="project" onClick={() => setModal(!modal)}  >CANCAL</button>
              </a>
            </div>
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            {title && <h4>{parser(title)}</h4>}
            {description && <p>{parser(description)}</p>}
            <div className="about-content">
              <ul>
                {type && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Type:</span>
                    <span>{type}</span>
                  </li>
                )}
                {langages && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Langages:</span>
                    <span>{langages}</span>
                  </li>
                )}
                {platform && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Platform:</span>
                    <span>{platform}</span>
                  </li>
                )}
                {country && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Country:</span>
                    <span>{country}</span>
                  </li>
                )}
                {url && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Live URL:</span>
                    <a href={url} target="_blank">{url}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
