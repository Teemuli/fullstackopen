import { useState } from 'react'

function PersonForm({persons, setPersons}){
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
        setPersons(persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1
        }))
        setNewName("")
        setNewNumber("")
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