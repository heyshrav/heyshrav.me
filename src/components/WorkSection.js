import React from 'react'

function WorkSection() {
    return (
        <div className="section section__work py-5" id="work"> 
        
            <div className="section__header mt-4 container">

                <h2 className="section__title text-white">
                    Index of Work
                </h2>
                <p className="text-center text-muted mx-auto mt-4 w-lg-25">Interface designs, Web projects, UX Case Studies &amp; Photography.</p>
            </div>
            <div className="mt-4 p-4">
                <div className="container">
                    <div className="row mb-4 mx-auto">
                        <div className="col-md-6 col-sm-12">
                            <img src="https://res.cloudinary.com/heyshrav/image/upload/v1639037508/heyshrav.com/images/dribble-shots-eg_xl7jts.svg" className="img-fluid" width="600px" alt="dribble-shots-eg" />

                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex flex-column p-4">
                            <h3 className='text-white'>Dribbble Shots</h3>
                            <p className="text-muted py-1">
                            Check out some of my latest Dribbble shots. 
                            </p> 
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex pt-5 flex-row justify-content-evenly">

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
