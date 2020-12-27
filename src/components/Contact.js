import React from "react";

function Contact() {
  return (
    <>
      <section id="sendmessage">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="sendmessage__left">
                <h2>Contact Info:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  rem culpa laudantium repellat, cum quae neque ipsam iure vero
                  placeat! neque ipsam iure vero placeat!
                </p>
                <address>
                  <div className="contact_one mb-3">
                    <b>Address:</b>{" "}
                    <span className="contact-span text-muted">
                      10111 Santa Monica Boulevard, LA
                    </span>
                  </div>
                  <div className="contact_one mb-3">
                    <b>Phone:</b>{" "}
                    <span className="contact-span text-muted">
                      +44 987 065 908
                    </span>
                  </div>
                  <div className="contact_one mb-3">
                    <b>Email:</b>{" "}
                    <span className="contact-span text-muted">
                      info@example.com
                    </span>
                  </div>
                  <div className="contact_one mb-3">
                    <b>Fax:</b>{" "}
                    <span className="contact-span text-muted">
                      +44 987 065 908
                    </span>
                  </div>
                </address>
              </div>
            </div>
            <div className="col-md-8">
              {/* message  */}
              <section id="sendmessagess">
                <div className="container">
                  <div className="row">
                    <div className="mx-auto">
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="usr"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group mb-4">
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                          <div class="form-group mb-4">
                            <input
                              type="text"
                              class="form-control"
                              id="usr"
                              placeholder="Your title"
                            />
                          </div>
                          <div class="form-group mb-4">
                            <textarea
                              class="form-control"
                              rows="5"
                              id="comment"
                              placeholder="Your comment"
                            ></textarea>
                          </div>
                          <div className="message_btn mx-auto text-center">
                            <button type="button" className="btn">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157535.70191165962!2d-74.04014928382965!3d40.70292414903771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1608956512320!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
