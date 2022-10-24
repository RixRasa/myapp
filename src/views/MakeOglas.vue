<template>

<div class="breadcrums">
        <router-link to='/makeoglas' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Dodaj Oglas</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Post Ads</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

    <div class="container-fluid pt-5">
        <div class="container">
            <div v-if="lang.value == 'srb'" class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Oglas</h6>
                <h1 class="display-5 text-uppercase mb-0">Ostavite oglas vaseg izgubljenog ljubimca</h1>
            </div>
            <div v-if="lang.value == 'eng'" class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Ad</h6>
                <h1 class="display-5 text-uppercase mb-0">Post an ad about your lost pet</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-7 col-sm-12">
                    <form>
                        <div class="row g-3">
                            <div class="col-12">
                                <input required class="form-control bg-light border-0 px-4" placeholder="Ime Ljubimca/Name of Pet" style="height: 55px;" v-model="ime">
                            </div>
                            <div class="col-12">
                                <input required class="form-control bg-light border-0 px-4" placeholder="Kontakt/Contact" style="height: 55px;" v-model="kontakt">
                            </div>
                            <div class="col-12">
                                <input required type="text" class="form-control bg-light border-0 px-4" placeholder="Naslov/Title" style="height: 55px;" v-model="naslov">
                            </div>
                            <div class="col-12">
                                <textarea required class="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Tekst/Text" v-model="tekst"></textarea>
                            </div>
                            <div v-if="lang.value == 'srb'" class="col-12">
                                <button @click='addOglas()' class="btn btn-primary w-100 py-3" type="submit">Objavi</button>
                            </div>
                            <div v-if="lang.value == 'eng'" class="col-12">
                                <button @click='addOglas()' class="btn btn-primary w-100 py-3" type="submit">Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <br><br>
</template>

<style scoped>

</style>

<script>
import allOglasi from '../data/oglasi.js'
import { lang } from "../data/lang.js";

export default{
    name : "MakeOglas",
    data(){
        return{
            kontakt:'',
            naslov:'',
            tekst:'',
            ime:'',
            oglasi:[],
            lang,
        }
    },
    methods:{
        addOglas(){
            if(localStorage.getItem("CurrentUser") == null){
                alert("Morate biti ulogovani");
                return;
            }
            var today = new Date();
            var dan = today.getDay();
            var mesec = today.getMonth();
            var godina = today.getFullYear();
            var datum = dan + "-" + mesec + "-" + godina;
            var username = JSON.parse(localStorage.getItem("CurrentUser"));
            this.oglasi.push({'naziv':this.ime, 'naslov':this.naslov,'opis':this.tekst,'kontakt':this.kontakt,'datum':datum,'username':username})
            localStorage.setItem("allOglasi",JSON.stringify(this.oglasi))


        }
    },
    created(){
        if(localStorage.getItem('allOglasi')==null){
                localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
        }
        this.oglasi=JSON.parse(localStorage.getItem("allOglasi"))
    }

}
</script>
