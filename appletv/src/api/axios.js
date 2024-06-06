import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoivedb.org/3",
    params : {
        api_key : "c6b4175a32a7a522d8a8b4e4590a2577",
        language : "ko-KR"
    }
})

export default instance;