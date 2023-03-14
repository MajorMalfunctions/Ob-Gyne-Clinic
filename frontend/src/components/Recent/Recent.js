import "../../styles/recent.css";
import RecentData from "./RecentData";

import Birth1 from '../../assets/images/birth1.jpeg';
import Birth2 from '../../assets/images/birth2.jpeg';
import Birth3 from '../../assets/images/birth3.png';

function Recent() {
    return (
        <div className="recent">
            <h1>Recent Activities</h1>
            <p>What We Can Do For You!</p>

            <div className="recent-card">
                <RecentData
                  image={Birth1}
                  heading="Pregnancy"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
                />

                <RecentData
                  image={Birth2}
                  heading="Gynecology"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"w
                />

                <RecentData
                  image={Birth3}
                  heading="Lifestyle"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
                />

                <RecentData
                  image={Birth3}
                  heading="Surgical"
                  text="There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
                />
            </div>
        </div>
    )
}

export default Recent;