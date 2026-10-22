import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'  
import type { Votes, VoteType } from '../../types/votes'

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  function handleVote(type: VoteType) {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };
  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={votes.good > 0 || votes.neutral > 0 || votes.bad > 0} />
        <VoteStats
          
          votes={votes}
          totalVotes={ votes.good + votes.neutral + votes.bad }
          positiveRate={votes.good + votes.neutral + votes.bad > 0
    ? Math.round((votes.good / (votes.good + votes.neutral + votes.bad)) * 100)
    : 0} />

    </div>

    </>
  )
}

export default App
