import { useEffect, useState } from "react"

const useCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://mysterious-retreat-05451.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return [cars, setCars]
}
export default useCars;