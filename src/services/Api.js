import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8000/api/' || process.env.baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
}
