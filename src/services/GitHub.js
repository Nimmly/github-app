import axios from 'axios'

const API_TOKEN = '88db4c2b817087c56e97326022760e7961b69b41'

export default class GitHubService {
    constructor(){
        axios.defaults.baseURL = 'https://api.github.com/'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + API_TOKEN
    }

    getRepos(username){
        return axios.get(`users/${username}/repos`)
    }
}

export const gitHubService = new GitHubService() 