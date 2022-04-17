function Person({name, number}){
    return (
        <p>{name} {number}</p>
    )
}

function Persons({persons, filter}){
    const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(filter))
    return (
        <div>
        {personsFiltered.map(person => 
        <Person key={person.name} name={person.name} number={person.number}/>
        )}
        </div>
    )
}

export default Persons;