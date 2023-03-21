import "../../styles/recent.css";
import { motion } from "framer-motion";

function RecentData(props) {
    return (
        <div className="r-card">
            <div className="r-image"
                // initial={{ scale: 0.5 }}
                // animate={{ scale: 1.5 }}
                // transition={{
                //     type: "tween",
                //     duration: "1",
                //     delay: ".5"
                // }}
            >
                <motion.img
                    // animate={{ x: "calc(100vw - 50%)" }}
                    src={props.image}
                    alt="image"
                />
            </div>
            <p className="exp_heading"> {props.heading} </p>
            <p className="exp_desc"> {props.text} </p>
        </div>
    )
}

export default RecentData;