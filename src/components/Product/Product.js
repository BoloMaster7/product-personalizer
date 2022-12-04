import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types'; 
import { useState } from 'react';


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
  //  console.log('getPrice', getPrice)

 
    <article className={styles.product}>
      
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
        
          <Button onClick={(e) => {e.preventDefault(); console.log('cardData', cardData)}} 
          className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
          

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  // color: PropTypes.string,
  // sizes: PropTypes.string,
  basePrice: PropTypes.number,
}

export default Product;