import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 d-flex justify-content-center">
                        <div className="footer__one">
                        <h5>Piroll Design, Inc.</h5>
                         <p>&copy; 2017 Piroll. All rights reserved.</p>
                         <p>Designed by Prasan.</p>
                        </div>
                        </div>
                        <div className="col-md-3 col-12 d-flex justify-content-center">
                       <div className="footer__two">
                       <a href="mail:to">hello@oirolltheme.com</a>
                        <a href="tel:+44987065908">+44 987 065 908</a>
                       </div>
                        </div>
                        <div className="col-md-3 col-12 d-flexd-flex justify-content-center">
                        <div className="footer__three">
                          <div className="footer__three_child">
                              <p>Projects</p>
                              <p>News</p>
                          </div>
                          <div className="footer__three_child">
                              <p>About</p>
                              <p>Events</p>
                          </div>
                          <div className="footer__three_child">
                              <p>Services</p>
                              <p>Contact</p>
                          </div>
                          <div className="footer__three_child">
                              <p>Career</p>
                              <p>Legals</p>
                          </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-12 d-flex justify-content-center">
                       <div className="footer__four">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Dribble</p>
                       </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
