import PropTypes from 'prop-types';

export const UsersList = ({ usersList }) => {
  return (
    <ul>
      {usersList.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
