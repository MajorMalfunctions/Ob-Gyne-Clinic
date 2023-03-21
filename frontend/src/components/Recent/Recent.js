import "../../styles/recent.css";
import RecentData from "./RecentData";
import { motion } from "framer-motion";

import Birth1 from '../../assets/images/birth1.jpeg';
import Birth2 from '../../assets/images/birth2.jpeg';
import Birth3 from '../../assets/images/birth3.png';

function Recent() {
    return (
        <div className="recent">
            {/* <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            > 
            Recent Activities
            </motion.h1> */}
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
                  text="
                    Gynecology involves many areas of women’s healthcare
                    “Well Visit” examinations and appropriate in-office laboratory tests
                    Osteoporosis assessment using the DEXA Scan equipment
                    Mammograms are performed in-office with both 2-D and 3-D technology"
                    // Hormonal Replacement therapy including bioidentical hormones and BioTE pellets
                    // Surgical treatments performed in the office setting are endometrial ablation, LEEP and hysteroscopy
                    // Infertility evaluation and limited treatment
                    // Surgical treatment consultation including minimal invasive hysterectomy, laparoscopic procedures, vaginal surgery and tubal ligation (sterilization)
                    // Evaluation and treatment of sexual issues
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