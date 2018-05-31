<template>
  <v-ons-page>
    <app-toolbar />
    <div class="content">
      <app-search :query.sync="query" placeholder="Search Term" />
      <v-ons-progress-circular v-if="state && query" indeterminate></v-ons-progress-circular>
    
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
  </v-ons-page>
</template>

<script>
import debounce from 'lodash/debounce'
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import {gitHubService} from './services/GitHub'
import EmptyState from './components/EmptyState.vue'

export default {
  components:{
    AppToolbar,
    AppSearch,
    EmptyState
  },
  data(){
    return {
      query: '',
      repos:[],
      image:'',
      state: true
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
      })
    },500)

  },
  watch:{
    query: function(){
      this.state = true
      this.getRepos()
    }
  }

}
</script>

<style>

</style>
