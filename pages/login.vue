<template>
<div>
    <Navbar />
    <div class="main">
        <div class="cont">
        <Login />
        </div>
    </div>
</div>
    
    
</template>

<script>

import '~/static/assets/css/style.css'
import '~/static/assets/fontawesome/fontawesome-free-5.15.1-web/css/all.min.css'

import Login from '~/components/login.vue'
import Navbar from '~/components/navbar.vue'


export default {
  
  head(){
        return{
            title: 'Login'
        }
    },
    components: {
        Login,
        Navbar,
    }
}
</script>
<style scoped>
    .main{
        display: flex;
        justify-content: center;
        margin-top: 5rem;


        
    }
    .cont{
        height: 13rem;
        background: cornflowerblue;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        width: 50%;
    }
    .cont h1{
        display: block;

    }
    h1{
        color: rgb(0, 110, 255);
    }
 
</style>