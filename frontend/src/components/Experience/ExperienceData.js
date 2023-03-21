import { Component } from "react";
import '../../styles/experience.css';
import { motion } from "framer-motion";


class ExperienceData extends Component{
    render(){
        return (
            <motion.div
            // initial= {{ y: -1000 }}
            // animate= {{ y: 0 }}
            // transition= {{
            //   type: "tween",
            //   duration: 1,
            //   delay: .4
            // }}
            className={this.props.className}
            >
            <motion.div
                initial= {{ y: 1000 }}
                animate= {{ y: 0 }}
                transition= {{
                  type: "tween",
                  duration: 1,
                  delay: .5
                }}
              className="exp-text"
            >
              <h2> {this.props.heading} </h2>
              <p className="exp_desc"> {this.props.text} </p>
            </motion.div>

            <motion.div
                initial= {{ y: -1000 }}
                animate= {{ y: 0 }}
                transition= {{
                  type: "tween",
                  duration: 1,
                  delay: .5
                }}
             className="image"
            >
              <motion.img
                // animate={{ x: "calc(100vw - 50%)" }}
                alt="img"
                src={this.props.img1}
              />
              <motion.img
                alt="img"
                src={this.props.img2}
              />
            </motion.div>
          </motion.div>
        )
    }
}
export default ExperienceData;