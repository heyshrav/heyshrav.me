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
            <img src="/assets/images/hero_img_2.png" alt="img" className="img-fluid " width="180px" />

            <div className="hero_text">
              <span>Hey, I'm Shravan</span>
              <div className="text-center text-wrap">
                Building Websites, Brands and User Experience.
              </div>
              <div className="hero_info text-center">a <b>Designer</b> and <b>Frontend Developer</b> in Bangalore.</div>
            </div>
            <div className="hero_button container">
              <a href="/" className="btn" role="button">Connect with me</a>
            </div>
            <div className="hero_scroll">
              <div className="scroll mx-auto"><a href="#section2">scroll</a></div>
            </div>
          </div>
        </div>

      </section>

      <section id="section2">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card sub_section2">
                <div>
                  <h3 className="pb-1">About</h3>
                </div>
                <div>
                  <p className="text-muted text-break">I am a UI/UX Designer and Front-end Developer. I have been doing freelance Graphic Designing from past 2 years and also been working on web designing.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card sub_section2">
                <div>
                  <h3 className="pb-1">Education</h3>
                </div>
                <div className="education_sec">
                  <div>
                    <h5>Global Academy of Technology</h5><span>(2017-2021)</span>
                  </div>
                  <div>
                    Bachelor's degree, Computer Science
                  </div>
                  <hr className="w-50" />
                </div>
                <div className="education_sec">
                  <div>
                    <h5>Maharishi Vidya Mandir, Noida</h5><span>(2004-2017)</span>
                  </div>
                  <div>
                    School, PCM + Information Practices
                  </div>

                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card sub_section2">
                <div>
                  <h3 className="pb-1">Skills</h3>
                </div>

                <div className="skill_sec">
                  <span> <i class="fab fa-html5    "></i> HTML5</span>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill_sec">
                  <span> <i class="fab fa-css3" aria-hidden="true"></i> CSS3 </span>
                  <div class="progress">

                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill_sec">
                  <span>Bootstrap</span>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill_sec">
                  <span> <i class="fab fa-react"></i> React</span>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          #section3
        </div>
      </section>
    </div >
  );
}

export default Home;
