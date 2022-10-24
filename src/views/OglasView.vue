<template>

<div class="breadcrums">
        <router-link to='/showoglasi' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Izgubljeni ljubimci</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Lost pets</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link :to='/oglasview/+oglas.naziv' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">{{ oglas.naslov }}</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">{{ oglas.naslov }}</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

    <div class="container-fluid py-5">
      <div class="container">
          <div class="row ">
              <div class="col-lg-6 col-sm-12  me-5" style="">
                <div class="row">
                    <div class='col-sm-12 bg-light ms-2 border' id='oglas' ref='content'>
                        <div class=" border-5 border-primary  mb-5">
                            <div class="d-flex justify-content-between">
                                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Oglas Nestanka</h6>
                                <h6 v-if="lang.value == 'eng'" class="text-primary text-uppercase">Ad of disappearance</h6>
                                <small><i class="bi bi-calendar-date me-2"></i>{{oglas.datum}}</small>
                            </div><br>  
                            <h3 class="display-5 text-uppercase mb-0">{{oglas.naslov}}</h3>
                        </div>
                        <div class="bg-light" style="width:70%">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                    <p class="mb-0">{{oglas.opis}}</p>
                                </div>
                            </div>
                        </div>
                        <br><br>
                        <h5 class="text-body mb-4">{{oglas.kontakt}}</h5>
                        <!--<button v-if="lang.value == 'eng'" class="btn" @click='downloadPDF()'>Download PDF</button>-->
                       <!--<button v-if="lang.value == 'srb'" class="btn" @click='downloadPDF()'>Preuzmi PDF</button> -->
                    </div>
                    <br class='ms-2'>
                    <div class="col-sm-12 mt-3">
                        <h3 v-if="lang.value == 'srb'">Ostavite Komentar</h3>
                        <h3 v-if="lang.value == 'eng'">Leave a comment</h3>
                        <form>
                            <div class="row g-3">
                                <div class="col-12">
                                    <input required class="form-control bg-light border-0 px-4" placeholder="Ime/Name" style="height: 55px;" v-model="ime">
                                </div>
                                <div class="col-12">
                                    <input required type="email" class="form-control bg-light border-0 px-4" placeholder="Email" style="height: 55px;" v-model="email">
                                </div>
                                <div class="col-12">
                                    <textarea required class="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Tekst/Text" v-model="tekst"></textarea>
                                </div>
                                <div v-if="lang.value == 'srb'" class="col-12">
                                    <button @click='addKomentar()' class="btn btn-primary w-100 py-3" type="submit">Ostavite Komentar</button>
                                </div>
                                <div v-if="lang.value == 'eng'" class="col-12">
                                    <button @click='addKomentar()' class="btn btn-primary w-100 py-3" type="submit">Leave a comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
              
              <div class="col-lg-5 col-sm-12" >
                    <h3 v-if="lang.value == 'srb'" class=''>Komentari</h3>
                    <h3 v-if="lang.value == 'eng'" class=''>Comments</h3>
                    <hr>
                    <div class='mb-3' v-for='komentar in komentari' :key="komentar.ime" >
                        <KomentarPreview :mojKomentar='komentar'></KomentarPreview>
                    </div>
                </div>
            </div>
      </div>
  </div>

</template>

<script>
import KomentarPreview from '../components/KomentarPreview.vue'
import { lang } from "../data/lang.js";
import allOglasi from '../data/oglasi.js'
//import jsPDF from 'jspdf'
//import html2canvas from "html2canvas"


export default{
  components: { KomentarPreview },
    name : "OglasView",
    compoments:{KomentarPreview},
    data(){
        return{
            oglasi:[],
            oglas:{},
            komentari:[],
            ime: '',
            tekst: '',
            email: '',
            lang,
            komentariCurUser:[],
        }
    },
    created(){
        //Oglas koji se prikazuje
        var naziv = String(this.$route.params.naziv)
       
        if(localStorage.getItem("allOglasi")==null){
            localStorage.setItem('allOglasi',JSON.stringify(allOglasi));
        }
        this.oglasi = JSON.parse(localStorage.getItem('allOglasi'));
        this.oglas = this.oglasi.find(oglas=>oglas.naziv==naziv);

        //Komentari
        if(localStorage.getItem(this.oglas.naziv)==null){
            this.komentari = []
        }
        else{
            this.komentari = JSON.parse(localStorage.getItem(this.oglas.naziv));
        }

        //Trenutni Korisnik i njegovi komentari
        var curUser = JSON.parse(localStorage.getItem("CurrentUser"))

        if(localStorage.getItem(curUser) == null){
            this.komentariCurUser = []
        }
        else{
            this.komentariCurUser = JSON.parse(localStorage.getItem(curUser));
        }
        //
        
    },
    methods:{
        addKomentar(){
            if(localStorage.getItem("CurrentUser") == null){
                alert("Morate biti ulogovani");
                return;
            }
            if(this.ime == '' || this.tekst == '' || this.email == ''){return;}

            var user = JSON.parse(localStorage.getItem("CurrentUser"));

            this.komentari.push({'ime':this.ime,'opis':this.tekst,'email':this.email,'username':user})
            localStorage.setItem(this.oglas.naziv,JSON.stringify(this.komentari))

            this.komentariCurUser.push({'ime':this.ime,'opis':this.tekst,'email':this.email,'username':user})
            localStorage.setItem(user,JSON.stringify(this.komentariCurUser))
        },
        // downloadPDF() {
            //var doc = new jsPDF("p", "mm", [800, 2200]); //portrait landscape height, width
            //doc.setFontSize(10);
           // let oglas = document.getElementById("oglas");
           // doc.html(oglas, {
              //  callback: function (doc) {
               // doc.save();
               // },
              //  width: 400,
           // });
    //},
    }

}
</script>
