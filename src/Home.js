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

              <div class="navbar-nav ">
                <a class="nav-link" aria-current="page" href="/"> <span><i class="fas fa-paper-plane"></i></span>reach@heyshrav.me</a>
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
              <span>Hey, I'm Shravan</span>
              <div className="text-center text-wrap">
                Building Websites, Brands and User Experience. blah blah blah!
              </div>
              <div className="hero_info text-center">a <b>Designer</b> and <b>Frontend Developer</b> in Bangalore.</div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
