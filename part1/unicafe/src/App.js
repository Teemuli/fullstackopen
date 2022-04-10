import { useState } from 'react'

function StatisticLine({name, value}){
    return (
      <tr>
        <th align="left">{name}</th>
        <th align="left">{value}</th>
      </tr>
    );
}

function Button(props){
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

function Header(props) {
  return (
    <h1>{props.name}</h1>
  );
}

function Statistics ({good, neutral, bad}){
  if(good === 0 && neutral === 0 && bad === 0){
      return(<p>No feedback given</p>);
  }
  return(
    <table>
      <tbody>
      <StatisticLine name={"good"} value={good} />
      <StatisticLine name={"neutral"} value={neutral} />
      <StatisticLine name={"bad"} value={bad} />
      <StatisticLine name={"all"} value={good+neutral+bad} />
      <StatisticLine name={"avg"} value={(good-bad)/(good+neutral+bad)} />
      <StatisticLine name={"positive"} value={((good)/(good+neutral+bad))*100+"%"} />
      </tbody>
    </table>
  );
}
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = newValue => {
    setGood(newValue);
  }

  const setNeutralValue = newValue => {
    setNeutral(newValue);
  }

  const setBadValue = newValue => {
    setBad(newValue);
  }

  return (
    <div>
      <Header name={"give feedback"} />
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <Header name={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App