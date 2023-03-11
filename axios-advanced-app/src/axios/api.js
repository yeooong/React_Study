import axios from "axios";

// axios.get 혹은 axios.post와 같은 방식으로 API를 호출하는 것은 
// (log같은) intercepter처리를 하지 않은 순수한 axios instance를 이용해서 API를 요청 하는 것

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // 강제로 실패시켜서 오류 확인하기
    // axios 기본 설정 중에 timeout이라는 property가 있다.
    // axios 콜을 했을 때 얼마만큼 기다릴지를 설정할 수 있다. > 설정 시간 이후에도 반응(response)이 없으면 오류처리
    // timeout: 1,
});

instance.interceptors.request.use(

    // 요청을 보내기 전 수행되는 함수
    function(config){
        console.log('인터셉터 요청 성공!')
        return config;
    },

    // 오류 요청을 보내기 전 수행되는 함수
    function(error){
        console.log('인터셉터 요청 오류!')
        return Promise.reject(error);
    },
)

instance.interceptors.response.use(

    // 응답을 내보내기 전 수행되는 함수
    function(response){
        console.log("인터셉터 응답 받았습니다!");
        return response;
    },

    // 오류응답을 내보내기 전 수행되는 함수
    function(error){
        console.log("인터셉터 응답 오류 발생!");
        return Promise.reject(error);
    },
)

export default instance;