<template>
<v-container>
    <v-spacer></v-spacer>
    <!-- TODO: Add counter method (onClick) 
    change switchSelection to only switch if counter === 0 -->
     <v-card
     elevation="14"
     @click="[switchSelection, addToCart(variation.name)]"
     :color="this.selected ? this.color : ''">
        <v-card-title class="text-h5">{{ variation.name }}</v-card-title>
        <v-card-subtitle class="text-subtitle-2">{{ variation.description }}</v-card-subtitle>
        <v-card-text class="text-right">AR$: {{ variation.price }}</v-card-text>
    </v-card>
    <v-spacer></v-spacer>
</v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'VariationsCards',
    data(){
        return {
            selected: false,
        }
    },
    props: {
        variation: {
            type: Object,
            required: true
        },
        color: {
            type: String,
            required: true,
        }
    },
    methods: {
        switchSelection(){
            this.selected = !this.selected
        },
        ...mapMutations({
            addToCart: 'addToCart'
        }),
    },
}
</script>

<style scoped>
</style>