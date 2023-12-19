// Write your code here
import './index.css'

const LatestMatch = props => {
  const {list1} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = list1
  const alt1 = `latest match ${competingTeam}`
  return (
    <>
      <h1 className="opp-name1">Latest Matches</h1>
      <div className="bg-card-opp">
        <div className="card-12">
          <div className="card-1">
            <p className="opp-name">{competingTeam}</p>
            <p className="opp-date">{date}</p>
            <p className="opp-details">{venue}</p>
            <p className="opp-details">{result}</p>
          </div>
          <div className="card-1">
            <img src={competingTeamLogo} className="opp-logo" alt={alt1} />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="card-2">
          <p className="opp-details">First Innings</p>
          <p className="opp-details">{firstInnings}</p>
          <p className="opp-details">Second Innings</p>
          <p className="opp-details">{secondInnings}</p>
          <p className="opp-details">Man Of The Match</p>
          <p className="opp-details">{manOfTheMatch}</p>
          <p className="opp-details">Umpires</p>
          <p className="opp-details">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
