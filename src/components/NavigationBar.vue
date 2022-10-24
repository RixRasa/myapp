<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <router-link to='/' class="navbar-brand ms-lg-5">
            <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Pet House</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <router-link to='/' v-if="lang.value == 'srb'" class="nav-item nav-link">Pocetna</router-link>
                <router-link to='/' v-if="lang.value == 'eng'" class="nav-item nav-link">Home</router-link>
                <router-link to='/about' v-if="lang.value == 'srb'" class="nav-item nav-link">O nama</router-link>
                <router-link to='/about' v-if="lang.value == 'eng'" class="nav-item nav-link">About us</router-link>
                <router-link  to='/showoglasi' v-if="lang.value == 'srb'" class="nav-item nav-link">Izgubljeni Ljubimci </router-link>
                <router-link to='/showoglasi' v-if="lang.value == 'eng'" class="nav-item nav-link">Lost Pets </router-link>
                <router-link to='/makeoglas' v-if="lang.value == 'srb'" class="nav-item nav-link">Dodaj Oglas</router-link>
                <router-link to='/makeoglas' v-if="lang.value == 'eng'" class="nav-item nav-link">Post Ads</router-link>

                <router-link to='/mojnalog' v-if="lang.value == 'srb' && logged.value == true" class="nav-item nav-link">Moj Nalog</router-link>
                <router-link to='/mojnalog' v-if="lang.value == 'eng' && logged.value == true" class="nav-item nav-link">My Profile</router-link>

                <div class="nav-item dropdown">
                    <div v-if="lang.value == 'srb'" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Zivotinje</div>
                    <div v-if="lang.value == 'srb'"  class="dropdown-menu m-0">
                        <router-link to='/psi' class="dropdown-item">Psi</router-link>
                        <router-link to='/macke' class="dropdown-item">Macke</router-link>
                        <router-link to='/ptice' class="dropdown-item">Ptice</router-link>
                       
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <div v-if="lang.value == 'eng'" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Animals</div>
                    <div v-if="lang.value == 'eng'"  class="dropdown-menu m-0">
                        <router-link to='/psi' class="dropdown-item">Dogs</router-link>
                        <router-link to='/macke' class="dropdown-item">Cats</router-link>
                        <router-link to='/ptice' class="dropdown-item">Birds</router-link>
                       
                    </div>
                </div>

                <div class="nav-item nav-select language">
                    <select @change="lang.changeLang()" class="form-select">
                    <option v-if="lang.value == 'srb'" >Srpski</option>
                    <option v-else-if="lang.value == 'eng'" >English</option>
                    <option v-if="lang.value == 'srb'" >Engleski</option>
                    <option v-else-if="lang.value == 'eng'">Serbian</option>
                    </select>
                </div>

                <div v-if="lang.value == 'srb'" class="nav-item nav-link bg-primary px-5 ms-lg-5 d-flex flex-column justify-content-center" style="padding-top:10px;padding-bottom:10px">
                    <router-link v-if="logged.value == false" to='/login' class='text-white '>Prijavite se</router-link>
                    <router-link @click='logged.changeLang()' v-if="logged.value == true" to='/' class='text-white '>Odjavite se</router-link>
                    <router-link v-if="logged.value == false" to='/register' class='text-white'>Registrujte se</router-link>
                </div>

                <div v-if="lang.value == 'eng'" class="nav-item nav-link bg-primary px-5 ms-lg-5 d-flex flex-column justify-content-center" style="padding-top:10px;padding-bottom:10px">
                    <router-link v-if="logged.value == false" to='/login' class='text-white '>Login</router-link>
                    <router-link @click='logged.changeLang()' v-if="logged.value == true" to='/' class='text-white '>Logout</router-link>
                    <router-link v-if="logged.value == false" to='/register' class='text-white'>Register</router-link>
                </div>

                
                
            </div>
        </div>
    </nav>
</template>

<style scoped>
@media (min-width: 992px) {
    .navbar-light .navbar-nav .nav-link::before {
        position: absolute;
        content: "";
        width: 0;
        height: 7px;
        top: -4px;
        left: 50%;
        background: var(--primary);
        transition: .5s;
    }

    .navbar-light .navbar-nav .nav-link:hover::before,
    .navbar-light .navbar-nav .nav-link.active::before {
        width: 100%;
        left: 0;
    }

    .navbar-light .navbar-nav .nav-link.nav-contact::before {
        width: 100%;
        height: 1px;
        top: -1px;
        left: 0;
    }
}

@media (max-width: 991.98px) {
    .navbar-light .navbar-nav .nav-link  {
        margin-left: 0;
        padding: 10px 0;
    }
}

.navbar-light .navbar-nav .nav-link {
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin-left: 30px;
    padding: 30px 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--dark);
    outline: none;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-nav .nav-link {
    padding: 20px 0;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--primary);
}

.language{
    padding: 20px 0;
    margin-left: 30px;
}


</style>


<script>
import { lang } from "../data/lang.js";
import { logged } from "../data/logged.js"
export default {
    name: "NavigationBar",
    data() {
        return {
            lang,
            logged,
        };
    },
    created(){
        if(localStorage.getItem("CurrentUser") == null) {logged.value = false;}
        else{
            logged.value = true;
        }
    },
    methods:{
        Logout(){
            localStorage.removeItem('CurrentUser');

        }
    }
};
</script>
