<template>
    <!-- blog section -->
    <section class="blog" id="blog">
        <h1 class="heading"><span>blogs</span></h1>
        <div class="box-container">
            <div class="box" v-for="(obj, key) in blogJSONData" :key="key">
                <img :src="obj.img" alt="">
                <div class="content">
                    <div class="icons">
                        <a href="#"><i class="fa fa-user" aria-hidden="true"></i> by admin</a>
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> 10 oct, 2021 </a>
                    </div>
                    <h3>{{ obj.title }}</h3>
                    <p>{{ obj.content }}</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'Blog',
    data: () => ({
        blogJSONData: [
            {
                img: '~/static/assets/img/logo.png',
                title: 'fast, easy and reiliabl ',
                content: 'lorem impsum dolor sit amet consectetur adipisici...'
            },
            {
                img: '~/static/assets/img/logo.png',
                title: 'fast, easy and reiliabl 2 ',
                content: 'lorem impsum dolor sit amet consectetur adipisici...'
            },
            {
                img: '~/static/assets/img/logo.png',
                title: 'fast, easy and reiliabl  3',
                content: 'lorem impsum dolor sit amet consectetur adipisici...'
            },
        ]
    })
}
</script>