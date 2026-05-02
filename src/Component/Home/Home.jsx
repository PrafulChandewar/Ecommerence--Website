import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'

const Home = () => {

    const [searchterm, setSearchTerm] = useState('');
    const [activePanal, setActivePanal] = useState(null);
    const [cart, setCart] = useState([]);
    const subTotal = cart.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    const totalItem = cart.reduce((acc, item)=>acc + item.quantity, 0);
    const shippingFees = totalItem * 2;
    const OrderTotal = subTotal + shippingFees;
       
     const handlescroll = ()=> {
      const section = document.getElementById('product-section');
      if(section) {
        section.scrollIntoView({behavior:'smooth'});
      };
     }

     const handlePanal = (tabName)=>{
      setActivePanal(prev=>(
        prev === tabName ? null : tabName
      ));
     }

     const handleClose = ()=> setActivePanal(null);

       
     const removeItem = (product)=>{
        setCart(cart.filter(item=> item.id !== product.id));
     }

     const quantityIncrement = (product)=>{
        setCart(cart.map(item=> item.id === product.id ?
          {...item, quantity: item.quantity + 1} : item
        ));
      }

     const quantityDrecrement = (product)=>{
        setCart(cart.map(item=> item.id === product.id && item.quantity > 1 ?
          {...item, quantity: item.quantity - 1} : item
        ));
        
     }

     const addToCart =(product)=>{
      const alredyAdded = cart.find(item=> item.id === product.id);
         if(alredyAdded){
          alert('Item is already in the cart')
          return;
         }
           setCart([...cart, {...product, quantity: 1}]);
     }

  return (
    <div>
     <Navbar
      handlescroll={handlescroll} 
      setSearchTerm={setSearchTerm}
      handlePanal={handlePanal}
      totalItem={totalItem}
      />

     <Banner/>

     <Product 
     searchterm={searchterm}
     addToCart={addToCart}/>

     <Cart
      activePanal={activePanal}
      handleClose={handleClose}
      cart={cart}
      removeItem={removeItem}
      quantityIncrement={quantityIncrement}
      quantityDrecrement={quantityDrecrement}
      subTotal={subTotal}
      shippingFees={shippingFees}
      OrderTotal={OrderTotal}
      />

     <Wishlist 
     activePanal={activePanal}
     handleClose={handleClose}/>
   
    </div>
  )
}


export default Home