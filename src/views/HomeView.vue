<template>
    
    <div class="breadcrums">
        <router-link to='/' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Pocetna</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Home</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

      <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Aktuelnosti</h6>
                <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Najskorije aktuelnosti sa naseg sajta</h1>
                <h6 v-if="lang.value == 'eng'" class="text-primary text-uppercase">Latest News</h6>
                <h1 v-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">Latest News From Our Site</h1>
            </div>

            <div class="row">
                <div v-for='oglas in oglasi' :key="oglas.naziv" class="col-lg-4 col-md-6 col-sm-12 my-3">
                    <OglasPreview :mojOglas='oglas'></OglasPreview>
                </div>
            </div>
            <br>

            <div class="row">
                <h3 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Istaknuti ljubimci</h3>
                <h3 v-if="lang.value == 'eng'" class="text-primary text-uppercase">Featured pets</h3>
                <div v-for='oglas in mojOglasi' :key="oglas.naziv" class="col-lg-4 col-md-6 col-sm-12 my-3">
                    <OglasPreview :mojOglas='oglas'></OglasPreview>
                </div>
            </div>


            <div class="row g-5">
                <div class="col-lg-6 border">
                    <div class="blog-item">
                        <div class="row g-0 bg-light overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" :src="animals[6].image_path" style="object-fit: cover;">
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                                <div class="p-4">

                                    <h5 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ animals[6].nameS }}</h5>
                                    <h5 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ animals[6].nameE }}</h5>
                                    <br>

                                    <h6 v-if="lang.value == 'srb'">{{ animals[6].descriptionS }}</h6>
                                    <h6 v-else-if="lang.value == 'eng'">{{ animals[6].descriptionE }}</h6>
                                    <br>
                                    <h6 v-if="lang.value == 'srb'">Tezina: {{ animals[6].weight }}</h6>
                                    <h6 v-else-if="lang.value == 'eng'">Weight: {{ animals[6].weight }}</h6>
                                    <h6 v-if="lang.value == 'srb'">Starost: {{ animals[6].age }} y/o</h6>
                                    <h6 v-else-if="lang.value == 'eng'">Age: {{ animals[6].age }} y/o</h6>
                                    
                                    <router-link :to='/animal/+7' class="text-primary text-uppercase">
                                        <text v-if="lang.value == 'srb'">Pogledaj detaljnije</text><i class="bi bi-chevron-right"></i>
                                        <text v-if="lang.value == 'eng'">Read More</text>
                                    </router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 border">
                    <div class="blog-item">
                        <div class="row g-0 bg-light overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" :src="animals[7].image_path" style="object-fit: cover;">
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                                <div class="p-4">

                                    <h5 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ animals[7].nameS }}</h5>
                                    <h5 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ animals[7].nameE }}</h5>
                                    <br>

                                    <h6 v-if="lang.value == 'srb'">{{ animals[7].descriptionS }}</h6>
                                    <h6 v-else-if="lang.value == 'eng'">{{ animals[7].descriptionE }}</h6>
                                    <br>
                                    <h6 v-if="lang.value == 'srb'">Tezina: {{ animals[7].weight }}</h6>
                                    <h6 v-else-if="lang.value == 'eng'">Weight: {{ animals[7].weight }}</h6>
                                    <h6 v-if="lang.value == 'srb'">Starost: {{ animals[7].age }} y/o</h6>
                                    <h6 v-else-if="lang.value == 'eng'">Age: {{ animals[7].age }} y/o</h6>
                                    
                                    <router-link :to='/animal/+8' class="text-primary text-uppercase">
                                        <text v-if="lang.value == 'srb'">Pogledaj detaljnije</text><i class="bi bi-chevron-right"></i>
                                        <text v-if="lang.value == 'eng'">Read More</text>
                                    </router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.breadcrums{
    text-align: center;
    padding-top: 15px;
}
</style>


<script>
import { lang } from "../data/lang.js";
import OglasPreview from '../components/OglasPreview.vue'
import allOglasi from '../data/oglasi.js'
import animals from '../data/animals.js'

export default {
    name: "HomeView",
    data() {
        return {
            lang,
            oglasi:[],
            alloglasi: [],
            animals: animals
        };
    },
    components:{
        OglasPreview
    },
    created(){
        if(localStorage.getItem('allOglasi')==null){
            localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
            this.alloglasi = JSON.parse(localStorage.getItem('allOglasi'));
        }
        else{
            this.alloglasi = JSON.parse(localStorage.getItem('allOglasi'));
        }

        let poglasi = this.alloglasi;
        let min_index;
        for(let i=0; i<poglasi.length; i++){
            min_index = i; 
            for(let j=i+1; j<poglasi.length; j++){

                var datum1 = poglasi[min_index].datum.split('-');
                var god1 = parseInt(datum1[2]);
                var mesec1 = parseInt(datum1[1]) - 1;
                var dan1 = parseInt(datum1[0]);
                var Date_min_index = new Date(god1, mesec1, dan1);

                var datum2 = poglasi[j].datum.split('-');
                var god2 = parseInt(datum2[2]);
                var mesec2 = parseInt(datum2[1]) - 1;
                var dan2 = parseInt(datum2[0]);
                var Date_j = new Date(god2, mesec2, dan2);

                if(Date_j.getTime() > Date_min_index.getTime())
                    min_index = j;
            }
            let p = poglasi[min_index];
            poglasi[min_index] = poglasi[i];
            poglasi[i] = p;
        }
        
        for(let i=0; i<3; i++){
            this.oglasi.push(poglasi[i]);
        }
    }
};

</script>


