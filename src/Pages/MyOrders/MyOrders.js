import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/order?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('You want to cancel the order?')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const newOrderList = orders.filter(order => order._id !== id)
                        setOrders(newOrderList)
                        toast('Order canceled.', {
                            position: toast.POSITION.TOP_CENTER
                        })
                    }
                })

        }
    }

    return (
        <div className='container'>
            <h2 className='text-center my-4'>You have {orders.length} orders</h2>
            {
                orders.map(order => <Orders key={order._id}
                    order={order}
                    handleDeleteOrder={handleDeleteOrder}>
                </Orders>)
            }
        </div>
    );
};

export default MyOrders;