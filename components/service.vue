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
              img: 'https://greatonlineservices.com/wp-content/uploads/2019/02/online-services-costly-gst-wayout.png',
              title: 'Tickets',
              desc: 'lorem ipsum dolor sit amet'
          },
        //   {
        //       img: '~/static/assets/img/logo.png',
        //       title: 'Selling Tickets',
        //       desc: 'lorem ipsum dolor sit amet'
        //   },
          {
              img: 'https://www.techquintal.com/wp-content/uploads/2017/05/Best-ISP-Internet-Service-Provider.jpg',
              title: 'Payment Method',
              desc: 'lorem ipsum dolor sit amet'
          },
          {
              img: 'https://www.moneycrashers.com/wp-content/uploads/2019/02/cheap-high-speed-internet-service-providers.jpg',
              title: 'Ticket',
              desc: 'lorem ipsum dolor sit amet'
          },
      ]

  }),  
}
</script>

<style>

</style>
