<template>
    <!-- features section -->
    <section class="features" id="features">
        <h1 class="heading"><span>Features</span></h1>
        <div class="box-container">
            <div class="box" v-for="(obj, key) in featuresJSONData" :key="key">
                <img :src="obj.img" alt="img not found">
                <h3>{{ obj.title }}</h3>
                <p>{{ obj.desc }}</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Features',
  data: () => ({
      featuresJSONData: [
          {
              img: '~/static/assets/img/logo1.png',
              title: 'Fast',
              desc: 'lorem ipsum dolor sit amet'
          },
          {
              img: '~/static/assets/img/logo2.png',
              title: 'Easy',
              desc: 'lorem ipsum dolor sit amet'
          },
          {
              img: '~/static/assets/img/logo3.png',
              title: 'Pay Online ',
              desc: 'lorem ipsum dolor sit amet'
          },
      ]

  }),  
}
</script>

<style>

</style>