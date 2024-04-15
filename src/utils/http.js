import axios from "axios";
import { getStorage } from "./storage";

axios.interceptors.request.use((config) => {
    const auth = getStorage('Token');
    console.log(auth)
    if(auth?.token){
        config.headers.Authorization = 'Bearer ' + auth.token;
    }
    console.log(config.headers.Authorization)
    return config;
});

const get = (url) => {
    return new Promise ((resolve, reject) => {
        axios.get(url)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error));
    })
}
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(({ data }) => resolve(data))
            .catch((error) => reject(error));
    });
}

export { post, get }
