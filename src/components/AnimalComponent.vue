<template>
    <div class="col-lg-12 border">
        <div class="blog-item">
            <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-md-5 col-sm-12 h-100">
                    <img class="img-fluid h-100" :src="myanimal.image_path" style="object-fit: cover;">
                </div>
                <div class="col-12 col-md-7 col-sm-12 h-100 d-flex flex-column justify-content-center">
                    <div class="p-4">
                        <!--
                        <h2 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ myanimal.nameS }}</h2>
                        <h2 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ myanimal.nameE }}</h2>
                        <br>

                        <h5 v-if="lang.value == 'srb'">{{ myanimal.descriptionS }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">{{ myanimal.descriptionE }}</h5>
                        <br>
                        <h5 v-if="lang.value == 'srb'">Tezina: {{ myanimal.weight }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">Weight: {{ myanimal.weight }}</h5>
                        <h5 v-if="lang.value == 'srb'">Starost: {{ myanimal.age }} y/o</h5>
                        <h5 v-else-if="lang.value == 'eng'">Age: {{ myanimal.age }} y/o</h5>  -->


                        <div class="list-group">
                            <div class="list-group-item list-group-item-action active" aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                    <h2 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ myanimal.nameS }}</h2>
                                    <h2 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ myanimal.nameE }}</h2>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h4 v-if="lang.value == 'srb'" class="mb-1">Opis:</h4>
                                <h4 v-if="lang.value == 'eng'" class="mb-1">Description:</h4>
                                </div>
                                <h5 v-if="lang.value == 'srb'">{{ myanimal.descriptionS }}</h5>
                                <h5 v-else-if="lang.value == 'eng'">{{ myanimal.descriptionE }}</h5>
                                <br>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h4 v-if="lang.value == 'srb'">Tezina: {{ myanimal.weight }}</h4>
                                <h4 v-else-if="lang.value == 'eng'">Weight: {{ myanimal.weight }}</h4>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h4 v-if="lang.value == 'srb'">Starost: {{ myanimal.age }} y/o</h4>
                                <h4 v-else-if="lang.value == 'eng'">Age: {{ myanimal.age }} y/o</h4> 
                                </div>
                            </div>
  



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    <br>

    <div class="col-12 video">
        <iframe width="900" height="550" :src="myanimal.video_path"></iframe> 
    </div>
</template>

<style scoped>

img{
    border: 3px solid rgb(0, 85, 255);
    max-height: 500px;
    max-width: 400px;
}

.video {
  display: flex;
  justify-content: center;
  padding: 20px;
}
  
</style>







<script>
import { lang } from "../data/lang.js";
export default {
    name: "AnimalComponent",
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