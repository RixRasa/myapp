
<template>

<div class="breadcrums">
        <router-link to='/about' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">O nama</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">About us</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

<div class="container-fluid py-5">
      <div class="container">
          <div class="row gx-5">
              <div class="col-lg-5 col-sm-12 mb-5 mb-lg-0" style="min-height: 500px;">
                  <div class="position-relative h-100">
                      <img class="position-absolute w-100 h-100 rounded" src="about.jpg" style="object-fit: cover;">
                  </div>
              </div>
              <div class="col-lg-7 col-sm-12" style="text-align: center;">
                  <div class="border-start border-5 border-primary ps-5 mb-5">
                      <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">O nama</h6>
                      <h6 v-if="lang.value == 'eng'" class="text-primary text-uppercase">About Us</h6>

                      <h1 class="display-5 text-uppercase mb-0"></h1>
                      <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Srecno mesto za sve zivotinje</h1>
                      <h1 v-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">Happy place for all animals</h1>
                  </div>
                  <br><br><br>

                  <h4 v-if="lang.value == 'srb'" class="text-body mb-4">“Sve dok neko ne zavoli zivotinju, deo njegove duse ostaje neprobudjen” –Anatole France.</h4>
                  <h4 v-if="lang.value == 'eng'" class="text-body mb-4">“Until one has loved an animal, a part of one's soul remains unawakened.” –Anatole France.</h4>
                  <br><br><br>
                  
                  <div class="bg-light p-4">
                        <ul v-if="lang.value == 'srb'" class="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                          <li class="nav-item w-50" role="presentation">
                              <button class="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                  aria-selected="true">Nasa misija</button>
                          </li>
                          <li class="nav-item w-50" role="presentation">
                              <button class="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                  aria-selected="false">Kako pomoci</button>
                          </li>
                      </ul>
                      <ul v-if="lang.value == 'eng'" class="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                          <li class="nav-item w-50" role="presentation">
                              <button class="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                  aria-selected="true">Our Mission</button>
                          </li>
                          <li class="nav-item w-50" role="presentation">
                              <button class="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                  aria-selected="false">How to help</button>
                          </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                          <div v-if="lang.value == 'srb'" class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                              <p class="mb-0">Nasa misija je da svakom izgubljenom ljubimcu nadjemo njegovog vlasnika, i da svakom ostavljenom nadjemo novi dom</p>
                          </div>
                          <div v-if="lang.value == 'eng'" class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                              <p class="mb-0">Our mission is to find its owner for every lost pet, and to find a new home for every abandoned pet</p>
                          </div>

                          <div v-if="lang.value == 'srb'" class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                              <p class="mb-0">Ako vidite ljubimca bez vlasnika u blizini proverite da li je izgubljen ili napusten, pa pozovite nas</p>
                          </div>
                          <div v-if="lang.value == 'eng'" class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                              <p class="mb-0">If you see a pet without an owner nearby, check if it is lost or abandoned, then call us</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <br><br><br>

          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="d-flex align-items-center mb-4">
                <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                <div class="text-start">
                    <h6 class="text-uppercase mb-1">Pozivite nas</h6>
                    <span>+011 345 6789</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                <div class="text-start">
                    <h6 class="text-uppercase mb-1">Email</h6>
                    <span>info@example.com</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                  <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div class="text-start">
                      <h6 class="text-uppercase mb-1">Adresa</h6>
                      <span>123 Street, New York, USA</span>
                  </div>
              </div>
            </div>
            <br><br>
            <div class="col-lg-6 col-sm-12">
              <div class="d-flex flex-column align-items-center">
                  <h4 class="text-uppercase mb-2">Nadjite nas</h4>
                  <iframe class="position-relative w-100"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                      frameborder="0" style="height: 205px; border:0;" allowfullscreen="" aria-hidden="false"
                      tabindex="0"></iframe>
              </div>
            </div>
          </div>

      </div>
  </div>
</template>

<script>
import { lang } from "../data/lang.js";
export default {
    name: "AboutView",
    data() {
        return {
            lang,
        };
    },
};
</script>


