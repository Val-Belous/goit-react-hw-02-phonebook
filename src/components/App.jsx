import { Component } from 'react';
import { FilterUsers } from './FilterUsers/FilterUsers';
import { Form } from './Form/Form';
import { UsersList } from './UsersList/UsersList';

export class App extends Component {
  state = {
    users: [],
    filter: '',
  };

  addUserData = user => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  handlerFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getVisibleUsers = () => {
    const { users, filter } = this.state;
    return users.filter(user => user.name.includes(filter));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Form addUserData={this.addUserData} />
        <FilterUsers filter={filter} handlerFilter={this.handlerFilter} />
        <UsersList usersList={this.getVisibleUsers()} />
      </>
    );
  }
}
