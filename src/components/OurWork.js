import React, { useState } from "react";
import { Model } from "react-model";
import { FaTimes } from "react-icons/fa";

function OurWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="our_work">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>Our Work Process</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum quidem nam eius qui culpa quasi atque quam{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <div className="our_video">
                <div className="our_videos">
                  <img
                    src="../../junior-project/blue_play.png"
                    alt="music"
                    className="music_png"
                    onClick={openModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
          }`}
        >
          <div className="modal-container">
            <h3>Watch Video</h3>
            <iframe
              className="video_res"
              height="315"
              src="https://www.youtube.com/embed/ZePfHmZ1fVQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes></FaTimes>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
