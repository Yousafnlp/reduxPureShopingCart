

export const addToCart =(data)=>{

    return{
        type: "ADD_TO_CART",
        payload: data
       
    }
}



export const removeFromCart =(data)=>{

    return{
        type: "REMOVE_FROM_CART",
        payload: data
    }
}



export const emptyCart =()=>{

    return{
        type: "EMPATY_CART"
    }
}


export const addToCart_Detailed =(data, count)=>{

    return{
        type: "ADD_TO_CART_COUNTED",
        payload: {
            data: data,
            count: count
        }
    }
}