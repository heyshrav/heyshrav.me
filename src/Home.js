import React from "react";

function Home() {
  return (
    <div>

      <div class="container">
        <nav class="topNav navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="assets/logo_brand.svg" alt="" width="40" class="d-inline-block align-bottom" />
              <span >heyshrav.</span>
            </a>
            <div class="justify-content-end">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div class="navbar-nav ">

                  <a class="nav-link active" aria-current="page" href="/"> <i className="fab fa-behance"></i> <span>Behance</span></a>
                  <a class="nav-link" href="/"> <i className="fab fa-linkedin "></i> <span>LinkedIn</span></a>
                  <a class="nav-link" href="/">  <i class="fab fa-instagram  "></i> <span>Instagram</span></a>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <section className="hero_section">
        <div className="container">
          <div className="text-center">
            <img src="/assets/shravanbhat.jpg" alt="img" className="img-fluid " width="150px" />

            <div className="hero_text">
              <span>Hi, I'm Shravan!  </span>
              <div className="text-center text-wrap">
                Building Websites, Brands and User Experience.
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
