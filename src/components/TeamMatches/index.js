import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {imgUrl: '', list1: [], list2: [], isloading: true, bgimg: ''}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({bgimg: id})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const data1 = data.team_banner_url
    const x = data.latest_match_details
    const data2 = {
      umpires: x.umpires,
      result: x.result,
      manOfTheMatch: x.man_of_the_match,
      id: x.id,
      date: x.date,
      venue: x.venue,
      competingTeam: x.competing_team,
      competingTeamLogo: x.competing_team_logo,
      firstInnings: x.first_innings,
      secondInnings: x.second_innings,
      matchStatus: x.match_status,
    }
    const z = data.recent_matches
    const data3 = z.map(y => ({
      umpires: y.umpires,
      result: y.result,
      manOfTheMatch: y.man_of_the_match,
      id: y.id,
      date: y.data,
      venue: y.venue,
      competingTeam: y.competing_team,
      competingTeamLogo: y.competing_team_logo,
      firstInnings: y.first_innings,
      secondInnings: y.second_innings,
      matchStatus: y.match_status,
    }))
    this.setState({imgUrl: data1, list1: data2, list2: data3, isloading: false})
    console.log(data1)
  }

  render() {
    const {imgUrl, list1, list2, isloading, bgimg} = this.state
    const a = `b-${bgimg}`
    const mainclass1 = `background-container ${a}`
    return (
      <div className={mainclass1}>
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <img className="card-img" src={imgUrl} alt="team banner" />

            <LatestMatch list1={list1} key={list1.id} />
            <ul className="main-list">
              {list2.map(x => (
                <MatchCard x={x} key={x.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
