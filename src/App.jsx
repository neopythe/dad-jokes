import React, { Component } from 'react'

import JokeList from './JokeList'

export default class App extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <JokeList />
      </div>
    )
  }
}
