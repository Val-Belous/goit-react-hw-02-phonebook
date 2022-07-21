export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
