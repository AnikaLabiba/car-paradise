import { useEffect, useState } from "react"

const useSingleCar = id => {
    const [car, setCar] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])

    return [car, setCar]
}
export default useSingleCar;