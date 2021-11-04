<template>
<div>
    <!-- navigation section -->
  <Navbar />
  <!-- home section -->
  <Banner />
  <!-- features section -->
  <Features />

  <!-- Services -->
  <Service />
  <!-- vid section -->
  <Transition />
  <!-- customers review section -->
  <Review />
  <!-- blog section -->
  <Blog />
  <!-- footer section -->
  <Footer />
  
</div>

  
</template>

<script>
import '~/static/assets/css/style.css'
import '~/static/assets/fontawesome/fontawesome-free-5.15.1-web/css/all.min.css'

import Navbar from '~/components/navbar.vue'
import Banner from '~/components/banner.vue'
import Features from '~/components/features.vue'
import Review from '~/components/review.vue'
import Transition from '~/components/transit.vue'
import Blog from '~/components/blog.vue'
import Footer from '~/components/footer.vue'
import Service from '~/components/service.vue'
// import Registration from '~/components/registration.vue'



export default {
  head(){
        return{
            title: 'Home | ETicket'
        }
    },
  components: {
    Navbar,
    Banner,
    Features,
    Review,
    Transition,
    Blog,
    Footer,
    // Registration,
    Service
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
