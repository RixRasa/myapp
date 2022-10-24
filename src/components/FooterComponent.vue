<template>
  <footer>
      <div>
        <div v-if="lang.value == 'srb'">
          2022 Copyright: Raša Stojanović i Dejan Drašković, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu
        </div>
        <div v-else-if="lang.value == 'eng'">
          2022 Copyright: Raša Stojanović and Dejan Drašković, Software Engineering, School of Electrical Engineering, University of Belgrade
        </div>
      </div>
    </footer>
</template>

<style>
footer {
  background-color: white;
  color: rgb(6, 6, 6);
  width:100%;
  height:30px;  
  text-align: center;
  /*position:fixed;*/
  left:0px;
  bottom:0px;

}
</style>


<script>
import { lang } from "../data/lang.js";
export default {
  name: "FooterComponent",
  data() {
    return {
      lang,
    };
  },
};
</script>