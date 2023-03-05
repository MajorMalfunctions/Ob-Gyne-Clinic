import React,{useState} from 'react';
import "./services.css";


const Services = () => {
   const [toggleState, setToggleState] = useState(0);
   
    const toggleTab =(index) => {
         setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-android services__icon"></i>
            <h3 className="services__title">Mobile Applications</h3>
          </div>
          
          <span className="services__button"
            onClick={() => toggleTab(1)}
          >View More
            <i className="uil uil-arrow-right services__button-icon">
            </i>
          </span>
          
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              
              <h3 className="services__modal-title">Mobile App</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and Companies.
              </p>
              <br />
              <br />
              
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Page Development
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="services__content">
          <div>
            <i className="uil uil-server services__icon"></i>
            <h3 className="services__title">Server Maintenance</h3>
          </div>
          
          <span className="services__button"
            onClick={() => toggleTab(2)}
          >View More
            <i className="uil uil-arrow-right services__button-icon">
            </i>
          </span>
          
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              
              <h3 className="services__modal-title">Server Maintenance</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and Companies.
              </p>
              <br />
              <br />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Page Development
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">Database Manager</h3>
          </div>
          
          <span className="services__button"
            onClick={() => toggleTab(3)}
          >View More
            <i className="uil uil-arrow-right services__button-icon">
            </i>
          </span>
          
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              
              <h3 className="services__modal-title">Database Management</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and Companies.
              </p>
              <br />
              <br />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Page Development
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
  </section>
  );
};

export default Services;