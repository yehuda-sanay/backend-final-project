const API_STRING="http://localhost:7070/BeerShava/"
export function getAllDetelsFromBeerShavaApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllOrderFromBeerShavatApi(){
    try {
        return  fetch(`${API_STRING}getAllOrderFromBeerShava`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderPurcaseErrorBeerShavaApi(){
    try {
        return  fetch(`${API_STRING}getAllCoffeeOrderPurcaseErrorBeerShava`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderClientDeclinedBeerShavaApi(){
    try {
        return  fetch(`${API_STRING}getAllCoffeeOrderClientDeclinedBeerShava`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderProfitBeerShavaApi(){
    try {
        return  fetch(`${API_STRING}getAllCoffeeOrderProfitBeerShava`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
// export function getOrderByDay1BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay1BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay2BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay2BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay3BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay3BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay4BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay4BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay5BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay5BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay6BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay6BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export function getOrderByDay7BeerShavaApi(){
//     try {
//         return  fetch(`${API_STRING}getOrderByDay7BeerShava`).then(res=>res.json())
        
//     } catch (error) {
//         console.log(error)
//     }
// }

export function addOrderFromBeerShavaApi(){
    try {
        return  fetch(`${API_STRING}addOrderFromBeerShava`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}