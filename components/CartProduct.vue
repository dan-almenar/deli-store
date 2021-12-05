<template>
<v-container>
    <v-card
    :color="color">
        <p class="text-capitalize
        text-h5">{{ product[0] }}</p>
        <p>{{ product [1] }}</p>
    </v-card>
</v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CartProduct",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState({
            colorPalette: 'colorPalette',
        }),
        color(){
            return this.colorPalette[this.product[0]]
        }        
    },

}
</script>

<style scoped>
</style>