import React, { Component } from 'react'

import Joke from './Joke'

export default class JokeList extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <header className="flex flex-col items-center justify-center gap-8 w-[300px] h-[600px] bg-green-500">
          <h1 className="text-4xl font-bold text-white">Dad Jokes</h1>
          <p>😂</p>
          <button>new jokes</button>
        </header>
        <ul className="flex flex-col justify-center items-center h-[550px] w-[700px] bg-slate-100">
          <Joke />
          <Joke />
          <Joke />
          <Joke />
        </ul>
      </div>
    )
  }
}
