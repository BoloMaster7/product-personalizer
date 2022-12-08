import styles from './Product.module.scss';
//import clsx from 'clsx';
//import Button from '../Button/Button';
import PropTypes from 'prop-types'; 
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

   const cardData ={
     name: props.title,
     price: getPrice(),
     size: currentSize,
     color: currentColor

  }

  function getPrice() {
    return  props.basePrice+ currentPrice;
   }
 

return(
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} 
      />
         <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
                 colors={props.colors}
                 actionColor={setCurrentColor}
                 currentColor={currentColor}
                 size={props.size}
                 actionSize={setCurrentSize}
                 currentSize={currentSize}
                 cardData={cardData}
                 onClick={props.onClick}
                 price={currentPrice}
                 additionalPrice={setCurrentPrice}
                 sizes={props.sizes}
                 type={props.type}
      />
      </div>
    </article>
);
  }    

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  // color: PropTypes.string,
  // sizes: PropTypes.string,
  basePrice: PropTypes.number,
}

export default Product;