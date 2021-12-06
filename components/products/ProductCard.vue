<template>
<v-container>
    <v-card @click="goToProduct(product.name)" :color="this.product.color">
        <v-card-title>{{ productName }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-img :src="product.imgs[1]"
        width="100%"
        max-height="150px"></v-img>
        <!--
        <div class="card-wrapper" v-for="variation in product.variations" :key="variation.id">
            <VariationsCards :variation="variation" :colors="colors" />
        </div>
        -->
    </v-card>    
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
//import VariationsCards from './VariationsCards.vue'
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            products: "products",
        }),
        /*
        product(){
            return this.products.filter(product => product.name == this.cardProduct)
        },
        product(){
            return this.products.filter((product) => {
                product.name == this.productName
            })
        },
        */
       productName(){
           const firstLetter = this.product.name.charAt(0).toUpperCase()
           return this.product.name.replace(this.product.name.charAt(0), firstLetter)
       },
    },
    methods: {
        goToProduct(label){
            this.$router.push(`/products/${label}`)
        },
    },
    components: {
        //VariationsCards
    }
}
</script>

<style>

</style>