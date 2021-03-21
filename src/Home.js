import React from "react";

function Home() {
  return (
    <div>

      <div class="topNav container">
        <nav class="navbar navbar-expand-lg ">
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
          <div className="row">

            <div className="col">
              <div className="hero_text">Hello, my name's Shravan.<br />I am a UI Designer.</div>
            </div>
            <div className="col d-inline-flex justify-content-end">
              <img src="/assets/shravanbhat.jpg" className="img-fluid" alt="img" />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
