import React from 'react'

function AboutSection() {
    return (
        <div className="about__section mt-4 pt-4">
            <div className="about__section__header container">
                <h2 className="about__section__title d-flex flex-row-reverse">
                    About me
                </h2>
            </div>
            <div className="mt-4 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-4 d-flex flex-column justify-content-evenly">
                            <div className="d-flex about__card__wrap flex-row justify-content-between align-items-center">
                                <a href="https://heyshrav.com/assets/BS_Shravan_Resume.pdf" className="section__card about__card">
                                    <i class="bi bi-file-text-fill"></i>
                                    <div className="fs-4 fw-bolder">
                                        Open Résumé
                                    </div>
                                </a>
                                  <a className=" mx-auto  about__card section__card" >
                                    <i class="bi bi-file-text-fill"></i>
                                    <div className="fs-6">
                                        Read blog
                                    </div>
                                </a> 
                            </div>

                        </div>

                        <div className="col-md-6">
                            <p>
                                I am currently a final year undergrad student at the Global Academy of Technology, Bengaluru.
                            </p>
                            <p>
                                As an Engineering student and a self-taught Designer, I like to bring my technical knowledge and design skills together to try and create meaningful designs and user experience.
                            </p>
                            <p>
                                Apart from having the experience of working at 4 different startups and working on various freelance projects, I am also very passionate about photography and visual arts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
