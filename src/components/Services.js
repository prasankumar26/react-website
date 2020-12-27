import React from 'react'
// import { AiFillEye } from "react-icons/ai";
import { GiWaterBolt } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import { GiArrowWings } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrMagic } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Services() {
    return (
        <>
           <section id="what_we_provide" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <GrDiamond className="what_we_provide__icon" />
                <h6>UI/UX Design</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <GiArrowWings className="what_we_provide__icon" />
                <h6>Web Development</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <FaMobileAlt className="what_we_provide__icon" />
                <h6>App / Mobile</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <FaGamepad className="what_we_provide__icon" />
                <h6>Game Design</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <GiCommercialAirplane className="what_we_provide__icon" />
                <h6>SEO / Marketting</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <AiOutlineStar className="what_we_provide__icon" />
                <h6>Photography</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <GrMagic className="what_we_provide__icon" />
                <h6>Graphic Design</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="what_we_provide_one text-center">
                <GiWaterBolt className="what_we_provide__icon" />
                <h6>Illustrations</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Services
