import { useState } from 'react'

function Filter({persons, personsFiltered, setPersonsFiltered}){
    const [newFilter, setNewFilter] = useState('')

    const handleFilterChange = (event) => {
        const filter = event.target.value.toLowerCase()
        setNewFilter(filter)
        setPersonsFiltered(persons.filter(person => person.name.toLowerCase().includes(filter)))
    }

    return (
        <div>
        filter shown with: <input value={newFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter;