import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:5001/simposio-df298/us-central1/api'
})

export default api