import { useState } from 'react'

const useCart = car => {
    const [cart, setCart] = useState([])

    if (cart.indexOf(car) === -1) {
        const newCart = [...cart, car]
        setCart(newCart)
    }
    else {
        alert('This is already selected')
    }
    return [cart, setCart]

}
export default useCart;