import axios from "axios";

const KEY = "AIzaSyC6QmzB7EDj_OxU_1F-CKobpufBWAEzCxA";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    },
    headers:{}
})
