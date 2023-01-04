import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'
import db from "../../firebase";
import Order from '../components/Order';
import moment from "moment";

function Orders({ orders }) {
    const {data : session} = useSession();
  return (
    <div>
        <Header />
        <main className='max-w-screen-lg mx-auto p-5'>
            <h1 className='text-3xl border-b mb-1 pb-4 border-purple-300'>Your Orders</h1>

            {session ? (
                <h2>{orders.length} Orders </h2>
            ) : (
                <h2>Sign In to View Orders</h2>
            )}

            <div className='mt-4 space-y-5'>
                {orders?.map(({id, amount, items, timestamp, images}) => (
                    <Order 
                        key={id}
                        id={id}
                        amount={amount}
                        items={items}
                        timestamp={timestamp}
                        images={images}
                    />
                )
                )}
            </div>

        </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const session = await getSession(context);
    if(!session){
        return {
            props: {},
        };
    }
    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return{
        props: {
            orders,
        }
    }
}