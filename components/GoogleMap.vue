<template>
  <v-container>
        <iframe
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUzmCSSjKvJURJ88nN62VfZU&key=AIzaSyAPwA9jO6ecj6Q638QawC-eYrVQy_wF_wk">
        </iframe>
  </v-container>
</template>

<script>
export default {
    name: 'GoogleMap'
}
</script>

<style scoped>
</style>