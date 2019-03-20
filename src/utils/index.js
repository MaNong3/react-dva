export function setSession(data,opt){
    return sessionStorage.setItem(data,opt)
}

export function getSession(data){
    return sessionStorage.getItem(data)
}
