import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeContact } from '../redux/ContactsSlice'
import styled from 'styled-components'
import { RootState } from '../redux/store'
import { Contact } from '../types'

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  margin: 10px 0;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`

interface ContactListProps {
  setContactToEdit: (contact: Contact) => void
}

const ContactList: React.FC<ContactListProps> = ({ setContactToEdit }) => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleEdit = (contact: Contact) => {
    setContactToEdit(contact)
  }

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }

  return (
    <ListWrapper>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong> <br />
            {contact.email} <br />
            {contact.phone}
          </div>
          <div>
            <Button onClick={() => handleEdit(contact)}>Editar</Button>
            <Button onClick={() => handleRemove(contact.id)}>Remover</Button>
          </div>
        </ListItem>
      ))}
    </ListWrapper>
  )
}

export default ContactList
