import axios from 'axios'

const api = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  headers: {
    Authorization: "Bearer 3LkSsFnYcN5W0vvZXTVy"
  }
})

export default api