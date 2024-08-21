import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../redux/ContactsSlice'
import styled from 'styled-components'
import { Contact } from '../types'

const FormWrapper = styled.div`
  margin: 20px 0;
`

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`

interface ContactFormProps {
  contactToEdit: Contact | null
  setContactToEdit: (contact: Contact | null) => void
}

const ContactForm: React.FC<ContactFormProps> = ({
  contactToEdit,
  setContactToEdit
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name)
      setEmail(contactToEdit.email)
      setPhone(contactToEdit.phone)
    }
  }, [contactToEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const contact: Contact = {
      id: contactToEdit ? contactToEdit.id : Date.now(),
      name,
      email,
      phone
    }

    if (contactToEdit) {
      dispatch(editContact(contact))
      setContactToEdit(null)
    } else {
      dispatch(addContact(contact))
    }

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Button type="submit">{contactToEdit ? 'Editar' : 'Adicionar'}</Button>
      </form>
    </FormWrapper>
  )
}

export default ContactForm
