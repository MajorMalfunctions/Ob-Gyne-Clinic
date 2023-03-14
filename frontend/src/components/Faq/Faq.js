import React, { useState } from 'react';
import '../../styles/faq.css';

import { FaqData } from './FaqData';

function Faq() {
    return (
      <div className="faq-container">
          <h1> Pregnancy FAQs </h1>
          <h6> Most Recent Questions </h6>

          <div className="accordion">
              <Accordion className="accordion" title="What should I do if I think I am pregnant?">
              If you think you are pregnant, give us a call to make your first appointment. We usually recommend that you come to see us at around eight weeks following your last menstrual period.  An exception would be for serious symptoms noted sooner, such as significant bleeding or pain.
            </Accordion>

            {/* <Accordion isExpand={true} title="Why do we use it?"> */}
            <Accordion isExpand={false} title="Where does my doctor or midwife deliver babies?">
            We are affiliated with Legacy Good Samaritan Hospital and Providence St. Vincent’s Medical Center. These are the two facilities that we can deliver your baby. Your insurance may determine which one if not both are covered for your delivery.
            </Accordion>

            <Accordion title="How often do I need to be seen for obstetric care?">
            To standardize and precisely date each pregnancy, we use “weeks” and days pregnant as opposed to “months.” Pregnancy starts with the first day of the last menstrual period, and lasts an average of 40 weeks which is also the “due date.” Of course, most women actually become pregnant about two weeks after the last menstrual period. The system we use is historical from before ultrasound and highly sensitive lab tests were used, and the last period was the most reliable method for “dating the pregnancy”.We recommend a first visit around 8 weeks, and then a visit every 4 weeks until about 28 weeks. Following that, we see pregnant patients every 2 weeks until 36 weeks, then weekly thereafter until delivery. If a higher risk pregnancy is noted, additional or more frequent visits may be required. Another term you may hear is “Trimesters” which divide pregnancy into thirds. These are generally 13 weeks long, with the last being 14. For example 0-13 weeks is the first trimester, 14 to 26 weeks is the second trimester, and 27 weeks on is the third trimester. We consider a “term” gestation to be 37 weeks or later, and “full term” to be 39 weeks, with a due date on the 40th week.
            </Accordion>

            <Accordion title="How many ultrasounds will I have, and how do I prepare for an ultrasound?">
            We usually perform a first trimester ultrasound at 8 weeks to establish that the pregnancy is healthy, and determine whether there is one or more than one fetus.An “anatomy” survey is performed at around 20 weeks. This “big” ultrasound visualizes all the internal organs, and inspects the growth of the infant to ensure health. These are “routine.”However, there are many other reasons your provider may want ultrasounds in addition to these, including concerns about large or small infants, observation of the developing fetus, observation of the placenta or fluid, or other reasons. Your provider will communicate with you about need for any additional ultrasounds.To prepare for your ultrasound you need only to be well hydrated! You should drink one or two 8 ounce glasses of water before you arrive. If you feel you have the need to urinate, but are not uncomfortable, then you are ready!  Also, you might want to purchase a USB drive from our receptionist so we can download the pictures from the ultrasound machine for you.
            </Accordion>

            <Accordion title="Are there childbirth preparation and/or breastfeeding classes available?">
            NWWC offers classes once a month taught by our midwife staff. Check out our clinical news page for more information about Prenatal Classes.Legacy Women’s Services provides prenatal education throughout the Portland and Vancouver area. We have provided a link to their services to assist you.Prenatal Education | Legacy HealthProvidence also offers prenatal educational classes.http://oregon.providence.org/our-services/p/pregnancy-and-parenting-classes/
            </Accordion>

            <Accordion title="What is going to happen at my first Obstetric Visit?">
            At the first obstetric visit, we like to perform ultrasound to evaluate the pregnancy and establish a due date. You will also meet with your provider. For obstetric care, we have physician providers and certified nurse midwives. Generally all providers care for patients with low risk conditions. For higher risk pregnancies, most women will see or at least consult with physician providers. Some examples are women who are carrying twins, have significant medical conditions during pregnancy such as thyroid disease, diabetes, high blood pressure, or history of previous cesarean deliveries or uterine surgery.Your provider will review your complete medical history, do an examination if needed, and review ultrasound results with you. Most of our patients have lots of questions, and we schedule time to answer them. You may find some of your questions are answered below in this information.
            </Accordion>

            <Accordion title="How will I know if I am in labor?">
            The thought of labor can bring anxiety to many parents, especially the first timers. The good news is, labor is hard to miss! If your pregnancy is full term, meaning 37 weeks or more, you should watch for contractions which are when your uterus slowly tightens and then releases over about 30 seconds to a minute. If the contractions are painful and recurring, start to time them from the start of one contraction to the start of the next. Once you have a contraction about every five minutes for at least an hour, then it is time to call your obstetrician!
            </Accordion>

            <Accordion title="When can I hear the baby’s heartbeat the first time?">
            You can usually hear the baby’s heartbeat with the doppler at 12 weeks or so.
            </Accordion>

            <Accordion title="Do I need to be on a special diet during pregnancy?">
            No, but you do need an extra 200-300 calories per day – this equals to an extra glass of milk. Do not eat swordfish, shark, raw oysters, mackerel, limit tuna consumption to 2-3 servings per week. Limit caffeine intake to 300 mg per day –which is a cup of coffee or a can of soda a day.
            </Accordion>

            <Accordion title="What are symptoms of a bladder infection?">
            Stinging or burning with urination, pelvic pressure, backache or flank pain, mild fever.
            </Accordion>

            <Accordion title="What are symptoms of a vaginal infection?">
            Yeast: white cottage cheese like discharge, vaginal itching or burning
            Bacterial: white, gray or yellow discharge, vaginal odor especially after sex, sometimes pelvic discomfort
            </Accordion>

            <Accordion title="What is the 4-D ultrasound?">
            This is an ultrasound that provides a clear look at the baby. 4-D just means that the scan is in real time.
            </Accordion>
          </div>

      </div>
    );
  }

  const Accordion = ({ children, title, isExpand = false }) => {
    const [expand, setExpand] = useState(isExpand);
    return (
      <div className="box">
        <div className="title-box" onClick={() => setExpand(expand => !expand)}>
          <span className="title">{title}</span>
          <span className="icon"><i className={`fa fa-play-circle${!expand ? ' down' : ''}`}></i></span>
          <div className="clearfix"></div>
        </div>
        {expand && <div className="content">{children}</div>}
      </div>
    )
  }

export default Faq;