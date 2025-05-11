import React from "react";
import Product from "../Product/Product";
import { Grid } from "@mui/material";
const ProductList = (props) => {
  return (
    <div>
      <h1>Product List</h1>
      <Grid container spacing={2}>
        {props.products.map((products) => {
          return (
            <Grid key={products.id} size={{ xs: 12, mid: 6, lg: 3 }}>
              <Product
                key={products.id}
                title={products.title}
                price={products.price}
                image={products.image}
                description={props.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
