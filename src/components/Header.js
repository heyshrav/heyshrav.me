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
                <h4 className="fs-4 m-3">Hey, I'm Shravan
                </h4>
            </div>
            <div className="mt-4 header__masthead">
                Building Websites, Brands and User Experience.
            </div>
            <div className="mx-auto mt-4 header__subheader">
        
                <div className="fs-5">
                    <div>a <span>Designer</span> and <span>Frontend Developer</span> in Bangalore.</div>
                </div>
                <div className="header__button mt-4 pt-3">
                    <a href="/">Connect with me</a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Header
