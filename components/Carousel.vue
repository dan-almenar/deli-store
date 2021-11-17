<template>
    <v-container>
        <v-carousel cycle>
            <v-carousel-item            
            v-for="(item, index) in items"
            :key="index"
            :src="item.src"
            :label="item.label"
            @click="goToProduct(item.label)">
            <v-card flat
            :color="item.color">
                <v-card-text>
                <h3 class="text-h4 headline font-weight-bold">{{ item.title }}</h3>
                <p class="text-h6 text-right font-weight-bold">{{ item.text }}</p>
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
                color: 'brown',
                },
                {
                src: '/carousel2.jpg',
                label: 'sandwiches',
                title: 'Sandwiches de miga',
                text: 'Variedad de rellenos para elegir...',
                color: 'green',
                },
                {
                src: '/carousel3.jpg',
                label: 'bodega',
                title: 'Bodega',
                text: 'Vinos, cervezas importadas, encurtidos y mucho más...',
                color: 'purple',
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