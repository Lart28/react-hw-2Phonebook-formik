import { Button, Text, List } from "./Contacts.styled";

const Contacts = ({ contacts, onDeleteContact }) => {
  if (contacts.length !== 0) {
  return (
    <List>
      {contacts.map(({ id, name, number}) => (
        <li key={id}>
          <Text>{name}<br></br> {number}</Text>
          <Button type="button" onClick={( ) => onDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </List>)
  }
}

export default Contacts;