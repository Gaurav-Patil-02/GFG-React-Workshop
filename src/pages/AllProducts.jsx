import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList/ProductList';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(() => res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
  return (
    <div>
      <h1>All Products Page</h1>
      <ProductList products={products}/>
    </div>
  )
}

export default AllProducts
