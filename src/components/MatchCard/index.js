import './index.css'

// Write your code here
const MatchCard = props => {
  const {x} = props
  const {result, id, competingTeam, competingTeamLogo, matchStatus} = x
  const alt1 = `competing team ${competingTeam}`
  let style = ''
  if (matchStatus === 'Lost') {
    style = 'red-style'
  } else {
    style = 'green-style'
  }
  return (
    <li className="team-container">
      <img src={competingTeamLogo} className="img-opp-logo" alt={alt1} />
      <p className="comp-team-head">{competingTeam}</p>
      <p className="comp-team-para">{result}</p>
      <p className={style}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
