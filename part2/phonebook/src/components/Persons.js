import personService from '../services/personService'

function Button(props){
    return(
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    );
  }

function Person({name, number}){
    return (
        <p>{name} {number}</p>
    )
}

function Persons({persons, filter, setPersons}){
    const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(filter))

    const deletePerson = (id, name) => {
        if(window.confirm("Delete " + name + "?"))
        personService
            .deleteItem(id)
            .then(result => {
                console.log(result)
                setPersons(persons.filter(person => person.id !== id))
            })
    }

    return (
        <div>
            {personsFiltered.map(person =>
                <div key={"div-"+person.name}>
                <Person key={person.name} name={person.name} number={person.number} id={person.id}/>
                <Button key={"button-"+person.name} handleClick={() => deletePerson(person.id, person.name)} text="delete" />
                </div>
            )}
        </div>
    )
}

export default Persons;