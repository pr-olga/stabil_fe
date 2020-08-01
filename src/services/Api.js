import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://localhost:8000/api/' || process.env.baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'api-key': process.env.VUE_APP_API_KEY
    }
  })
}
