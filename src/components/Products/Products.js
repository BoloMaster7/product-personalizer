import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import data from '../../data/products';

const Products = () => {
  const [products]  = useState(productsData);
console.console.log(data);
  return (
    <section> 
        {products.map((products) => (
          <Product key={products.name}
            {...products[0]}
          />
        ))}
    </section>
  );
};

export default Products;