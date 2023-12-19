import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {x} = props
  const {id, name, teamImageUrl} = x

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-container1">
        <img src={teamImageUrl} className="img-size" alt={name} />
        <p className="list-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
