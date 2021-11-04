<template>
    <!-- navigation section -->
    <header class="header">
        <NuxtLink to="/" class="logo"> <img src="~/static/assets/img/logo.png" alt=""> <span> Eticket </span></NuxtLink>
        <nav class="navbar">
            <NuxtLink  to="/">Home</NuxtLink>
            <NuxtLink to="/#features"><i class="fa"></i> Features</NuxtLink>
            <NuxtLink to="/#services"><i class=""></i> Services</NuxtLink>
            <NuxtLink to="/#review"><i class="fa"></i> Review</NuxtLink>
            <NuxtLink to="/#blog"><i class="fa"></i> Blog</NuxtLink>
        </nav>

        <div class="icons">
              <div class="fa fa-bars" id="menu-btn" @click="openNav()"></div>
              <div class="fa fa-search" id="search-btn" @click="openSearchForm()"></div>
              <div class="fa fa-user" id="user-btn" @click="openUser()"></div>

          </div>

        <form class="search-form">
            <input type="search" id="search-box" placeholder="type here....">
            <label for="search-box" class="fa fa-search"></label>
        </form>

        <form action="" class="login-form">
            <h3>Login</h3>
            <input type="email" placeholder="email" class="input-box">
            <input type="password" placeholder="your password" class="input-box">
            <p>forget your password ? <NuxtLink to="">click here</NuxtLink></p>
            <p>don't have an accoount 
                <NuxtLink to="/registration">create new</NuxtLink>
            </p>
            <input type="submit" value="login" class="btn">
        </form>
    </header>
</template>
<script>
export default {
    name:'Navbar',

    methods: {
         openSearchForm() {
            let navbar = document.querySelector('.navbar');
            let login_form = document.querySelector('.login-form');
            let search_form = document.querySelector('.search-form');
            search_form.classList.toggle('active');
            navbar.classList.remove('active');
            login_form.classList.remove('active');
           
        },
        openUser() {
            let navbar = document.querySelector('.navbar');
            let login_form = document.querySelector('.login-form');
            let search_form = document.querySelector('.search-form');
            login_form.classList.toggle('active');
            navbar.classList.remove('active');
            search_form.classList.remove('active');
       
        },
        openNav() {
            let navbar = document.querySelector('.navbar');
            let login_form = document.querySelector('.login-form');
            let search_form = document.querySelector('.search-form');
            navbar.classList.toggle('active');
            login_form.classList.remove('active');
            search_form.classList.remove('active');
            
        },
        handleScroll (event) {
            let navbar = document.querySelector('.navbar');
            let login_form = document.querySelector('.login-form');
            let search_form = document.querySelector('.search-form');
            navbar.classList.remove('active');
            login_form.classList.remove('active');
            search_form.classList.remove('active');
        
        }
           
    },
        
      
}
</script>
<style>

</style>