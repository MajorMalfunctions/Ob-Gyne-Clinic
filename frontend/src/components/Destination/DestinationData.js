import { Component } from "react";
import "../../styles/destination.css";

import Baby1 from "../../assets/images/baby1.jpg";
import Baby2 from "../../assets/images/baby2.jpg";
import Baby3 from "../../assets/images/baby3.jpeg";
import Baby4 from "../../assets/images/baby4.jpg";
class DestinationData extends Component{
    render(){
        return(
        <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>

            <div className="image">
                <img alt="img" src={this.props.img1} />
                <img alt="img" src={this.props.img2} />
            </div>
        </div>
        )
    }
}

export default DestinationData;