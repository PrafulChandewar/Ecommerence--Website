import React from 'react'
import GirlsPartyWear from "../../assets/girls-partywear.jpg";


const Wishlist = ({activePanal, handleClose}) => {
  return (
     <div className={` flex flex-col justify-between gap-5 bg-zinc-100 fixed right-0 top-0 bottom-0 z-40 left-auto w-100 
        border-l border-zinc-100 py-7 transform transition-transform duration-200 ${activePanal === 'wishlist' ? 'translate-x-0': 'translate-x-full'} `}>
           <div >
            <h4 className='text-3xl font-bold text-zinc-800 text-center'> Your Wishlist</h4>
           </div>
    
           <div className='flex-1'>
              <div className=' flex items-center gap-3 bg-white px-5 py-1 border-y border-zinc-300'>
                <div className='w-20 h-20'>
                    <img src={GirlsPartyWear} className='w-full h-full object-contain'/>
                </div>
                <div className='flex-1'>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold text-zinc-800 text-lg'>GirlsPartyWear</h4>
                        <p>Date</p>
                    </div>
    
                    <div className='flex justify-between'>
                        <span>$0.00</span>
                       <button className='bg-blue-600 text-white text-sm px-5 py-1.3 rounded-full active:bg-blue-800 cursor-pointer'>Add To Cart</button>
                    </div>
                </div>
    
              </div>
    
    
           </div>
    
          
    
           <div className=' flex gap-x-2 px-10'>
            <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-800' onClick={handleClose}>
                Close</button>
            <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-800'>
                Clear All</button>
           </div>
          
    
        </div>
  )
}

export default Wishlist