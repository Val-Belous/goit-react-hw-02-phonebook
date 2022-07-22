import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
