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
                <a class="nav-link " aria-current="page" href="/" data-bs-toggle="modal" data-bs-target="#navigationMenu">
                  <i class="bi bi-list"></i>
                </a>
              </div>
              <div class="modal fade" id="navigationMenu" tabindex="-1" aria-labelledby="navigationMenu" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen ">
                  <div class="modal-content bg-light bg-gradient text-white">
                    <div class="modal-body">
                      <button type="button" class=" nav-link btn-lg btn " data-bs-dismiss="modal" aria-label="Close">
                        <i class="bi bi-x-square-fill"></i>
                      </button>

                    <div className="container ">
                      <h2 className="text-center text-wrap nav_email col">heyshrav@gmail.com</h2>
                    </div>

                    </div>

                  </div>
                </div>
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
            <div className="col-lg-4 col-md-12 d-flex justify-content-center ">
              <div className="card sub_section2">
                <div className="d-flex align-items-center">
                  <h3 className="pb-1 me-auto">About</h3>
                  <a class="btn btn-dark btn-sm visible-sm" data-bs-toggle="collapse" href="#collapseAbout" role="button" aria-expanded="true" aria-controls="collapseAbout">
                    <i class="fas fa-caret-down"></i>
                  </a>
                </div>
                <div className="collapse pt-2 show" id="collapseAbout">
                  <p className=" text-break">
                    I am a 21 years old Senior Year Engineering Student currently living in Bangalore.I am Highly Passionate about creating meaningful and useful design experiences. My interest in new Design Technologies allows me to stay connected with the practicalities of design.</p>
                  <span>12.9075723N . 77.5201119° E</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center">
              <div className="card sub_section2">
                <div className="d-flex align-items-center">
                  <h3 className=" me-auto">Major Skills</h3>
                  <a class="btn btn-dark btn-sm visible-sm " data-bs-toggle="collapse" href="#collapseSkills" role="button" aria-expanded="true" aria-controls="collapseSkills">
                    <i class="fas fa-caret-down"></i>
                  </a>
                </div>
                <div className="collapse container-fluid show pt-2" id="collapseSkills">

                  <div className="major_skills_sec row">
                    <div className='col-6 major_skills text-center'>
                      <img src="https://via.placeholder.com/100/000000/FFFFFF/?text=UI " class="img-thumbnail" alt="S" />
                      <p className="pt-2"> User Interface </p>
                    </div>
                    <div className='col-6 major_skills text-center'>
                      <img src="https://via.placeholder.com/100/000000/FFFFFF/?text=WF " class="img-thumbnail" alt="S" />
                      <p className="pt-2"> Wireframing</p>
                    </div>
                    <div className='col-6 major_skills text-center'>
                      <img src="https://via.placeholder.com/100/000000/FFFFFF/?text=Click " class="img-thumbnail" alt="S" />
                      <p className="pt-2"> Photography </p>
                    </div>
                    <div className='col-6 major_skills text-center'>
                      <img src="https://via.placeholder.com/100/000000/FFFFFF/?text=Logo " class="img-thumbnail" alt="S" />
                      <p className="pt-2"> Brand Identity </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center">
              <div className="card sub_section2">
                <div className="d-flex align-items-center">
                  <h3 className=" me-auto">Education</h3>
                  <a class="btn btn-dark btn-sm visible-sm " data-bs-toggle="collapse" href="#collapseEdu" role="button" aria-expanded="true" aria-controls="collapseEdu">
                    <i class="fas fa-caret-down"></i>
                  </a>
                </div>
                <div className="collapse show pt-3" id="collapseEdu">
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
            </div>

          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          <div className="row">hello</div>

        </div>
      </section>
    </div >
  );
}

export default Home;
