import { Component } from "react";
import "../../styles/footer.css";

class FooterData extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className="des-text">
                  <h2> {this.props.heading} </h2>
                </div>
            <div className="image">
              <img alt="img" src={this.props.img1} />
              <img alt="img" src={this.props.img2} />
              <img alt="img" src={this.props.img3} />
              <img alt="img" src={this.props.img4} />
            </div>

           </div>
        )
    }
}
export default FooterData;