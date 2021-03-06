import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'

export default () => {
  return axios.create({
    baseURL: 'https://shrouded-coast-76670.herokuapp.com/api/' || process.env.baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      timeout: 1000,
      'api-key': process.env.VUE_APP_API_KEY
    },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter)
  })
}
