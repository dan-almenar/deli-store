<template>
    <v-container>
        <v-carousel cycle>
            <v-carousel-item
            v-for="(item, index) in items"
            :key="index"
            :src="item.src"
            :label="item.label"
            @click="goToProduct(item.label)">
            <v-card flat>
                <v-card-text>
                <h3 class="headline">{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                </v-card-text>
            </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>  
</template>

<script>
export default {
    name: 'Carousel',
    data(){
        return {
            items: [
                {
                src: '/carousel1.jpg',
                label: 'picadas',
                title: 'Picadas',
                text: 'Los mejores fiambres y quesos...',
                },
                {
                src: '/carousel2.jpg',
                label: 'sandwiches',
                title: 'Sandwiches de miga',
                text: 'Variedad de rellenos para elegir...',
                },
                {
                src: '/carousel3.jpg',
                label: 'bodega',
                title: 'Bodega',
                text: 'Vinos, cervezas importadas, encurtidos, y mucho más...',
                },
            ],
        }
    },
    methods: {
        goToProduct(label){
            console.log(label);
            this.$router.push(`/products/${label}`)
        },
    }
}
</script>

<style>

</style>