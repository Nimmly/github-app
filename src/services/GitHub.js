import axios from 'axios'

const API_TOKEN = '9c56e39a45a5d56e4a55f53fc352a7a309684da9'

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