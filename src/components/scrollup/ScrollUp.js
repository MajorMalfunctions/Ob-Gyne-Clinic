import React, { useState } from 'react'
import "../../styles/scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add
    ("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  
  const [Toggle, showMenu] = useState(false);
  const [activeNave, setActiveNav] = useState("#home");
  
  return (
    <a href="#" className="scrollup">
      {/* <i className="uil uil-arrow-up scrollup__icon"></i> */}
      <i class="fa-sharp fa-solid fa-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp