<template>
  <div class="homepage">

    <button type="button" class="back-to-top-btn" @click="backToTop()">
      <img src="../assets/images/up-arrow.png" alt="up-arrow">
    </button>

    <!--Hero section-->
    <div class="hero-section">

      <!--Intro text-->
      <!--      <div class="intro_text">
              <svg viewBox="0 0 1320 300">
                <text x="50%" Y="50%" text-anchor="middle">
                  HI
                </text>
              </svg>
            </div>-->


      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="hero-sub" data-aos="fade-up" data-aos-duration="1000">HI I am Gerold</div>
            <div class="hero-title fw-bold" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Web
              Developer +<br>UX Designer
            </div>

            <div class="profile text-center d-md-none d-block my-5" data-aos="fade-up" data-aos-delay="600"
                 data-aos-duration="1000">
              <img class="img-fluid" src="../assets/images/me.png" alt="me">
            </div>

            <p class="fs-5" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">I break down complex user
              experinece problems to create integritiy focussed solutions that
              connect billions of people</p>

            <!--Buttons-->
            <div class="mt-5 gap-4 d-flex align-items-lg-center align-items-start flex-lg-row flex-column">

              <a href="javascript:void(0)" class="btn btn-outline-theme rounded-pill px-4 py-3" data-aos="fade-up"
                 data-aos-delay="500" data-aos-duration="1000">
                Download CV
                <i class="fa-solid fa-download"></i>
              </a>

              <!--Socials-->
              <ul class="list-unstyled d-flex align-items-center m-0 p-0 socials gap-3">
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <a href="javascript:void(0)" class="rounded-circle">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                  <a href="javascript:void(0)" class="rounded-circle">
                    <i class="fa-brands fa-dribbble"></i>
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <a href="javascript:void(0)" class="rounded-circle">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                  <a href="javascript:void(0)" class="rounded-circle">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-md-6">
            <div class="profile text-center d-md-block d-none my-4" data-aos="fade-up" data-aos-delay="500"
                 data-aos-duration="1500">
              <img class="img-fluid" src="../assets/images/me.png" alt="me">
            </div>
          </div>
        </div>

        <!--Counter area-->
        <div class="counter-area">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div
                  class="counter-item gap-sm-3 gap-2 mb-sm-0 mb-3 d-flex flex-column flex-sm-row flex-wrap align-items-center lh-base"
                  data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <div class="number">14</div>
                <div class="text">Years of <br> Experience</div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div
                  class="counter-item gap-sm-3 gap-2 mb-sm-0 mb-3 d-flex flex-column flex-sm-row flex-wrap align-items-center lh-base"
                  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                <div class="number">50+</div>
                <div class="text">Projects <br> Completed</div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div
                  class="counter-item gap-sm-3 gap-2 mb-sm-0 mb-3 d-flex flex-column flex-sm-row flex-wrap align-items-center lh-base"
                  data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                <div class="number">1.5k</div>
                <div class="text">Happy <br> Clients</div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div
                  class="counter-item gap-sm-3 gap-2 mb-sm-0 mb-3 d-flex flex-column flex-sm-row flex-wrap align-items-center lh-base"
                  data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <div class="number">14</div>
                <div class="text">Years of <br> Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Service section-->
    <section class="service-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="section-header mx-auto">
              <h2 class="section-title" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">My Quality
                Services</h2>
              <p class="mt-3" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">We put your ideas and
                thus your wishes in the form of a unique web project that inspires
                you and you
                customers.</p>
            </div>

          </div>
        </div>

        <!--Service widgets-->
        <div class="row">
          <div class="col-12">
            <div class="services-widgets">

              <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"
                   class="services-item border-bottom d-flex align-items-md-center align-items-start  flex-md-row flex-column">
                <div class="left-box d-flex flex-wrap align-items-center">
                  <span class="number">01</span>
                  <h3 class="service-title">Branding Design</h3>
                </div>
                <div class="right-box">
                  <p class="mb-0">I break down complex user experience problems to create integrity focussed
                    solutions
                    that connect billions of people</p>
                </div>
                <div class="icon">
                  <img class="width-20 height-20 img-fluid" src="../assets/images/up-right-arrow.png" alt="">
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"
                   class="services-item border-bottom d-flex align-items-md-center align-items-start  flex-md-row flex-column">
                <div class="left-box d-flex flex-wrap align-items-center">
                  <span class="number">02</span>
                  <h3 class="service-title">Web Design</h3>
                </div>
                <div class="right-box">
                  <p class="mb-0">I break down complex user experience problems to create integrity focussed
                    solutions
                    that connect billions of people</p>
                </div>
                <div class="icon">
                  <img class="width-20 height-20 img-fluid" src="../assets/images/up-right-arrow.png" alt="">
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"
                   class="services-item border-bottom d-flex align-items-md-center align-items-start  flex-md-row flex-column">
                <div class="left-box d-flex flex-wrap align-items-center">
                  <span class="number">03</span>
                  <h3 class="service-title">UI/UX Design</h3>
                </div>
                <div class="right-box">
                  <p class="mb-0">I break down complex user experience problems to create integrity focussed
                    solutions
                    that connect billions of people</p>
                </div>
                <div class="icon">
                  <img class="width-20 height-20 img-fluid" src="../assets/images/up-right-arrow.png" alt="">
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"
                   class="services-item border-bottom d-flex align-items-md-center align-items-start  flex-md-row flex-column">
                <div class="left-box d-flex flex-wrap align-items-center">
                  <span class="number">04</span>
                  <h3 class="service-title">Graphics Design</h3>
                </div>
                <div class="right-box">
                  <p class="mb-0">I break down complex user experience problems to create integrity focussed
                    solutions
                    that connect billions of people</p>
                </div>
                <div class="icon">
                  <img class="width-20 height-20 img-fluid" src="../assets/images/up-right-arrow.png" alt="">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Works section-->
    <section class="works-section" id="works">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="section-header mx-auto">
              <h2 class="section-title" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">My Recent
                Works</h2>
              <p class="mt-3" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">We put your ideas and
                thus your wishes in the form of a unique web project that inspires
                you and you customers.</p>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center mb-5">
            <div class="work-tab-controller rounded-pill px-sm-2" data-aos="fade-up" data-aos-delay="700"
                 data-aos-duration="1000">
              <button type="button" class="btn rounded-pill px-sm-4 px-3 height-50" data-filter="all">All</button>
              <button type="button" class="btn rounded-pill px-sm-4 px-3 height-50" data-filter=".category-a">UI/UX
              </button>
              <button type="button" class="btn rounded-pill px-sm-4 px-3 height-50" data-filter=".category-b">Branding
              </button>
              <button type="button" class="btn rounded-pill px-sm-4 px-3 height-50" data-filter=".category-c">Apps
              </button>
            </div>
          </div>

          <!--Portfolio tabs-->
          <div class="col-12" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
            <div class="mix-container d-grid ">

              <div class="mix category-a" data-order="1">
                <div class="portfolio-item pt-4 px-4 rounded-4">
                  <div class="image-box w-100 h-100">
                    <img class="img-fluid" src="../assets/images/work-1.jpg" alt="work-1">
                  </div>
                  <div class="content-box p-4 rounded-5">
                    <h3 class="fw-bold">Deloitte</h3>
                    <p class="mb-0">Project was about precision and information.</p>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>

              <div class="mix category-b" data-order="2">
                <div class="portfolio-item pt-4 px-4 rounded-4">
                  <div class="image-box w-100 h-100">
                    <img class="img-fluid" src="../assets/images/work-2.jpg" alt="work-2">
                  </div>
                  <div class="content-box p-4 rounded-5">
                    <h3 class="fw-bold">New Age</h3>
                    <p class="mb-0">Project was about precision and information.</p>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>
              <div class="mix category-b category-c" data-order="3">
                <div class="portfolio-item pt-4 px-4 rounded-4">
                  <div class="image-box w-100 h-100">
                    <img class="img-fluid" src="../assets/images/work-3.jpg" alt="work-3">
                  </div>
                  <div class="content-box p-4 rounded-5">
                    <h3 class="fw-bold">Sebastian</h3>
                    <p class="mb-0">Project was about precision and information.</p>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>
              <div class="mix category-a category-d" data-order="4">
                <div class="portfolio-item pt-4 px-4 rounded-4">
                  <div class="image-box w-100 h-100">
                    <img class="img-fluid" src="../assets/images/work-4.jpg" alt="work-4">
                  </div>
                  <div class="content-box p-4 rounded-5">
                    <h3 class="fw-bold">Monix</h3>
                    <p class="mb-0">Project was about precision and information.</p>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!--Resume section -->
    <section class="resume-section" id="resume">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-header" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <h2 class="section-title"><i class="fa-solid fa-graduation-cap me-3"></i>My Experience</h2>
            </div>


            <div class="resume-widgets">
              <div class="resume-item" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500">
                <div class="time">2024 - Present</div>
                <h3 class="resume-title">Lead developer</h3>
                <div class="institute">Blockdots, London</div>
              </div>

              <div class="resume-item" data-aos="fade-right" data-aos-delay="700" data-aos-duration="1500">
                <div class="time">2021 - 2022</div>
                <h3 class="resume-title">Full stack developer</h3>
                <div class="institute">Parsons, The New School</div>
              </div>

              <div class="resume-item" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1500">
                <div class="time">2020 - 2021</div>
                <h3 class="resume-title">Ui Designer</h3>
                <div class="institute">House of Life, Leeds</div>
              </div>

              <div class="resume-item" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1500">
                <div class="time">2024 - Present</div>
                <h3 class="resume-title">JUNIOR GRAPHICS DESIGNER</h3>
                <div class="institute">Theme Junction, Bursa</div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="section-header" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <h2 class="section-title"><i class="fa-solid fa-graduation-cap me-3"></i>My Education</h2>
            </div>

            <div class="resume-widgets">
              <div class="resume-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1500">
                <div class="time">2020 - 2023</div>
                <h3 class="resume-title">PROGRAMMING COURSE</h3>
                <div class="institute">Harverd University</div>
              </div>

              <div class="resume-item" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1500">
                <div class="time">2016 - 2020</div>
                <h3 class="resume-title">GRAPHIC DESIGN COURSE</h3>
                <div class="institute">University of Denmark</div>
              </div>

              <div class="resume-item" data-aos="fade-left" data-aos-delay="800" data-aos-duration="1500">
                <div class="time">2012 - 2015</div>
                <h3 class="resume-title">WEB DESIGN COURSE</h3>
                <div class="institute">University of California</div>
              </div>

              <div class="resume-item" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1500">
                <div class="time">2011 - 2012</div>
                <h3 class="resume-title">DESIGN & TECHNOLOGY</h3>
                <div class="institute">Parsons, The New School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Skills sections-->
    <section class="skills-section" id="skills">
      <div class="container">
        <div class="section-header mx-auto text-center">
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">My Skills</h2>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">We put your ideas and thus your wishes in
            the form of a unique web project that inspires you and you
            customers.</p>
        </div>

        <div class="skills-widget d-flex justify-content-center gap-4 align-items-center flex-wrap ">
          <div class="skill-item" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
            <div class="skill-inner">
              <div class="icon-box">
                <img class="img-fluid" src="../assets/images/figma.svg" alt="figma">
              </div>
              <div class="number">92%</div>

            </div>
            <p class="text-theme fw-normal">Figma</p>
          </div>

          <div class="skill-item" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div class="skill-inner">
              <div class="icon-box">
                <img class="img-fluid" src="../assets/images/sketch.svg" alt="sketch">
              </div>
              <div class="number">80%</div>

            </div>
            <p class="text-theme fw-normal">Sketch</p>
          </div>

          <div class="skill-item" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
            <div class="skill-inner">
              <div class="icon-box">
                <img class="img-fluid" src="../assets/images/xd.svg" alt="xd">
              </div>
              <div class="number">92%</div>

            </div>
            <p class="text-theme fw-normal">XD</p>
          </div>

          <div class="skill-item" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
            <div class="skill-inner">
              <div class="icon-box">
                <img class="img-fluid" src="../assets/images/react.svg" alt="react">
              </div>
              <div class="number">89%</div>

            </div>
            <p class="text-theme fw-normal">React</p>
          </div>

          <div class="skill-item" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000">
            <div class="skill-inner">
              <div class="icon-box">
                <img class="img-fluid" src="../assets/images/js.svg" alt="js">
              </div>
              <div class="number">93%</div>

            </div>
            <p class="text-theme fw-normal">JavaScript</p>
          </div>
        </div>
      </div>
    </section>

    <!--Testimonial section-->
    <section class="testimonial-section" id="testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-5">
            <div class="section-header">
              <h2 class="section-title" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">My Client's
                Stories</h2>
              <p data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">Empowering people in new a digital
                journey with my super services</p>
            </div>
          </div>

          <!--Testimonial slider-->
          <div class="col-lg-6 col-md-7" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">

            <Splide class="testimonial-slider"
                    :options="{ rewind: true,perPage:2,arrows:false,gap:20, breakpoints:{576:{perPage:1},767:{perPage:2},1199:{perPage:1}} }"
                    aria-label="My Favorite Images">
              <SplideSlide>
                <div class="each-testimonial">
                  <div class="testimonial-header top-area d-flex flex-wrap justify-content-between">
                    <div class="logo-box">
                      <img class="img-fluid" src="../assets/images/testimonial-logo-1.png" alt="logo-1">
                    </div>
                    <div class="image-box">
                      <img class="img-fluid" src="../assets/images/testimonial-user-1.png" alt="user1">
                    </div>

                  </div>
                  <div class="icons mb-4">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                  </div>
                  <q>Taylor is a professional Designer he really helps my business by
                    providing value to my business.</q>

                  <h4 class="name mt-5">Brandon Fraser</h4>
                  <p class="small mb-0">Senior Software Dev, Cosmic Sport</p>
                </div>

              </SplideSlide>
              <SplideSlide>
                <div class="each-testimonial">
                  <div class="testimonial-header top-area d-flex flex-wrap justify-content-between">
                    <div class="logo-box">
                      <img class="img-fluid" src="../assets/images/testimonial-logo-2.png" alt="logo-1">
                    </div>
                    <div class="image-box">
                      <img class="img-fluid" src="../assets/images/testimonial-user-2.png" alt="user1">
                    </div>

                  </div>
                  <div class="icons mb-4">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                  </div>
                  <q>Taylor is a professional Designer he really helps my business by
                    providing value to my business.</q>

                  <h4 class="name mt-5">Brandon Fraser</h4>
                  <p class="small mb-0">Senior Software Dev, Cosmic Sport</p>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="each-testimonial">
                  <div class="testimonial-header top-area d-flex flex-wrap justify-content-between">
                    <div class="logo-box">
                      <img class="img-fluid" src="../assets/images/testimonial-logo-1.png" alt="logo-1">
                    </div>
                    <div class="image-box">
                      <img class="img-fluid" src="../assets/images/testimonial-user-1.png" alt="user1">
                    </div>

                  </div>
                  <div class="icons mb-4">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                    <img src="../assets/images/chevron-up-left.svg" alt="chevron up left">
                  </div>
                  <q>Taylor is a professional Designer he really helps my business by
                    providing value to my business.</q>

                  <h4 class="name mt-5">Brandon Fraser</h4>
                  <p class="small mb-0">Senior Software Dev, Cosmic Sport</p>
                </div>
              </SplideSlide>
            </Splide>


          </div>
        </div>

      </div>
    </section>

    <!--Contact us section-->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 order-2 order-lg-1">

            <!--Contact form-->
            <div class="contact-form" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div class="section-header mb-3">
                <h2 class="section-title">Let’s work together!</h2>
                <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
              </div>
              <form action="">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text" class="form-control height-50 shadow-none" placeholder="First name">
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text" class="form-control height-50 shadow-none" placeholder="Last name">
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="email" class="form-control height-50 shadow-none" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text" class="form-control height-50 shadow-none" placeholder="Phone">
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="form-group">
                      <select name="" id="" class="form-select height-50 shadow-none">
                        <option value="" selected disabled>Choose a Service</option>
                        <option value="">Branding Design</option>
                        <option value="">Web Design</option>
                        <option value="">UI/UX Design</option>
                        <option value="">App Design</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="form-group">
                        <textarea placeholder="Message" name="" id="" cols="30" rows="7"
                                  class="form-control shadow-none"></textarea>
                    </div>
                  </div>

                  <div class="col-12">
                    <button type="button" class="btn btn-theme-grad rounded-pill px-5 height-50">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

          </div>

          <!--Contact info list-->
          <div class="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
            <ul class="contact-list list-unstyled m-0 p-0">
              <li class="d-flex flex-wrap align-items-center position-relative" data-aos="fade-up" data-aos-delay="500"
                  data-aos-duration="1000">
                <div class="icon-box"><i class="fa-solid fa-phone-volume"></i></div>
                <div class="text-box">
                  <p>Phone</p>
                  <a href="tel:0123456789">+01 123 654 8096</a>
                </div>
              </li>

              <li class="d-flex flex-wrap align-items-center position-relative" data-aos="fade-up" data-aos-delay="700"
                  data-aos-duration="1000">
                <div class="icon-box"><i class="fa-regular fa-envelope"></i></div>
                <div class="text-box">
                  <p>Email</p>
                  <a href="mailto:0123456789">user@gmail.com</a>
                </div>
              </li>

              <li class="d-flex flex-wrap align-items-center position-relative" data-aos="fade-up" data-aos-delay="900"
                  data-aos-duration="1000">
                <div class="icon-box"><i class="fa-solid fa-map-pin"></i></div>
                <div class="text-box">
                  <p>Address</p>
                  <a href="javascript:void(0)">Warn Park Street Pine,
                    FL 33157, New York</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import mixitup from 'mixitup';
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {}
  },
  mounted() {
    mixitup('.mix-container');
    window.addEventListener('scroll', this.activeFixedBtn);
  },
  methods: {
    /*Function to active the fixed btn*/
    activeFixedBtn() {
      let btn = document.querySelector('.back-to-top-btn')
      if (window.scrollY > 200) {
        btn.classList.add('active')
      } else {
        btn.classList.remove('active')
      }
    },

    /*Function to get back to top*/
    backToTop() {
      console.log('hey', window.scrollY)

      window.scrollTo(0, 0);
    }
  }
}
</script>
