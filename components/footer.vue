<template>
    <!-- footer section -->
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3><img src="~/static/assets/img/logo.png" alt=""> <br><span> Eticket </span> </h3>
                <p>Eticket organised to helep customers </p>
                <div class="share">
                    <NuxtLink to="#" class="fab fa-telegram"></NuxtLink>
                    <NuxtLink to="#" class="fab fa-twitter"></NuxtLink>
                    <NuxtLink to="#" class="fab fa-instagram"></NuxtLink>
                    <NuxtLink to="#" class="fab fa-linkedin"></NuxtLink>
                </div>
            </div>
            <div class="box">
                <h3>contact info</h3>
                <NuxtLink to="#" class="links"> <i class="fa fa-phone" aria-hidden="true"></i>+251987654321</NuxtLink>
                <NuxtLink to="#" class="links"> <i class="fa fa-phone" aria-hidden="true"></i>+251987654321</NuxtLink>
                <NuxtLink to="#" class="links"> <i class="fa fa-envelope" aria-hidden="true"></i>Eticket@gmail.com</NuxtLink>
                <NuxtLink to="#" class="links"> <i class="fas fa-map-marker-alt" aria-hidden="true"></i>adama collage - 04</NuxtLink>
            </div>
            
            <div class="box">
                <h3>links</h3>
                <NuxtLink to="#home" class="links"> <i class="fa fa-arrow-right" aria-hidden="true"></i>home</NuxtLink>
                <NuxtLink to="#features" class="links"> <i class="fa fa-arrow-right" aria-hidden="true"></i>features</NuxtLink>
                <NuxtLink to="#services" class="links"> <i class="fa fa-arrow-right" aria-hidden="true"></i>services</NuxtLink>
                <NuxtLink to="#review" class="links"> <i class="fa fa-arrow-right" aria-hidden="true"></i>reviews</NuxtLink>
                <NuxtLink to="#blog" class="links"> <i class="fa fa-arrow-right" aria-hidden="true"></i>blogs</NuxtLink>
            </div>
            <div class="box">
                <h3>newsletter</h3>
                <p>subscribe for latest update</p>
                <input type="email" placeholder=" valid email" class="email">
                <input type="submit" value="subscribe" class="btn">
                <img src="~/static/assets/img/payment.jpeg" alt="payment methods" class="payment-img">
            </div>
        </div>
        <div class="credit">created by <a href="https://sevenoon.pythonanywhere.com/about" target="_blank"> <span class="company"> Natan304|ScottX </span> </a>| all rights reserved</div>

    </section>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>