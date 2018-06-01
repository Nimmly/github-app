<template>
    <v-ons-page>
    <app-toolbar title="Profile">
        <div slot="left">
          <v-ons-back-button>Repos page</v-ons-back-button>
        </div>
    </app-toolbar>
    <v-ons-card>
        
        <p class="card-text" v-for="(repo, key) in user" :key="key">
            {{ repo.name }}
        </p>
    </v-ons-card>
    
    </v-ons-page>
</template>

<script>
import AppToolbar from './AppToolbar'
import App from '../App.vue'

export default {
    components: {
        AppToolbar
    },
    props: ['user'],
    
    mounted() {
        console.log(this.user)
    }
    
}
</script>

<style>

</style>
