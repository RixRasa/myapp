<template>
<div id="app" >
  <NavigationBar></NavigationBar>

  <router-view/>

  <FooterComponent />

</div>
</template>
<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
-->
<style>


:root {
    --primary: #7AB730;
    --secondary: #FFD33C;
    --light: #F3F3F3;
    --dark: #212121;
}

[class^=flaticon-]:before,
[class*=" flaticon-"]:before,
[class^=flaticon-]:after,
[class*=" flaticon-"]:after {
    font-size: inherit;
    margin-left: 0;
}

.btn {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    transition: .5s;
}

.btn-primary {
    color: #FFFFFF;
}

.btn-square {
    width: 36px;
    height: 36px;
}

.btn-sm-square {
    width: 28px;
    height: 28px;
}

.btn-lg-square {
    width: 46px;
    height: 46px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
}


#app{
  background-color: aliceblue;
}


</style>


<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterComponent from "@/components/FooterComponent.vue";

export default{
  name : 'App',
  components:{
    NavigationBar, FooterComponent
  }
}
</script>
