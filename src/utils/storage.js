const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
}

const setStorage = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data))
}

export {getStorage,setStorage};
