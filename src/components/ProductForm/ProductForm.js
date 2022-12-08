import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types'; 
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
 
  const summary = (e) => {
    e.preventDefault();
    console.log("cardData", props.cardData);
  }

  return (
<form>
        <OptionColor
        colors={props.colors}
        actionColor={props.actionColor}
        currentColor={props.currentColor}
        />

        <OptionSize
        size={props.size}
        sizes={props.sizes}
        action={props.actionSize}
        additionalPrice={props.additionalPrice}
        currentSize={props.currentSize}
        price={props.price}
        />

        
<Button type={"submit"} onClick={summary} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
      </form>

    
  );
};

ProductForm.propTypes={
  colors: PropTypes.array.isRequired,
  actionColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  actionSize: PropTypes.func.isRequired,
  additionalPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductForm;