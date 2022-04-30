import { Row } from 'react-bootstrap';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
    //from custom hook
    const [cars] = useCars()

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/addcar`)
    }

    return (
        <div className='container'>
            <h2 className='mt-5'>Total {cars.length} cars in stock</h2>
            <div className='d-flex justify-content-end'>
                <button onClick={handleNavigate} className='update-btn fs-5'>Add new item <IoIosAddCircleOutline /></button>
            </div>

            <div className=' my-4'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Cars;