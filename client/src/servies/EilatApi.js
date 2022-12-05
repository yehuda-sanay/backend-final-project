const API_STRING="http://localhost:7070/eilat"
export function getAllDetelsFromEilatApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllOrderFromEilatApi(){
    try {
        return  fetch(`${API_STRING}/getAllOrderFromEilat`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderPurcaseErrorEilatApi(){
    try {
        return  fetch(`${API_STRING}/getAllCoffeeOrderPurcaseErrorEilat`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderClientDeclinedEilatApi(){
    try {
        return  fetch(`${API_STRING}/getAllCoffeeOrderClientDeclinedEilat`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}
export function getAllCoffeeOrderProfitEilatApi(){
    try {
        return  fetch(`${API_STRING}/getAllCoffeeOrderProfitEilat`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}

export function addOrderFromEilatApi(){
    try {
        return  fetch(`${API_STRING}/addOrderFromEilat`).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
    // export function getOrderByDay1EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay1Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay2EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay2Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay3EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay3Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay4EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay4Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay5EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay5Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay6EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay6Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // export function getOrderByDay7EilatApi(){
    //     try {
    //         return  fetch(`${API_STRING}getOrderByDay7Eilat`).then(res=>res.json())
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}
