<template>
<v-container>
    <v-card :color="this.product.color">
        <v-card-title>{{ productName }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-img :src="product.imgs[1]"
        width="100%"
        max-height="500px"></v-img>
        <div class="card-wrapper" v-for="variation in product.variations" :key="variation.id">
            <VariationsCards :productName="product.name" :variation="variation" />
        </div>
    </v-card>
    <div v-if="!this.continue">
    <v-card-actions>
        <v-btn
        @click="showOtherProduct"
        :block="$vuetify.breakpoint.mdAndDown"
        outlined
        :color="this.product.color">Continuar</v-btn>
    </v-card-actions>
    </div>
    <div class="other-products" v-else>
        <v-card-title>Añadir otro:</v-card-title>
        <v-btn outlined :color="this.product.color" @click="goToCart" >Continuar<v-icon right>mdi-cart-arrow-right</v-icon></v-btn>
        <ProductCard :product="otherProducts[0]" />
        <ProductCard :product="otherProducts[1]" />
    </div>
</v-container>
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'
import VariationsCards from '@/components/products/VariationsCards.vue'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            selected: [],
            continue: false,
        }
    },
    computed: {
        product(){
            return this.products.filter(product => product.name === this.$route.params.product)[0]
        },
        otherProducts(){
            return this.products.filter(product => product.name != this.product.name)
        },
        ...mapGetters({
            products: 'products',
            cart: 'cart',
        }),
        selectedItems(){
            return this.selected.join(', ')
        },
        productName(){
            const firstLetter = this.product.name[0].toUpperCase()
            return this.product.name.replace(this.product.name[0], firstLetter)
        },
        colors() {
            return {
                primary: this.product.color,
                secondary: this.product.secondaryColor,
            }
        },
    },
    methods: {
        addItem(label){
            if (this.selectedItems.includes(label)){
                this.selectedItems=this.selectedItems.filter(item => item !== label)
            } else {
                this.selectedItems.push(label)
            }
        },
        toggleContinue(){
            this.continue = !this.continue
        },
        showOtherProduct(){
            this.continue = true
        },
        goToCart(){
            this.$router.push('/cart/cart')
        },
    },
    components: {
        VariationsCards,
        ProductCard,
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
.subtitle {
    margin-bottom: 30px;
}
h1 {
    font-size: 2.8rem;
    letter-spacing: .1rem;
    font-family:'Cookie', cursive;
    text-transform: capitalize;
    padding-left: 20px;
}

.wrapper {
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 2fr));
    gap: 40px;
}

.other-products {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
}
</style>