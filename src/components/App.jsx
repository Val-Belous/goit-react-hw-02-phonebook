import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addUserData = user => {
    if (
      this.state.contacts.some(
        option => option.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (
      this.state.contacts.some(
        option => option.number.toLowerCase() === user.number.toLowerCase()
      )
    ) {
      alert(`${user.number} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  getContactList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(user => user.name.includes(filter));
  };

  handlerFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Form addUserData={this.addUserData} />
          <h2>Contacts</h2>
          <Filter handlerFilter={this.handlerFilter} />
          <ContactList
            contactList={this.getContactList()}
            onDelete={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
