import React from 'react'

export default function Navbar() {
    return (
        <div className="container py-4 bg-light-primary d-none d-sm-block navbar__wrap">

            <nav class="navbar mx-3 navbar-light">
                <div className="container-fluid">
                    <span class="navbar-text nav-link">
                        <a href="mailto:heyshrav@gmail.com?Subject=Hello,there! Reaching out to you from your website">Connect via Email!</a>
                    </span>
                    <ul class="nav ">
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="#work">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="#">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="#contact">Contact</a>
                        </li>
                        <div>
                            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                        </div>
                    </ul>
                </div>
            </nav>

        </div >
    )
}


