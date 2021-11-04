<template>
<div>
     <!-- navigation section -->
     <Navbar />

    <section class="registarion">
        <div class="registration-banner">
            <div class="reviews">
                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus, provident ipsum culpa aliquam at facilis ullam. Voluptatem ex minima delectus quisquam voluptatibus, voluptate fuga dignissimos consequuntur corporis placeat illum. "</p>
            </div>
        </div>
        <div class="form">
            <Registration />
        </div>
        
    </section>

</div>

</template>
<script>

import '~/static/assets/css/style.css'
import '~/static/assets/fontawesome/fontawesome-free-5.15.1-web/css/all.min.css'
// import Form from '../components/register.vue'
import Registration from '~/components/registration.vue'
import Navbar from '~/components/navbar.vue'

export default {
    head(){
        return{
            title: 'Registration'
        }
    },
    components:{
        // Form
        Registration,
        Navbar,
    }
}
</script>
<style scoped>
    
</style>