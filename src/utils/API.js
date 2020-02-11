import axios from 'axios'

export default axios.create({
  baseURL: 'https://wasteless.bboa14171205.nctu.me',
  responseType: 'json'
})

