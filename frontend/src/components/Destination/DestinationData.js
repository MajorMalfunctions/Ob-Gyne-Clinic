import { Component } from "react";
import "../../styles/destination.css";

class DestinationData extends Component{
    render(){
        return (
            <div className={this.props.className}>
            <div className="des-text">
              <h2> {this.props.heading} </h2>
              <p> {this.props.text} </p>
            </div>

            <div className="image">
              <img alt="" src={this.props.img1} />
              <img alt="" src={this.props.img2} />
              <img alt="" src={this.props.img3} />
              <img alt="" src={this.props.img4} />
            </div>
          </div>
        )
    }
}
export default DestinationData;