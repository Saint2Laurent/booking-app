export function isEmpty(t){
    if(t === '' || t === null || t === undefined || typeof t === "undefined"){
        return true
    }else{
        return false
    }
}