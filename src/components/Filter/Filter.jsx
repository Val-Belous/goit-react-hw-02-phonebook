import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';

export const Filter = ({ handlerFilter }) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
};
