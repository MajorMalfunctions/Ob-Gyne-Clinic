import "../../styles/services.css";
import ServicesData from "./ServicesData";

import services1 from  '../../assets/images/services/services1.jpg';
import services2 from  '../../assets/images/services/services2.jpg';
import services3 from  '../../assets/images/services/services3.jpg';
import services4 from  '../../assets/images/services/services4.jpg';
import services5 from  '../../assets/images/services/services5.jpg';
import services6 from  '../../assets/images/services/services6.jpg';
import services7 from  '../../assets/images/services/services7.jpg';
import services8 from  '../../assets/images/services/services8.jpg';
import services9 from  '../../assets/images/services/services9.jpg';
import services10 from  '../../assets/images/services/services10.jpg';


function Trip() {
    return (
        <div className="services">
            <h1>Services Offered</h1>
            <p>What We Offer</p>

            <div className="services-card">
                <ServicesData
                  image={services1}
                  heading="Preventive Care"
                />

                <ServicesData
                  image={services2}
                  heading="Pregnancy"
                />

                <ServicesData
                  image={services3}
                  heading="Ultrasound"
                />
                <ServicesData
                  image={services4}
                  heading="Menopause"
                />

                <ServicesData
                  image={services5}
                  heading="Birth Control"
                />
            </div>

            <div className="services-card">
                <ServicesData
                  image={services6}
                  heading="Abnormal Bleeding"
                />

                <ServicesData
                  image={services7}
                  heading="Pap Smear"
                />

                <ServicesData
                  image={services8}
                  heading="Clinical Breast Examination"
                />
                <ServicesData
                  image={services9}
                  heading="Major/Minor Surgical Procedures"
                />

                <ServicesData
                  image={services10}
                  heading="Pre & Post Operative Evaluation and Care"
                />

                {/* <ServicesData
                  image={Birth3}
                /> */}
            </div>
        </div>
    )
}

export default Trip;