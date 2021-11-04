<template>
     <!-- customers review section -->
    <section class="review" id="review">
        <h1 class="heading"><span>reviews</span></h1>
        <!-- <video src="https://media.istockphoto.com/videos/group-of-people-doing-online-chat-with-digital-device-video-id1333492017" muted loop autoplay></video> -->

        <div class="review-slider">
            <div class="wrapper">
                <div class="box" v-for="(obj ,key) in customersReviewsJSONData" :key="key">
                    <img :src="obj.img" alt="no img">
                    <p>{{ obj.txt}}</p>
                    <h3>{{ obj.username }}</h3>
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-alt" aria-hidden="true"></i>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Review',
    data: () => ({
        customersReviewsJSONData: [
            {
                img: '~/static/assets/img/logo.png',
                username: 'john doy',
                txt: 'lorem ipsum dolor sit consectetur'
            },
            {
                img: '~/static/assets/img/logo.png',
                username: 'zeberga',
                txt: 'lorem ipsum dolor sit consectetur'
            },
            {
                img: '~/static/assets/img/logo.png',
                username: 'tolosa',
                txt: 'lorem ipsum dolor sit consectetur'
            },
        ]
    })
}
</script>

<style scoped>

    
</style>