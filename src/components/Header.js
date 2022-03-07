import React from 'react'

function Header() {
    var profileImg = "https://i.ibb.co/VVFMJ3r/shravan-Bhat-Profile-Picture-2.png"
    return (
        <div className="bg-light-primary pt-1 pb-4">
        <div className="header pb-5 container text-center justify-content-center d-flex flex-column align-items-center">
            <div className="header__image  mx-auto">
                <img src={profileImg} alt="shravan-Bhat-masthead" className="img-fluid img-responsive " />
            </div>
            <div>
                <h4 className="fs-4 mt-5">Hey, I'm Shravan 🙋
                </h4>
            </div>
            <div className="mt-4 header__masthead">
            <span>UI Designer</span> and <span>Frontend Engineer</span><br/> building interfaces, user experience and websites.
            </div>
            <div className="mx-auto mt-4 header__subheader">
        
                {/* <div className="fs-5 mt-4">
                    <div>a <span>Designer</span> and <span>Frontend Developer</span> in Bangalore.</div>
                </div> */}
                <div className="header__button mt-4 pt-4">
                    <a href="mailto:heyshrav.com?subject=Hi there!, reaching out from your website">Let's grab a coffee ☕</a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Header
