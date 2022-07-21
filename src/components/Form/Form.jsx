import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    const user = { ...this.state, id };
    this.props.addUserData(user);
  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Lol</button>
        </form>
      </>
    );
  }
}
