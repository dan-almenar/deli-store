<template>
<v-container>
    <v-btn
    plain
    rounded
    @click="remove">
        <v-icon large :color="color">mdi-cart-minus</v-icon>
    </v-btn>
    <v-btn
    plain
    large
    rounded
    @click="$nuxt.$emit('handleAdd')">
        <v-icon large :color="color">mdi-cart-plus</v-icon>
    </v-btn>
</v-container>
  
</template>

<script>
export default {
    name: 'AddRemoveItem',
    props: {
        color: {
            type: String,
            required: true,
        },
    },
    methods: {
        add(){
            this.$nuxt.$emit('handleAdd')
        },
        remove(){
            this.$nuxt.$emit('handleRemove')
        },
    }
}
</script>

<style>

</style>