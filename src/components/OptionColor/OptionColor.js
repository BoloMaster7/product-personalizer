import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';


const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
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
         
  )
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor;