import moment from 'moment';
import React from 'react'
import Currency from "react-currency-formatter";

function Order({id, amount, items, timestamp, images}) {
  return (
    <div className='relative border rounded-md'>
        <div className='flex font-medium items-center space-x-8 p-5 bg-purple-100 text-sm text-gray-700'>
            <div>
                <p className='text-xs'>ORDER PLACED</p>
                <p>{moment.unix(timestamp).format('DD/MM/YYYY')}</p>
            </div>
            <div>
                <p className='text-xs font-medium'>TOTAL</p>
                <p>
                    <Currency quantity={amount} />
                </p>

            </div>
            <p className='text-xs whitespace-nowrap sm:text-lg self-end flex-1 text-right text-purple-500'>{items.length} items</p>

            <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
            Order ID: # {id}
            </p> 
        </div>
                
        <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-x-auto'>
                {images.map(image => (
                    <img src={image} className='h-20 object-contain sm:h-32' />
                ))}
            </div>
        </div>

        

    </div>


  )
}

export default Order