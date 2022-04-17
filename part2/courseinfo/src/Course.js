function Header({name}) {
    return (
      <h1>{name}</h1>
    );
  }
function Content(props) {
    return(
        <div>
        {props.parts.map(part =>
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
        )}
        </div>
    );
}
function Total({parts}) {
    const total = parts.reduce(
    (s, p) => s + p.exercises, 0
    )
    return (
    <p>Number of exercises {total}</p>
    );
}

function Part(props){
    return(
    <p>
        {props.part} {props.exercises}
    </p>
    );
}

function Course({course}){
    return (
        <div>
        <Header name={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        </div>
    );
}

export default Course;