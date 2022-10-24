<template>

<div class="breadcrums">
        <router-link to='/' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Zivotinje</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Animals</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link to='/psi' v-if="animal.type == 3" class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Psi</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Dogs</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link to='/macke' v-if="animal.type == 2" class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Macke</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Cats</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link to='/ptice' v-if="animal.type == 1" class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Ptice</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Birds</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link :to='/animal/+animal.id' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">{{ animal.nameS }}</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">{{ animal.nameE }}</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
</div>

    <div class="container-fluid py-5">
        <div class="container">
            <!--<div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Latest Blog</h6>
                <h1 class="display-5 text-uppercase mb-0">Latest Articles From Our Blog Post</h1>
            </div> -->
            <div class="row g-5">
                <div>
                    <AnimalComponent :myanimal='animal'></AnimalComponent>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
</style>

<script>
    import AnimalComponent from '../components/AnimalComponent.vue'
    import animals from '../data/animals'
    import { lang } from "../data/lang.js";

    export default{
        name: 'AnimalView',
        created(){
            var animalId = Number(this.$route.params.id)
            this.animal = this.animals.find(animal=>animal.id==animalId)
        },
        components: {
            AnimalComponent
        },
        data(){
            return{
                animals: animals,
                animal: {},
                lang
            }
        }
    }

</script>