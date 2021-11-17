<template>
    <v-container>
        <div class="rrss" v-for="network in networks" :key="network.name">
            <v-btn
            depressed
            elevation="2"
            icon
            small
            :color="network.color"
            @click="gotoNetwork(network.name)">
                <v-icon>{{ network.icon }}</v-icon>
            </v-btn>
        </div>               
    </v-container>
</template>

<script>
export default {
    name: 'SocialNetworks',
    data(){
        return {
            networks: [
                {
                    name: 'facebook',
                    icon: 'mdi-facebook',
                    link: 'https://www.facebook.com/',
                    color: '#4267B2'
                },
                {
                    name: 'instagram',
                    icon: 'mdi-instagram',
                    link: 'https://www.instagram.com/',
                    color: '#fb3958',
                },
                {
                    name: 'whatsapp',
                    icon: 'mdi-whatsapp',
                    link: 'https://wa.me/',
                    color: '#25D366',
                },
                {
                    name: 'twitter',
                    icon: 'mdi-twitter',
                    link: 'https://twitter.com/',
                    color: '#1DA1F2',
                },
                {
                    name: 'email',
                    icon: 'mdi-email',
                    link: 'mailto:',
                    color: 'white',
                },
            ]
        }
    },
    methods: {
        gotoNetwork(name){
            for (let network of this.networks) {
                if (network.name == name) {
                    window.open(network.link, '_blank');
                }
            }
        },
    }
}
</script>

<style scoped>
.rrss {
    display: inline-flex;
    margin: 0px 5px;
}
</style>