import { useState } from 'react'
import personService from '../services/personService'

function PersonForm({persons, setPersons, setNotification}){
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        if(persons.filter(person => person.name === newName).length > 0){
            alert(`${newName} is already added to phonebook`)
            return
        }
        const lastPersonIndex = persons.length-1
        const newId = lastPersonIndex < 0 ? 1 : persons[lastPersonIndex].id + 1
        const personObject = {
            name: newName,
            number: newNumber,
            id: newId
        }
        
        personService
            .create(personObject)
            .then(result => {
                setPersons(persons.concat(result))
                setNotification("Added " + newName)
                setNewName("")
                setNewNumber("")
                setTimeout(() => {
                    setNotification(null)
                }, 5000)
            })
    }

    return (
    <form onSubmit={addName}>
        <div>
        name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
        <button type="submit" >add</button>
        </div>
    </form>
    )
}

export default PersonForm;