import "../../styles/trip.css";
import TripData from "./TripData";

import Birth1 from '../../assets/images/birth1.jpeg';
import Birth2 from '../../assets/images/birth2.jpeg';
import Birth3 from '../../assets/images/birth3.png';


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Recent Testimonials From Customers</p>

            <div className="tripcard">
                <TripData
                  image={Birth1}
                  heading="Text Birth 1"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
                />

                <TripData
                  image={Birth2}
                  heading="Text Birth 2"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"w
                />

                <TripData
                  image={Birth3}
                  heading="Text Birth 3"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
                />
            </div>
        </div>
    )
}

export default Trip;