import axios from "axios";

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(({ data }) => resolve(data))
            .catch((error) => reject(error));
    });
}

export { post }