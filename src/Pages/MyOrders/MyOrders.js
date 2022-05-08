import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email
            const url = `http://localhost:5000/order?email=${email}`
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setOrders(data)
                    })
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
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
            <Fade top>
                <h2 className='text-center my-4'>You have {orders.length} orders</h2>
            </Fade>
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