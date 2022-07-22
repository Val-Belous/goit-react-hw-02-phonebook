import styles from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.listItem} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
