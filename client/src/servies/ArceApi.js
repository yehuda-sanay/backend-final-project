const API_STRING="http://localhost:7070/Arce"
export default function getArceApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}