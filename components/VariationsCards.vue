<template>
<v-container>
    <v-spacer></v-spacer>
    <!-- TODO: Add counter method (onClick) 
    change switchSelection to only switch if counter === 0 -->
     <v-card
     elevation="14"
     @click="handleSelection(variation)"
     :color="selected ? color : ''">
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
            count: 0,
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
        handleSelection(variation){
            this.count = this.count +1
            this.count > 0 ? this.selected = true : this.selected = false;
            this.addToCart(variation)
        },
        ...mapMutations({
            addToCart: 'addToCart'
        }),
    },
    computed: {
        isSelected(){
            return this.selected
        },
        isPositive(){
            return this.count > 0
        }
    },
}
</script>

<style scoped>
</style>