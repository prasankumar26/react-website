import React, { useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonial from "./Testimonial";

function Review() {
  const checkNumber = (number) => {
    if (number > Testimonial.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Testimonial.length - 1;
    }
    return number;
  };

  const [index, setIndex] = useState(0);
  const { id, review, name } = Testimonial[index];

  const rightSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const leftSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (  
    <>
      <div id="home_slider">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center" key={id}>
              <h6>
                {" "}
                <FaQuoteLeft /> {review}
                <p className="home_slider_name">
                  {name} <FaQuoteLeft />{" "}
                </p>
              </h6>

              <div className="icons_slider">
                <AiOutlineCaretLeft
                  className="icons_sliders"
                  onClick={rightSlide}
                />
                <AiFillCaretRight
                  className="icons_sliders"
                  onClick={leftSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
