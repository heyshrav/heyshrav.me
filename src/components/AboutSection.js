import React from 'react'

function AboutSection() {
    return (
        <div className="about__section mt-4 pt-4">
            <div className="about__section__header container">
                <h2 className="section__title d-flex flex-row-reverse">
                    About me
                </h2>
            </div>
            <div className="mt-4 pt-4">
                <div className="container ">
                    <div className="row ">

                        <div className="col-md-4 about__card fs-3">
                            <div className="link-flash ">
                                <div>
                                    <a href="/pages/about" class="about__link__link">
                                        <span class="mask">
                                            <div class="link-container">
                                                <span class="link-title1 title">READ MORE</span>
                                                <span class="link-title2 title">ABOUT ME</span>
                                            </div>
                                        </span>
                                        <div class="link-icon">
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                        </div>
                                    </a>

                                </div>
                                <div>
                                    <a href="https://www.heyshrav.com/assets/BS_Shravan_Resume.pdf" class="about__link__link">
                                        <span class="mask">
                                            <div class="link-container">
                                                <span class="link-title1 title">RESUME</span>
                                                <span class="link-title2 title">CHECK OUT</span>
                                            </div>
                                        </span>
                                        <div class="link-icon">
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="about__link__link">
                                        <span class="mask">
                                            <div class="link-container">
                                                <span class="link-title1 title">READ BLOG</span>
                                                <span class="link-title2 title">ON MEDIUM</span>
                                            </div>
                                        </span>
                                        <div class="link-icon">
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="about__body">
                                <div><p>I am currently a final year undergrad student at the Global Academy of Technology, Bengaluru.
                                </p></div>
                                <div><p>As an Engineering student and a self-taught Designer, I like to bring my technical knowledge and design skills together to try and create meaningful designs and user experience.</p></div>
                                <div><p>Apart from having the experience of working at 4 different startups and working on various freelance projects, I am also very passionate about photography and visual arts.
                                </p></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
