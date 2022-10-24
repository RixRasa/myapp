<template>

<div class="breadcrums">
        <router-link to='/register' class="text-primary text-uppercase">
            <text v-if="lang.value == 'srb'">Registrovanje</text><i v-if="lang.value == 'srb'" class="bi bi-chevron-right"></i>
            <text v-if="lang.value == 'eng'">Register</text><i v-if="lang.value == 'eng'" class="bi bi-chevron-right"></i>
        </router-link>
    </div>

    <section class="vh-100" >
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
                <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p v-if="lang.value == 'eng'" class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                    <p v-if="lang.value == 'srb'" class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrujte se</p>

                    <form class="mx-1 mx-md-4">

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" v-model="username" />
                        <label v-if="lang.value == 'eng'" class="form-label" for="form3Example1c" >Username</label>
                        <label v-if="lang.value == 'srb'" class="form-label" for="form3Example1c" >Korisnicko Ime</label>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" v-model="email"/>
                        <label v-if="lang.value == 'eng'" class="form-label" for="form3Example3c">Your Email</label>
                        <label v-if="lang.value == 'srb'" class="form-label" for="form3Example3c">Vas Email</label>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" v-model="password"/>
                        <label v-if="lang.value == 'eng'" class="form-label" for="form3Example4c">Password</label>
                        <label v-if="lang.value == 'srb'" class="form-label" for="form3Example4c">Sifra</label>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" v-model="password1"/>
                        <label v-if="lang.value == 'srb'" class="form-label" for="form3Example4cd">Ponovite sifru</label>
                        <label v-if="lang.value == 'eng'" class="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label v-if="lang.value == 'eng'" class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                        <label v-if="lang.value == 'srb'" class="form-check-label" for="form2Example3">
                        Slažem se sa svim <a href="#!">odredbama i uslovima</a>
                        </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <router-link to='/' v-if="lang.value == 'eng'" @click='Register()' class="btn btn-primary btn-lg">Confirm</router-link>
                        <router-link to='/' v-if="lang.value == 'srb'" @click='Register()' class="btn btn-primary btn-lg">Potvrdi</router-link>
                    </div>

                    </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="dog_cat.jpg"
                    class="img-fluid" alt="Sample image">

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>


<script>
import allUsers from '../data/users.js'
import { lang } from "../data/lang.js";
import {logged } from '../data/logged.js'

export default {
    name : "RegisterView",
    data(){
        return{
            users:[],
            lang,
            username:'',
            email:'',
            password:'',
            password1:'',

        }
    },
    created(){
        if(localStorage.getItem('allUsers')==null){
            localStorage.setItem('allUsers',JSON.stringify(allUsers));
        }
        else{
            this.users = JSON.parse(localStorage.getItem('allUsers'));
        }
    },
    methods:{
        Register(){
            if(this.password != this.password1){
                if(lang.value == 'srb') alert("Sifre nisu iste!")
                if(lang.value == 'eng') alert("Passwords are not same!")
                return
            }
            if(this.username =='' || this.password == '' || this.email == ''){
                if(lang.value == 'srb') alert("Popunite sva polja!")
                if(lang.value == 'eng') alert("Fill all fields!")
                return
            }
            if(this.users.find(user=>user.username == this.username) != null){
                if(lang.value == 'srb') alert("Korisnik vec postoji!")
                if(lang.value == 'eng') alert("Username was used!")
                return
            }

            this.users.push({'username':this.username,'password':this.password,'email':this.email});
            localStorage.setItem('allUsers',JSON.stringify(this.users));

            localStorage.setItem('CurrentUser',JSON.stringify(this.username));
            logged.changeLang();



        }
    }
}
</script>
