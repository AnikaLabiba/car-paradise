import { Row } from 'react-bootstrap';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { VscTrash } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import ReactModal from '../ReactModal/ReactModal';
import { useRef, useState } from 'react';

const Cars = () => {
    //from custom hook
    const [cars, setCars] = useCars()


    //navigate to add new car
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/addNewCar`)
    }

    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        //Update
        nameProduct: ""
    });

    const idCarRef = useRef()

    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };


    const handleDelete = id => {
        handleDialog("Are you sure you want to delete?", true);
        idCarRef.current = id;

    }


    const areUSureDelete = (choose) => {
        if (choose) {
            const url = `http://localhost:5000/inventory/${idCarRef.current}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restCars = cars.filter(car => car._id !== idCarRef.current)
                        setCars(restCars)
                        alert('Item deleted.')
                        handleDialog("", false);
                    }
                })


        } else {
            handleDialog("", false);
        }
    };

    return (
        <div className='container'>
            <h2 className='mt-5'>Total {cars.length} cars in stock</h2>
            <div className='d-flex justify-content-end'>
                <button onClick={handleNavigate} className='update-btn fs-5 p-2'>Add new item <IoIosAddCircleOutline /></button>
            </div>

            <div className=' my-4'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}>
                            {/* sending btn as props */}
                            <button onClick={() => handleDelete(car._id)} className='update-btn fs-6'><span>Delete</span> <VscTrash /></button>
                        </Car>)
                    }
                </Row>
            </div>
            {dialog.isLoading && (
                <ReactModal
                    //Update
                    nameProduct={dialog.nameProduct}
                    onDialog={areUSureDelete}
                    message={dialog.message}
                />
            )}

        </div>
    );
};

export default Cars;