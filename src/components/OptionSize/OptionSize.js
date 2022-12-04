import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';


const OptionSize = props => {
  return (
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
  );
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
};