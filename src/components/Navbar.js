import React from 'react'

export default function Navbar() {
    return (
        <div className="fixed-top navbar__wrap">
            <div class="collapse" id="navbarToggle">
                <div class="bg-dark p-4 d-flex flex-column align-items-center justify-content-center">
                    
                <span class="text-muted">Reach directly at</span>
                <a href="#" className="nav-link"><h5 class=" text-muted h1">heyshrav@gmail.com</h5></a>
                </div>
            </div>
            <nav class="navbar d-flex flex-row-reverse  me-2 navbar-light bg-transparent">
                <div class="">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}


