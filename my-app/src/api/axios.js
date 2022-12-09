import axios from 'axios'

export default axios.create({
    baseUrl: 'http://localst:3001'
});