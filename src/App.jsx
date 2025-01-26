
import './App.css'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import { useState } from 'react'

function App() {
  
const [contact, setContact] = useState(null)

  return (
    <>
    <ContactList setContact = {setContact} />
    <ContactDetails contact = {contact} 
    />
    </>
  )
}

export default App

