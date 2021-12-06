<template>
<v-container>
    <h2 class="text-h5
    font-weight-bold">Hay {{ cart.cartTotalItems }} productos en su carrito:</h2>
    <div class="wrapper"
    v-for="item in filteredCart" :key="item[0]">      

     <!-- Add total amount paragraph and pay button -->
    
    <CartProduct :product="item[0]" :variations="item[1]" />
    
    </div>
    <p>Total: AR$ {{ cart.cartTotalAmount }}</p>
</v-container>  
</template>

<script>
import CartProduct from '@/components/cart/CartProduct.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    computed: {
        ...mapGetters({
            cart: 'cart'
        }),
        filteredCart(){
            // get only cart products with a quantity greater than 0
            return Object.entries(this.cart.items).filter(item => item[1].productQuantity > 0)
        }
    },
    components: {
        CartProduct
    }
}
</script>

<style>

</style>