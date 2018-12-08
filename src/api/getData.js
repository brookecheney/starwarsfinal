import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'aplication/json'
  }
})

export default{
  getPlanets() {
    return apiClient.get('/planets')
  },
  getCharacters() {
    return apiClient.get('/people')
  }

}