import { Component } from "react";
import Contacts from "./Contacts";
import Filter from "./Filter";
import Form from "./Form";
import { nanoid } from "nanoid";
import { Title, Title2 } from "./App.styled";

const LS_KEY = 'phonebook-contacts';

export class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  contactId = nanoid();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } 
  }

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
    console.log('(👉ﾟヮﾟ)👉:', this.state.contacts)
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