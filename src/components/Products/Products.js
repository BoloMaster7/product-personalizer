import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import data from '../../data/products';

const Products = () => {
  const [products]  = useState(productsData);
//console.console.log(data);
  return (
    <section> 
        {products.map((data) => (
          <Product key={products.name}
            {...data}
          />
        ))}
    </section>
  );
};

export default Products;