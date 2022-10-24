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
            </div>
        </div>
    </div>
</template>

<script>
import { lang } from "../data/lang.js";

export default{
    name : "OglasPreview",
    props: [
        'mojOglas'
    ],
    data(){
        return{
            lang
        }
    }
}
</script>



