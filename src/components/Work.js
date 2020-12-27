import React, { useState } from 'react'
import menu from './data';
import { AiFillEye } from "react-icons/ai";





function Work() {

    const [data, setData] = useState(menu);
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };




    return (
        <>
           <section id="product_gellery">
        <div className="container-fluid">
          <div className="box_one">
            {data.slice(0, visible).map((item) => {
              return (
                <div className="testss">
                  <div className="product_one image">
                    <img
                      src={item.img}
                      alt="book"
                      className="img-fluid image__img tests"
                    />
                    <div className="image__overlay image__overlay--primary">
                      <div className="image__title">
                        <AiFillEye />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="btn_container mb-5 mx-auto text-center"
            onClick={showMoreItems}
          >
            <h6 className="text-muted">Load More Work</h6>
          </div>
        </div>
      </section>
        </>
    )
}

export default Work
