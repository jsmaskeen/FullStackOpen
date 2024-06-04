import { useState } from 'react'

const Button = ({text,hclick}) =>{
  return (
    <>
      <button onClick={hclick}>{text}</button>
    </>
  )
}

const Header = ({ name }) => { return <><h1>{name}</h1><br></br></> }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const next_anec = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote_it = () => {
    const cp = [...votes]
    cp[selected]+=1
    setVote(cp)
  }

  const most_voted = () => {
    let max_idx = 0;
    let max_votes = votes[0];
    for(let i=1;i<anecdotes.length;i++){
      if (votes[i] > max_votes) {
        max_idx = i
        max_votes = votes[i]
      }
    }
    return max_idx
  }

  return (
    <div>
      <Header name="Anecdote of the day"></Header>
      {anecdotes[selected]}<br></br>
      has {votes[selected]} votes
      <br></br>
      <Button text="vote" hclick={vote_it}></Button>
      <Button text="next anecdote" hclick={next_anec}></Button>
      <Header name="Anecdote with most votes"></Header>
      {anecdotes[most_voted()]}<br></br>
      has {votes[most_voted()]} votes
    </div>
  )
}

export default App