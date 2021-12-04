import React from 'react'

function WorkSection() {
    return (
        <div className="section py-5">
           

            <div className="section__header mt-4 container">

                <h2 className="section__title">
                    Explore my work
                </h2>
                <p className="text-center text-muted mx-auto mt-4 w-lg-25">Clean interface designs, web projects, photography work and case studies.</p>
            </div>
            <div className="mt-4 p-4">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-evenly">

                        <div className="col-lg-4 mb-4 section__card d-flex flex-column  align-items-center">
                            <div>
                                <p>Design Projects</p>
                            </div>
                            <div className="p-2"> 
                                <img className="responsive img-fluid"  width="150px" src="https://res.cloudinary.com/heyshrav/image/upload/v1638634207/heyshrav.com/images/Dashboard_perspective_matte_ljj0uq.png" alt=""/>
                            </div>
                            <div className="mt-4 mb-2 section__button">
                                <a href="#">View Projects</a>
                            </div>
                        </div>


                        <div className="col-lg-4 mb-4 section__card d-flex flex-column  align-items-center">
                            <div>
                                <p>Web Projects</p>
                            </div>
                            <div className="p-2">
                            <img className="responsive img-fluid"  width="150px" src="https://res.cloudinary.com/heyshrav/image/upload/v1638634206/heyshrav.com/images/Code_perspective_matte_dvhdhl.png" alt=""/>
                                
                            </div>
                            <div className="mt-4 mb-2 section__button">
                                <a href="#">View Projects</a>
                            </div>
                        </div>


                        <div className="col-lg-4 mb-4 section__card d-flex flex-column  align-items-center">
                            <div>
                                <p>Photography</p>
                            </div>
                            <div className="p-2">
                            <img className="responsive img-fluid"  width="150px" src="https://res.cloudinary.com/heyshrav/image/upload/v1638634207/heyshrav.com/images/Camera_perspective_matte_dnoijy.png" alt=""/>
                                 
                            </div>
                            <div className="mt-4 mb-2 section__button">
                                <a href="#">View Projects</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSection
