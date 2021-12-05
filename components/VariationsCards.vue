<template>
<v-container>
    <v-spacer></v-spacer>
     <v-card
     elevation="14"
     @click="switchSelected"
     :color="selected ? colors.secondary : ''">
        <v-card-title class="text-h5">{{ variation.name }}
            <v-spacer></v-spacer>
            <v-icon
            :class="count > 0 ? 'text-h6' : 'text-subtitle-2'">
            Cantidad: {{ displayCount }}
            </v-icon>
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2">{{ variation.description }}</v-card-subtitle>
        <v-card-text class="text-right">AR$: {{ variation.price }}</v-card-text>
    </v-card>
    <v-spacer></v-spacer>
        <div class="btn-block">
            <v-btn-toggle
            v-if="selected"
            borderless
            dense
            :background-color="colors.primary">
                <v-btn
                v-if="displayCount != 0"
                plain
                rounded
                @click="handleRemove(variation)">
                    <v-icon
                    :color="colors.secondary">mdi-minus</v-icon>
                    </v-btn>
                <v-btn
                plain
                rounded
                @click="handleAdd()">
                    <v-icon>mdi-plus-thick</v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
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
        productName: {
            type: String,
            required: true,
        },
        variation: {
            type: Object,
            required: true
        },
        colors: {
            type: Object,
            required: true,
        }
    },
    methods: {
        switchSelected(){
            this.selected = !this.selected
        },
        handleAdd(){
            // FIX BUG AT CART ITEMS COUNT
            this.count++
            this.count > 0 ? this.selected = true : this.selected = false;
            this.addToCart({productName: this.productName, variation: this.variation, quantity: this.count}) // , quantity: this.count
        },
        handleRemove(){
            this.count > 0 ? this.count-- : this.count = 0;
            this.count > 0 ? this.selected = true : this.selected = false;
            this.removeFromCart({productName: this.productName, variation: this.variation, quantity: this.count})
        },
        ...mapMutations({
            addToCart: 'addToCart',
            removeFromCart: 'removeFromCart',
        }),
    },
    computed: {
        isSelected(){
            return this.selected
        },
        isPositive(){
            return this.count > 0
        },
        displayCount(){
            return this.count
        },
    },
    components: {
    },
}
</script>

<style scoped>
.btn-block{
    display: flex;
    justify-content: flex-end;
}
</style>