import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Notification from './components/Notification'
import personService from './services/personService'

function App(){
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState("")
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
  }, [])
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App
