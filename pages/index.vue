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
  meta: {
        return{
            title: 'Home | ETicket',
        metaTags:[
            {
              hid: 'description',
              name: 'description',
              content: 'This is "DTP" of BackostTech's @Staging state'
            },
            {
              name: 'author',
              content: 'Natnael Kiflu'
            },
            {  name: 'keywords',
              content: 'HTML, CSS, JavaScript, vuejs, nuxtjs, Natty, Natnael Kiflu, eticket, web, website, backos, BackosTech ethiopia, university, frontend, designe'
            },
            {  property: 'og:image',
              content: '~/static/assets/img/logo.png'
            },
            { property: 'twitter:image'
              content: '~/static/assets/img/logo.png'
            }
         ]  
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
