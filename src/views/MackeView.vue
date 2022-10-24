<template>

<div class="breadcrums">
        <router-link to='/' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Zivotinje</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Animals</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
        <router-link to='/macke' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Macke</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Cats</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Macke</h6>
                <h6 v-else-if="lang.value == 'eng'" class="text-primary text-uppercase">Cats</h6>

                <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Lista svih macaka koje se nalaze u nasem azilu</h1>
                <h1 v-else-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">List of all cats in our animal shelter</h1>
            </div>

            <div class="input-group">
                <div class="form-outline">
                    <input v-model="searchfield" type="search" id="form1" class="form-control" />
                </div>
                <button @click='search()' v-if="lang.value == 'srb'" type="button" class="btn btn-primary">
                    Pretrazi<i class="fas fa-search"></i>
                </button>
                <button @click='search()' v-else-if="lang.value == 'eng'" type="button" class="btn btn-primary">
                    Search<i class="fas fa-search"></i>
                </button>
            </div>
            <br>

            <div v-if="lang.value == 'srb'" class="form-check">
                <input @click='sortname()' class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sortiraj po nazivu
                </label>
            </div>
            <div v-if="lang.value == 'srb'" class="form-check">
                <input @click='sortage()' class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Sortiraj po starosti
                </label>
            </div>
            <div v-if="lang.value == 'eng'" class="form-check">
                <input @click='sortname()' class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sort by name
                </label>
            </div>
            <div v-if="lang.value == 'eng'" class="form-check">
                <input @click='sortage()' class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Sort by age
                </label>
            </div>


            <br>

            <div class="row g-5">
                <div v-for='animal in myanimals' :key="animal.id">
                     <AnimalPreviewComponent :myanimal='animal'></AnimalPreviewComponent> 
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-check{
    margin-left: 30px;
}
</style>

<script>
import AnimalPreviewComponent from '../components/AnimalPreviewComponent.vue'
import cats from '../data/cats'
import { lang } from "../data/lang.js";

export default {
  name: 'HomeView',
  components: {
    AnimalPreviewComponent
  },
  data() {
    return{
      lang,
      myanimals: cats,
      allmyanimals: cats,
      searchfield: "",
    }
  },
  methods:{
    sortage(){
        let animals = this.allmyanimals;
        let min_index;
        for(let i=0; i<animals.length; i++){
            min_index = i; 
            for(let j=i+1; j<animals.length; j++){
                if(parseInt(animals[j].age)<parseInt(animals[min_index].age)){
                    min_index = j;
                }
            }
            let p = animals[min_index];
            animals[min_index] = animals[i];
            animals[i] = p;
        }
        this.myanimals = animals;
    },
    sortname(){
        if(this.lang.value == 'srb'){
            let animals = this.allmyanimals;
            let min_index;
            for(let i=0; i<animals.length; i++){
                min_index = i; 
                for(let j=i+1; j<animals.length; j++){
                    if(animals[j].nameS<animals[min_index].nameS){
                        min_index = j;
                    }
                }
                let p = animals[min_index];
                animals[min_index] = animals[i];
                animals[i] = p;
            }
            this.myanimals = animals;
        }
        else{
            let animals = this.allmyanimals;
            let min_index;
            for(let i=0; i<animals.length; i++){
                min_index = i; 
                for(let j=i+1; j<animals.length; j++){
                    if(animals[j].nameE<animals[min_index].nameE){
                        min_index = j;
                    }
                }
                let p = animals[min_index];
                animals[min_index] = animals[i];
                animals[i] = p;
            }
            this.myanimals = animals;
        } 
    },
    search(){
        let x = 0;
        let animals = [];
        for(let i=0; i<this.allmyanimals.length; i++){
            if(lang.value == 'srb'){
                if(this.allmyanimals[i].nameS.toLowerCase().includes(this.searchfield.toLowerCase())){
                    animals[x] = this.allmyanimals[i];
                    x++;
                }
                else{
                    if(this.allmyanimals[i].descriptionS.toLowerCase().includes(this.searchfield.toLowerCase())){
                        animals[x] = this.allmyanimals[i];
                        x++;
                    }
                }
            }
            else{
                if(this.allmyanimals[i].nameE.toLowerCase().includes(this.searchfield.toLowerCase())){
                    animals[x] = this.allmyanimals[i];
                    x++;
                }
                else{
                    if(this.allmyanimals[i].descriptionE.toLowerCase().includes(this.searchfield.toLowerCase())){
                        animals[x] = this.allmyanimals[i];
                        x++;
                    }
                }
            }
        }
        this.myanimals = animals;
    },
  }
}
</script>
