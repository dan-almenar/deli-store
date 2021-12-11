<template>
<v-container>
    <!--
    <p>filteredCart: {{ filteredCart }}</p>
    <p>product: {{ product }}</p>
    <p>{{ variations }}</p>
    <div v-for="variation in variations.variations" :key="variation">
        <p>{{ variation }}</p>
    </div>
    -->
    <v-card
    :color="primaryColor">
        <v-card-title class="text-h5
        text-capitalize
        font-weight-bold">{{ product }}</v-card-title>
        
        <div v-for="(variation, index) in variationsList" :key="index">
            <CartVariation :productName="product" :variation="variation" />
        </div>
        
    </v-card>

</v-container>
</template>

<script>
import CartVariation from '@/components/cart/CartVariation.vue'
import { mapState, mapGetters } from 'vuex'
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
        ...mapGetters({
            filteredCart: 'filteredCart'
        }),
        primaryColor(){
            return this.colorPalette[this.product].primary
        },
        secondaryColor(){
            return this.colorPalette[this.product].secondary
        },
        // NOW I CAN WORK WITH THIS AS PROPS FOR CARTVARIATION
        variationsList(){
            // brake variations into an array
            const vars = Object.entries(this.variations.variations)

            // map each element in vars to new object
            const mappedVars = vars.map(variation => {
                return {
                    name: variation[0],
                    description: variation[1],
                }
            })
            return mappedVars
        },
    },
    components: {
        CartVariation,
    }

}
</script>

<style scoped>
</style>