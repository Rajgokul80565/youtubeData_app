import axios from 'axios';

const KEY = 'AIzaSyA2d1vzSo89SeqEFPqh7VzuYpNgtn6ZQcU'

export default axios.create({
    baseUrl: 'http://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:3,
        key: KEY
    }
})