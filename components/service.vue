<template>
    <!-- services section -->
    <section class="services" id="services">
        <h1 class="heading"><span>Services</span></h1>
        <div class="box-container">
            <div class="service" v-for="(obj, key) in featuresJSONData" :key="key">
                <div class="box" >
                    <img :src="obj.img" alt="img not found">
                    <h3>{{ obj.title }}</h3>
                    <p>{{ obj.desc }}</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'Services',
  data: () => ({
      featuresJSONData: [
          {
              img: '~/static/assets/img/logo.png',
              title: 'Tickets',
              desc: 'lorem ipsum dolor sit amet'
          },
        //   {
        //       img: '~/static/assets/img/logo.png',
        //       title: 'Selling Tickets',
        //       desc: 'lorem ipsum dolor sit amet'
        //   },
          {
              img: '~/static/assets/img/logo.png',
              title: 'Payment Method',
              desc: 'lorem ipsum dolor sit amet'
          },
          {
              img: '~/static/assets/img/logo.png',
              title: 'Ticket',
              desc: 'lorem ipsum dolor sit amet'
          },
      ]

  }),  
}
</script>

<style>

</style>