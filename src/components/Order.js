import React from 'react'

function Order({id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-8 p-5 bg-purple-100 text-sm'>
            <p className='text-xs'>ORDER PLACED</p>

        </div>
        <div>
            <p className='text-xs font-medium'>TOTAL</p>
            <p>
                <Currency quantity={amount} />
            </p>

            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1'>{items.length} Items</p>

            <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
            Order # {id}
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