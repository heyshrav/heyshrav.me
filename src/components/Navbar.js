import React from 'react' 
export default function Navbar() { 
    return (
        <div className="container py-4 pb-1 bg-light-primary d-none d-sm-block navbar__wrap">

            <nav class="navbar mx-3 navbar-light">
                <div className="container-fluid">
                    <span className="">
                        <a href="/" className='navbar-brand fw-bold' >bs.</a>
                    </span>
                    <ul class="nav ">
                        <li class="nav-item">
                            <a class="nav-link fw-bold disabled" href="/work">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" href="/assets/BS_Shravan_Resume.pdf">Download Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled fw-bold" href="#contact">Contact</a>
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


