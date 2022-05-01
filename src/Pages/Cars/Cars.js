import { Row } from 'react-bootstrap';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { VscTrash } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
    //from custom hook
    const [cars, setCars] = useCars()

    //navigate to add new car
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/addcar`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('You want to delete the item?')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    id(data.deletedCount > 0)
                    const restCars = cars.filter(car => car._id !== id)
                    setCars(restCars)
                    alert('Item deleted.')
                })
        }
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
                            car={car}>
                            {/* sending btn as props */}
                            <button onClick={() => handleDelete(car._id)} className='update-btn'><span>Delete</span> <VscTrash /></button>
                        </Car>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Cars;