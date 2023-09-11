import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogged: false}

  changeState = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="home">
        <div className="card">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout onClick={this.changeState} />
          ) : (
            <Login onClick={this.changeState} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
