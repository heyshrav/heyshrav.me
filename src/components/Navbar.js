import React from 'react'

export default function Navbar() {
    return (
        <div className=" py-1 bg-light-secondary  d-none d-sm-block navbar__wrap">
            <div class="collapse" id="navbarToggle">
                <div class="bg-dark p-5 d-flex flex-column align-items-center justify-content-center">

                    <span class="text-muted">Reach directly at</span>
                    <a href="mailto:heyshrav@gmail.com?Subject=Hello,there! Reaching out to you from your website" className="nav-link"><h5 class="text-white h1">heyshrav@gmail.com</h5></a>
                </div>
            </div>
            <nav class="navbar mx-3 navbar-light">
            <span class="navbar-text nav-link">
            <a href="mailto:heyshrav@gmail.com?Subject=Hello,there! Reaching out to you from your website">Connect via Email!</a>
            </span>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#work">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">Contact</a>
                    </li>
                    <div> 
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                </div>
                </ul>
               
            </nav>
        </div>
    )
}


