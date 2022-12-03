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

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li>
                  <button
                    type="button"
                    onClick={() => {setCurrentSize(size.name); setCurrentPrice(size.additionalPrice)}}
                    className={clsx(size.name === currentSize && styles.active)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => (
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentColor(color)}
                    className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                  />
                </li>
              ))}
            </ul>
          </div>          
          <Button onClick={(e) => {e.preventDefault(); console.log('cardData', cardData)}} 
          className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  // color: PropTypes.string,
  // sizes: PropTypes.string,
  basePrice: PropTypes.number,
}

export default Product;