const API_STRING="http://localhost:7070/eilat"
export default function getAllDetelsFromEilatApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export default function getAllOrderFromEilattApi(){
    try {
        return  fetch(API_STRING/"getAllOrderFromEilat").then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}