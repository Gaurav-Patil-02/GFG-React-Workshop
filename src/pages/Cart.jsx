import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import CartItem from '../components/CardItem/CardItem';
import { Button, Grid, Typography } from '@mui/material';
const Cart = () => {
  const {cart} = useContext(CartContext);
  const totalAmount = cart.reduce((sum, item) => sum + item.price *  item.qty, 0)
  return (
    <div>
      <Grid container spacing={50}>
        <Grid item>
      {
        cart.map((item,index) => {
          return <CartItem
          key = {index}
           title = {item.title}
           image = {item.image}
           discription = {item.discription}
           price = {item.price}
           qty = {item.qty}
           />
        })
      }
      </Grid>
      <Grid item>
        <h1>Order Details</h1>
        <Typography variant='h5' gutterBottom>
          Total Amount: {totalAmount.toFixed(2)}
        </Typography>
        <Button variant='outlined'>Checkout</Button>
      </Grid>
      </Grid>
    </div>
  )
}

export default Cart