<template>
  <v-ons-page>
    <app-toolbar />
    <div class="content">
      <app-search :query.sync="query" placeholder="Search Term" />
      <v-ons-button  
        modifier="large"
        @click="onClick"
        >
        Preview Profile
        </v-ons-button>

      <v-ons-progress-circular v-if="state && query" indeterminate></v-ons-progress-circular>
      
      <not-found v-if="errorMessage && query" />
      <div class="jumbotron" v-else>
      <v-ons-list 
        v-for='(repoName,key) in repos' 
        :key="key"
        v-if="repoName.id && query">
        <v-ons-header>Repo made by {{repoName.owner.login}}</v-ons-header>
        <v-ons-list-item>
          <img 
            class="card-img-left" 
            style="width: 5rem;" 
            :src="image" 
            alt="avatar"
            >{{repoName.name}}
        </v-ons-list-item>
      </v-ons-list>
      </div>

      <empty-state 
        v-if="!repos.length && query" 
        :type="query" 
        />
    </div>
  </v-ons-page>
</template>

<script>
import debounce from 'lodash/debounce'
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import {gitHubService} from './services/GitHub'
import EmptyState from './components/EmptyState.vue'
import NotFound from './components/NotFound.vue'
import Profile from './components/Profile.vue'

export default {
  components:{
    AppToolbar,
    AppSearch,
    EmptyState,
    NotFound
  },
  data(){
    return {
      query: '',
      repos:[],
      image:'',
      state: true,
      errorMessage: NaN,
      user: []
    }
  },
  methods: {
    getRepos: debounce(function(){
      gitHubService.getRepos(this.query)
      .then((response) =>{
      this.repos = response.data,
      this.repos.forEach(repo => {
        this.image = repo.owner.avatar_url,
        this.state = false
        })
      }).catch((errors) => {
        this.errorMessage = errors.message
      })
    },500),
    onClick() {
        this.$emit('push-page', {
          extends: Profile,
          onsNavigatorProps: {
            user: this.repos
          }
        })
      }

  },
  watch:{
    query: function(){
      this.state = true
      this.errorMessage = NaN
      this.getRepos()
    }
  }

}
</script>

<style>

</style>
