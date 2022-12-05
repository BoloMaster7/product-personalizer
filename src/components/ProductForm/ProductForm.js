import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types'; 
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
 
  return (
<form>
        <OptionColor
        colors={props.colors}
        action={props.actionColors}
        currentColor={props.currentColor}
        />

        <OptionSize
        sizes={props.sizes}
        action={props.action}
        additionalPrice={props.additionalPrice}
        currentSize={props.currentSize}

        />

        
        <Button 
        button={props.button}
        onClick={(e) => {e.preventDefault(); 
         
      }} 
        className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>

    
  );
};

ProductForm.propTypes={
  colors: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  additionalPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,


};

export default ProductForm;