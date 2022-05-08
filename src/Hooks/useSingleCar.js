import { useEffect, useState } from "react"

const useSingleCar = id => {
    const [car, setCar] = useState({})

    useEffect(() => {
        const url = `https://mysterious-retreat-05451.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])

    return [car, setCar]
}
export default useSingleCar;