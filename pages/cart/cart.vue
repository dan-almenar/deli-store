<template>
<v-container>
    <h2 class="text-h4
    text-center
    grey darken-3">Su compra <v-icon right>mdi-cart</v-icon></h2>
    <Cart />
</v-container>    
</template>

<script>
import Cart from '~/components/cart/Cart.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        Cart,
    }
}
</script>

<style>

</style>