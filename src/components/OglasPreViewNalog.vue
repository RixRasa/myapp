<template>
    <div class="blog-item  bg-light border">  
        <div class=" h-100 w-100 d-flex flex-column justify-content-center">
            <div class="p-4">
                <div class="d-flex mb-3">
                    <small class="me-3"><i class="bi bi-bookmarks me-2"></i>nestao</small>
                    <small><i class="bi bi-calendar-date me-2"></i>{{mojOglas.datum}}</small>
                </div>
                <h5 class="text-uppercase mb-3">{{mojOglas.naslov}}</h5>
                <p>{{mojOglas.opis}}</p>
                <router-link v-if="lang.value == 'srb'" :to='/oglasview/+mojOglas.naziv' class="text-primary text-uppercase" >Procitaj Vise<i class="bi bi-chevron-right"></i></router-link>
                <router-link v-if="lang.value == 'eng'" :to='/oglasview/+mojOglas.naziv' class="text-primary text-uppercase" >Read more<i class="bi bi-chevron-right"></i></router-link>
                <button v-if="lang.value == 'srb'" class="btn btn-danger" @click='Delete(mojOglas.naziv)' value = {{mojOglas.naziv}}>Obrisi</button>
                <button  v-if="lang.value == 'eng'" class="btn btn-danger" @click='Delete(mojOglas.naziv)' value = {{mojOglas.naziv}}>Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { lang } from "../data/lang.js";

export default{
    name : "OglasPreviewNalog",
    props: [
        'mojOglas'
    ],
    data(){
        return{
            lang,
            allOglasi:[],
            
        }
    },
    created(){
        this.allOglasi = JSON.parse(localStorage.getItem('allOglasi'));
    
    },
    methods:{
        Delete(e){
            //var naziv = e.target.value;
            alert(e);
            var naziv = e;
            var allOglasiNew = this.allOglasi.filter(oglas => oglas.naziv != naziv);
            localStorage.setItem('allOglasi',JSON.stringify(allOglasiNew));
            window.location.reload();
        }   
    }
    
}
</script>