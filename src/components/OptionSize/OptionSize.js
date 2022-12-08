import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';


const OptionSize = props => {
  return (
  <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => (
                <li key={index}>
                  <Button
                    type={'button'}
                    onClick={() => {props.action(size.name); 
                     props.additionalPrice(size.additionalPrice)}}
                    className={clsx(size.name === props.currentSize && styles.active)}
                  >
                    {size.name}
                    </Button>
                </li>
              ))}
            </ul>
          </div>
  );
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  additionalPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  
  
};

export default OptionSize;