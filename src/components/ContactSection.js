import React from 'react'
function ContactSection() {
    return (
        <div>
            <div className="container " id="contact">
                <div className="row contact__card"> 
                        <div className="col-lg-4">
                            <div className="d-flex justify-content-center contact__image">
                                <img src="/assets/images/contact__image.png" alt="something" width="200px" />
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 contact__body__wrap">
                            <div className=" ">
                                <h3 className="text-white fs-2 fw-bold">Let's talk over a cup of coffee?</h3>
                                <p className="text-muted">Or, if you prefer, you can directly message me on <a href="https://linkedin.com/in/heyshrav" className="  p-0 text-white text-left ">LinkedIn</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4  contact__button__wrap">
                            <div className="d-flex flex-column justify-content-evenly">
                                <h5 className="text-muted fw-light"
                                >Reach out at</h5>
                                <h5 className="text-white  mb-3">heyshrav@gmail.com</h5>
                                <span className="fw-light text-muted">or just fill the contact form! xD</span>
                                <button className="contact__button mt-3 fw-bold  ">Let's Talk</button>
                            </div>

                        </div>
                    </div>
 
            </div>
        </div>
    )
}

export default ContactSection
