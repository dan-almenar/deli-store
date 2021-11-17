<template>
  <v-container class="container-scoped">    
    <v-img :src="firstPic">
    <div class="rrss">
      <SocialNetworks />
    </div>        
    </v-img>
    <div id="title" class="brown">
      <h2>Flores Deli</h2>
      <h3>Fiambres & Delicateses</h3>
    </div>  
    <div class="divider">
      <h3 class="subtitle font-weight-thin">Nuestros productos</h3>
      <Carousel />
    </div>
    <div class="map">
      <h3 class="subtitle font-weight-thin">Encontranos</h3>
      <GoogleMap />
    </div>
  </v-container>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Carousel from '@/components/Carousel.vue'
import GoogleMap from '@/components/GoogleMap.vue'
export default {
  data() {
    return {
      firstPic: '/barPic.jpg',
      secondPic: '/barPic2.jpg',
    }
  },
  components: {
    Carousel,
    GoogleMap,
    SocialNetworks,
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
#title {
  display: flex;
  font-family: 'Cookie', cursive;
  letter-spacing: 0.2rem;
  color: white;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 20%;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2.5rem;
}

.divider {
  margin: 50px 0px;
}

.map {
  margin-bottom: 50px;
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}
</style>
