<template>
  <div class="header container">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid p-0 bg-theme">
        <a class="navbar-brand ps-3 pb-4" href="javascript:void(0)">
          <img class="me-4" src="../../assets/images/logo-dark.png" alt="logo">
          <span class="d-lg-inline d-none">mail@gerolddesign.com</span>
        </a>

        <a class="btn btn-theme-grad fw-bold rounded-pill px-4 d-lg-none" href="javascript:void(0)">Hire me!</a>

        <button class="navbar-toggler border-0 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#works">Works</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#resume">Resume</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="testimonial">Testimonials</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contact">Contact</a>
            </li>


            <li class="nav-item ms-4 d-lg-inline d-none">
              <a class="btn btn-theme-grad fw-bold rounded-pill px-4" href="javascript:void(0)">Hire me!</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>
