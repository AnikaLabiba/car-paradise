import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h2>Availavle Cars {cars.length}</h2>
            <div className='container mb-5'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)}
                </Row>
            </div>
            {/* <Row xs={1} md={2} lg={2} classNameg='g-4 mx-auto'>
                {
                    cars.map(car => <Car
                        key={car._id}
                        car={car}
                    ></Car>)
                }
            </Row> */}
        </div>
    );
};

export default Cars;