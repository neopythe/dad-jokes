import React, { Component } from 'react'

import JokeList from './components/JokeList'

export default class App extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-[#DEF4FE]">
        <JokeList />
      </div>
    )
  }
}
