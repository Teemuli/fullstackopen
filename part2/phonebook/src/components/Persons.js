function Person({name, number}){
    return (
        <p>{name} {number}</p>
    )
}

function Persons({persons}){
    return (
        <div>
        {persons.map(person => 
        <Person key={person.name} name={person.name} number={person.number}/>
        )}
        </div>
    )
}

export default Persons;