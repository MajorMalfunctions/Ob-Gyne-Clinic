import React, { useEffect, useState } from 'react';
import '../../styles/navbar.css';

import Header from '../Header/Header';

function Navbar() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {

            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <>
          <div className="progressBarContainer">
              <div className="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
          <Header />
          </div>
        </>
    );
}

export default Navbar;