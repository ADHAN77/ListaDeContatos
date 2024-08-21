import React, { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import styled from 'styled-components'
import { Contact } from './types'

const AppWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const App: React.FC = () => {
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)

  return (
    <AppWrapper>
      <h1>Lista de Contatos</h1>
      <ContactForm
        contactToEdit={contactToEdit}
        setContactToEdit={setContactToEdit}
      />
      <ContactList setContactToEdit={setContactToEdit} />
    </AppWrapper>
  )
}

export default App
