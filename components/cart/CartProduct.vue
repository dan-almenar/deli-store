<template>
<v-container>
    <v-card
    :color="primaryColor">
        <v-card-title class="text-h5
        text-capitalize
        font-weight-bold">{{ product }}</v-card-title>
        
        <div v-for="(variation, index) in variationsArray" :key="index">
            <VariationsCards :productName="product" :variation="variation.variations" />
            <!--
                FIX VARIATIONCARDS TO BE PROPERLY USED
            <VariationsCards :productName="productName" :variation="Object.fromEntries(variation)" />
            -->
            <p>{{ variation.variations }}</p>
        </div>
        
    </v-card>
</v-container>
</template>

<script>
import VariationsCards from '@/components/products/VariationsCards.vue'
import { mapState } from 'vuex'
export default {
    name: "CartProduct",
    props: {
        product: {
            type: String,
            required: true
        },
        variations: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState({
            colorPalette: 'colorPalette',
        }),
        primaryColor(){
            return this.colorPalette[this.product].primary
        },
        secondaryColor(){
            return this.colorPalette[this.product].secondary
        },
        variationsArray(){
            return Array(this.variations)
        }
    },
    components: {
        VariationsCards,
    }

}
</script>

<style scoped>
</style>