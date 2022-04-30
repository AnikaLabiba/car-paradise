import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>car details {id}</h2>
        </div>
    );
};

export default CarDetails;