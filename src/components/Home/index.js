import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {updatedList: [], isLoading: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const data1 = data.teams
    const updatedData = data1.map(x => ({
      id: x.id,
      name: x.name,
      teamImageUrl: x.team_image_url,
    }))
    this.setState({updatedList: updatedData, isLoading: false})
  }

  render() {
    const {updatedList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="ipl-brand">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="list-style1">
            {updatedList.map(x => (
              <TeamCard key={x.id} x={x} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
