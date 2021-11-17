<template>
<v-container>
    <v-card :color="this.product.color">
        <v-card-title>{{ productName }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-img :src="product.imgs[1]"
        width="100%"
        max-height="500px"></v-img>
        <div class="card-wrapper" v-for="variation in product.variations" :key="variation.id">
            <VariationsCards :variation="variation" :color="product.secondaryColor" />
        </div>
        
        <!-- INCLUDE V-FOR VARIANTS (CAROUSEL OF CARDS) -->
        <!-- THIS V-IF SELECTED VARIANT 
        <div class="wrapper" v-for="content in product.contents" :key="content">
            <v-checkbox
                :label="`${content}`"
                @click="addItem(content)">
            </v-checkbox>
        </div>
        <v-card-text>Selección: {{ selectedItems }}</v-card-text>
        -->
    </v-card>
    <v-card-actions>
        <v-btn block
        outlined
        :color="this.product.color">Añadir</v-btn>
    </v-card-actions>
</v-container>
</template>

<script>
import VariationsCards from '~/components/VariationsCards.vue'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            selected: [],
        }
    },
    computed: {
        product(){
            return this.products.filter(product => product.name === this.$route.params.product)[0]
        },
        ...mapState({
            products: state => state.products
        }),
        selectedItems(){
            return this.selected.join(', ')
        },
        productName(){
            const firstLetter = this.product.name[0].toUpperCase()
            return this.product.name.replace(this.product.name[0], firstLetter)
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
    },
    components: {
        VariationsCards,
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
</style>