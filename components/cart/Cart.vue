<template>
<div>
        <!-- temporary 
        <div v-for="item in filteredCart" :key="item[0]">
            <p>{{ item[0] }}</p>
            <div v-for="variation in item[1]" :key="Object.keys(variation)[0]">
                <p>{{ Object.keys(variation)[0] }}</p>
                <p>{{ Object.values(variation)[0] }}</p>
            </div>
        </div>
    <v-card-text class="text-h4
        font-weight-bold
        rounded
        text-center
        grey darken-2">Su compra <v-icon large right>mdi-cart</v-icon>
    </v-card-text>
            <h2 class="text-h5
        font-weight-bold">{{ emptyCart ? "Su carrito está vacío" : `Hay ${cart.cartTotalItems} productos en su carrito:`}}</h2>
-->
    
    <v-container>
        <h2 class="text-h5
        font-weight-bold">{{ emptyCart ? "Su carrito está vacío" : `Hay ${cart.cartTotalItems} productos en su carrito:`}}</h2>
        <div 
        v-for="item in filteredCart" :key="item[0]">      

        <CartProduct :product="item[0]" :variations="item[1]" />
        
        </div>
        <v-card-text
        class="text-h5
        rounded
        font-weight-bold
        text-right">Total: ${{ cartTotalAmount }}</v-card-text>
    </v-container>

    <v-card-actions>
        <v-btn
        :block="$vuetify.breakpoint.mdAndDown"
        outlined
        color="lime darken-2">pagar</v-btn>
    </v-card-actions>

</div>
</template>

<script>
import CartProduct from '@/components/cart/CartProduct.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    computed: {
        ...mapGetters({
            cart: 'cart',
            filteredCart: 'filteredCart',
            emptyCart: 'emptyCart',
            cartTotalAmount: 'cartTotalAmount',
        }),
    },
    components: {
        CartProduct
    }
}
</script>

<style scoped>
</style>