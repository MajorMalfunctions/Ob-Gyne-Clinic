import React from "react";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
        <section class="page_404">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">

                  <div class="four_zero_four_bg">
                    <h1>Error 404!</h1>
                  </div>

                    <h4 className="subtext">
                    Look like you're lost
                    </h4>

                    <p>the page you are looking for not avaible!</p>
                    <a href="/home" className="link_404">Go to Home</a>

                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default NotFound;