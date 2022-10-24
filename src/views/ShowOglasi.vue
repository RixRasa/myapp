<template>

<div class="breadcrums">
        <router-link to='/showoglasi' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Izgubljeni ljubimci</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Lost pets</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

    <div class="container-fluid py-5">
        <div class="container">
            <div v-if="lang.value == 'srb'" class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Oglasi</h6>
                <h1 class="display-5 text-uppercase mb-0">Poslednji oglasi o izgubljenim zivotinjama</h1>
            </div>
            <div v-if="lang.value == 'eng'" class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Ads</h6>
                <h1 class="display-5 text-uppercase mb-0">Recent ads about lost pets</h1>
            </div>
        <div class="row">
            <div v-for='oglas in oglasi' :key="oglas.naziv" class="col-lg-4 col-md-6 col-sm-12 my-3">
                <OglasPreview :mojOglas='oglas'></OglasPreview>
            </div>
        </div>
        </div>
    </div>


</template>

<script>
    import OglasPreview from '../components/OglasPreview.vue'
    import allOglasi from '../data/oglasi.js'
    import { lang } from "../data/lang.js";
    export default{
        name : 'ShowOglasi',
        components:{
            OglasPreview
        },
        data(){
            return{
                oglasi:[],
                lang
            }
        },
        created(){
            if(localStorage.getItem('allOglasi')==null){
                localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
                this.oglasi = JSON.parse(localStorage.getItem('allOglasi'));
            }
            else{
                this.oglasi = JSON.parse(localStorage.getItem('allOglasi'));
            }
        }
    }
</script>


<style scoped>
.blog-item a i {
    position: relative;
    padding-left: 20px;
    transition: .3s;
}

.blog-item a:hover i {
    padding-left: 50px;
}

.blog-item a i::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    top: 50%;
    left: 10px;
    margin-top: -1px;
    background: var(--primary);
    transition: .3s;
}

.blog-item a:hover i::after {
    width: 50px;
}

@media (min-width: 576px) {
    .blog-item .row {
        height: 300px;
    }
}
</style>