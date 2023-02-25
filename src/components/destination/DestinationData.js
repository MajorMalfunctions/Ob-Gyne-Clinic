import { Component } from "react";
import "../../styles/destination.css";

class DestinationData extends Component{
    render(){
        return (
            <div className="first-des">
            <div className="des-text">
              <h2> {this.props.heading} </h2>
              <p> {this.props.text} </p>
            </div>

            <div className="image">
              <img alt="img" src={this.props.Baby1} />
              <img alt="img"  src={this.props.Baby2} />
            </div>

          </div>
        )
    }
}
export default DestinationData;