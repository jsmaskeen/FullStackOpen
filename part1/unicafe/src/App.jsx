import { useState } from 'react'

const Header = ({ name }) => { return <><h1>{name}</h1></> }

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}


const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    </>
  )
}
const Stats = ({ g, n, b }) => {
  if (g + n + b == 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  let all = g + n + b
  return (
    <>
      <table>
        <tbody>
        <StatisticLine text="good" value={g} />
        <StatisticLine text="neutral" value={n} />
        <StatisticLine text="bad" value={b} />
        <StatisticLine text="all" value={g + n + b} />
        <StatisticLine text="average" value={(g - b) / all} />
        <StatisticLine text="positive" value={(g * 100) / all + " %"} />
        </tbody>
      </table>

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header name="give feedback"></Header>
      <Button text="good" onClick={() => setGood(good + 1)}></Button>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}></Button>
      <Button text="bad" onClick={() => setBad(bad + 1)}></Button>

      <Header name="statistics"></Header>
      <Stats g={good} n={neutral} b={bad}></Stats>
    </div>
  )
}

export default App