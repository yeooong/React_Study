import axios from "axios";

// axios.get 혹은 axios.post와 같은 방식으로 API를 호출하는 것은 
// (log같은) intercepter처리를 하지 않은 순수한 axios instance를 이용해서 API를 요청 하는 것

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

export default instance;