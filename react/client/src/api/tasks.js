import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:44344/api'
})