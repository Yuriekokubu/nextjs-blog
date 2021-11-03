import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: true === 'success',
      })}
    >
      {children}
    </div>
  );
}
