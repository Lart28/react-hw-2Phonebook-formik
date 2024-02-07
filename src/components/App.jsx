import { Component } from "react";
import Contacts from "./Contacts";
import Filter from "./Filter";
import Form from "./Form";
import { nanoid } from "nanoid";
import { Title, Title2} from "./App.styled";

export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  contactId = nanoid();

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }
  
  formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    const contactNames = this.state.contacts.map(contact => contact.name);
    contactNames.includes(data.name) ?
      alert(`${data.name} is already in contacts.`) :
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts]
      }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandler} />
        <Title2>Contacts</Title2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <Contacts contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </>
    )
  }
}