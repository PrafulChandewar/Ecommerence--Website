import React from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";


const Cart = ({activePanal, handleClose, cart, removeItem, quantityIncrement, quantityDrecrement, subTotal, shippingFees, OrderTotal }) => {
  return (
    <div className={` flex flex-col justify-between gap-5 bg-zinc-100 fixed right-0 top-0 bottom-0 z-40 left-auto w-100 
    border-l border-zinc-100 py-7 transform transition-transform duration-200 ${activePanal === 'cart' ? 'translate-x-0': 'translate-x-full'} `}>
       <div >
        <h3 className='text-3xl font-bold text-zinc-800 text-center'> Your Cart</h3>
       </div>

       <div className='flex-1 flex flex-col gap-2 overflow-y-auto scroll'>
         {cart.length === 0 ?
         <p className='text-zinc-800 text-center text-2xl '>Your cart is empty</p>:(
            cart.map((product, index)=>{
                return(
                     <div className={` flex items-center gap-3 px-5 py-1 border-y border-zinc-300 
                     ${index % 2 === 0 ? 'bg-blue-100': 'bg-white'}`}>
            <div className='w-20 h-20'>
                <img src={product.image} className='w-full h-full object-contain'/>
            </div>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h4 className='font-semibold text-zinc-800 text-lg'>{product.name}</h4>
                    <button className='w-8 h-8 bg-red-600 rounded-full text-white flex justify-center 
                    items-center mr-7 cursor-pointer' onClick={()=>removeItem(product)}>
                        <FaTrash/></button>
                </div>

                <div className='flex justify-between'>
                    
                    <div className='mt-1 mb-5'>
                        {  (product.onSale) && (
                             <span className=' text-zinc-600 text-lg font-semibold line-through mr-5'>${(product.oldPrice ?? 0).toFixed(2)}</span>
                        )

                        }
                        <span className=' text-red-600 text-lg font-semibold'>${(product.price ?? 0).toFixed(2)}</span>
                    </div>


                    <div className='flex gap-2' >
                        <button className='w-7 h-7 bg-blue-600 rounded-full text-white
                         flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-800'
                         onClick={()=>quantityDrecrement(product)}>
                            <FaMinus/>
                        </button>
                        <span>{product.quantity}</span>
                        <button className='w-7 h-7 bg-blue-600 rounded-full text-white 
                        flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-800'
                        onClick={()=>quantityIncrement(product)}>
                            <FaPlus/>
                        </button>
                    </div>
                </div>
            </div>

          </div>

                )
            })
         )}

       </div>

       <div className='px-10 border-y border-zinc-300'>
        <div className='flex justify-between pt-2'>
           <span className='text-zinc-800'>Subtotal</span>
           <span className='text-zinc-800'>${subTotal.toFixed(2)}</span>
        </div>
        <div className='flex justify-between py-2'>
           <span className='text-zinc-800'>Shipping & Handling</span>
           <span className='text-zinc-800'>${shippingFees.toFixed(2)}</span>
        </div>
        <div className='flex justify-between py-2 border-t border-zinc-300'>
           <span className='text-blue-600 text-lg font-bold'>Order Total</span>
           <span className='text-blue-600 text-lg font-bold'>${OrderTotal.toFixed(2)}</span>
        </div>
       </div>

       <div className=' flex gap-x-2 px-10'>
        <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-800' onClick={handleClose}>
            Close</button>
        <button className={` text-white flex-1 h-[7vh] active:bg-blue-800 
        ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 cursor-pointer'}`}
        disabled={cart.length == 0}>
            CheckOut</button>
       </div>
      

    </div>
  )
}

export default Cart