<template>
    <div class="col-lg-9 border">
        <div class="blog-item">
            <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                    <img class="img-fluid h-100" :src="myanimal.image_path" style="object-fit: cover;">
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div class="p-4">
                        <!--<div class="d-flex mb-3">
                            <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                            <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                        </div> -->
                        <h5 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ myanimal.nameS }}</h5>
                        <h5 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ myanimal.nameE }}</h5>
                        <br>

                        <h6 v-if="lang.value == 'srb'">{{ myanimal.descriptionS }}</h6>
                        <h6 v-else-if="lang.value == 'eng'">{{ myanimal.descriptionE }}</h6>
                        <br>
                        <h6 v-if="lang.value == 'srb'">Tezina: {{ myanimal.weight }}</h6>
                        <h6 v-else-if="lang.value == 'eng'">Weight: {{ myanimal.weight }}</h6>
                        <h6 v-if="lang.value == 'srb'">Starost: {{ myanimal.age }} y/o</h6>
                        <h6 v-else-if="lang.value == 'eng'">Age: {{ myanimal.age }} y/o</h6>
                        <br>

                        <router-link :to='/animal/+myanimal.id' class="text-primary text-uppercase">
                            <text v-if="lang.value == 'srb'">Pogledaj detaljnije</text><i class="bi bi-chevron-right"></i>
                            <text v-if="lang.value == 'eng'">Read More</text>
                        </router-link>

                        <!-- <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {  
    max-width: 250px;  
    max-width: 250px;  
    border: 2px solid rgb(0, 85, 255);
}


</style>





<script>
import { lang } from "../data/lang.js";
export default {
    name: "AnimalPreviewComponent",
    data() {
        return {
            lang
        };
    },
    props: [
        "myanimal"
    ]
};
</script>