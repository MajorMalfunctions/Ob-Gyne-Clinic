import React from "react"
import { project } from "./dummydata"
import CountUp from "react-countup"

import './counter.css';

const Counter = () => {
  return (
    <>
      <div className='hero_counter'>
        <div className='container grid3 grid4'>
          {project.map((item) => (
            <div className='box' data-aos='zoom-in'>
              <i className={item.icon}>
                <p>{item.title}</p>
              <h3 className='heading'>
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h3>
              </i>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Counter;