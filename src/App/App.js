import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './App.scss'

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <h1 className="App-title">Scaffold</h1>
          <div>hello</div>
        </header>
        <p>What's up!</p>
        <div>
          {this.state.users.map(user => <div key={user.name}>{user.name}</div>)}
        </div>
      </div>
    )
  }
}

export default App
