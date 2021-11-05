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
        <h3 style="color: white;">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Sint molestiae quo, adipisci est amet nemo minus nam, 
           sunt et minima animi officiis consequatur ducimus sequi 
           dignissimos nobis numquam perspiciatis atque.
        </h3>
    </section>
</template>

<script>
export default {
    name: 'Review',
    data: () => ({
        customersReviewsJSONData: [
            {
                img: 'http://www.clipartsuggest.com/images/60/smiling-people-clipart-clipart-smiling-face-of-a-XqSCCP-clipart.png',
                username: 'john doy',
                txt: 'lorem ipsum dolor sit consectetur'
            },
            {
                img: 'https://clipground.com/images/smiling-girl-clipart-4.jpg',
                username: 'zeberga',
                txt: 'lorem ipsum dolor sit consectetur'
            },
            {
                img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4362987.jpg',
                username: 'tolosa',
                txt: 'lorem ipsum dolor sit consectetur'
            },
        ]
    })
}
</script>

<style scoped>

    
</style>
