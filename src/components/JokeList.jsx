import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

import Joke from './Joke'
import LoadingSpinner from './LoadingSpinner'

const API_URL = 'https://icanhazdadjoke.com/'

const Logo = styled.img`
  &:hover {
    animation: 6s ease-in-out 0s infinite shake-slow;

    @keyframes shake-slow {
      0% {
        transform: translate(0px, 0px) rotate(0deg);
      }
      2% {
        transform: translate(5px, -6px) rotate(3.5deg);
      }
      4% {
        transform: translate(1px, -4px) rotate(2.5deg);
      }
      6% {
        transform: translate(-4px, -6px) rotate(0.5deg);
      }
      8% {
        transform: translate(2px, -9px) rotate(-0.5deg);
      }
      10% {
        transform: translate(5px, -5px) rotate(0.5deg);
      }
      12% {
        transform: translate(6px, 1px) rotate(0.5deg);
      }
      14% {
        transform: translate(5px, 2px) rotate(-1.5deg);
      }
      16% {
        transform: translate(8px, -6px) rotate(-0.5deg);
      }
      18% {
        transform: translate(-6px, -6px) rotate(3.5deg);
      }
      20% {
        transform: translate(-8px, 7px) rotate(-1.5deg);
      }
      22% {
        transform: translate(3px, 9px) rotate(1.5deg);
      }
      24% {
        transform: translate(-7px, 6px) rotate(3.5deg);
      }
      26% {
        transform: translate(9px, -5px) rotate(1.5deg);
      }
      28% {
        transform: translate(10px, 1px) rotate(-1.5deg);
      }
      30% {
        transform: translate(-8px, 5px) rotate(3.5deg);
      }
      32% {
        transform: translate(-9px, 5px) rotate(-1.5deg);
      }
      34% {
        transform: translate(-6px, 8px) rotate(0.5deg);
      }
      36% {
        transform: translate(6px, -2px) rotate(0.5deg);
      }
      38% {
        transform: translate(3px, 3px) rotate(3.5deg);
      }
      40% {
        transform: translate(6px, 10px) rotate(-1.5deg);
      }
      42% {
        transform: translate(2px, -2px) rotate(1.5deg);
      }
      44% {
        transform: translate(-6px, 8px) rotate(-0.5deg);
      }
      46% {
        transform: translate(-5px, 9px) rotate(-2.5deg);
      }
      48% {
        transform: translate(-4px, 2px) rotate(3.5deg);
      }
      50% {
        transform: translate(-9px, -3px) rotate(-1.5deg);
      }
      52% {
        transform: translate(3px, -2px) rotate(1.5deg);
      }
      54% {
        transform: translate(10px, 8px) rotate(3.5deg);
      }
      56% {
        transform: translate(7px, 8px) rotate(0.5deg);
      }
      58% {
        transform: translate(-4px, -3px) rotate(-0.5deg);
      }
      60% {
        transform: translate(9px, -4px) rotate(-1.5deg);
      }
      62% {
        transform: translate(-8px, -6px) rotate(1.5deg);
      }
      64% {
        transform: translate(-1px, -2px) rotate(3.5deg);
      }
      66% {
        transform: translate(0px, -8px) rotate(0.5deg);
      }
      68% {
        transform: translate(8px, -7px) rotate(0.5deg);
      }
      70% {
        transform: translate(3px, 4px) rotate(1.5deg);
      }
      72% {
        transform: translate(3px, 2px) rotate(1.5deg);
      }
      74% {
        transform: translate(-5px, -9px) rotate(0.5deg);
      }
      76% {
        transform: translate(1px, -8px) rotate(2.5deg);
      }
      78% {
        transform: translate(3px, 7px) rotate(-1.5deg);
      }
      80% {
        transform: translate(-9px, -4px) rotate(0.5deg);
      }
      82% {
        transform: translate(0px, -4px) rotate(-2.5deg);
      }
      84% {
        transform: translate(-7px, -3px) rotate(0.5deg);
      }
      86% {
        transform: translate(-8px, 6px) rotate(-1.5deg);
      }
      88% {
        transform: translate(3px, 4px) rotate(2.5deg);
      }
      90% {
        transform: translate(5px, 7px) rotate(2.5deg);
      }
      92% {
        transform: translate(2px, -8px) rotate(-2.5deg);
      }
      94% {
        transform: translate(-1px, -2px) rotate(-1.5deg);
      }
      96% {
        transform: translate(-4px, 10px) rotate(-1.5deg);
      }
      98% {
        transform: translate(10px, -9px) rotate(2.5deg);
      }
    }
  }
`

const Ul = styled.ul`
  scrollbar-width: thin;
`

export default class JokeList extends Component {
  static defaultProps = {
    jokesPerGet: 5,
  }

  constructor(props) {
    super(props)
    this.state = {
      jokes: JSON.parse(localStorage.getItem('jokes')) ?? [],
      loading: false,
    }
    this.seenJokes = new Set(this.state.jokes.map((joke) => joke.id))
    this.handleClick = this.handleClick.bind(this)
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    !this.state.jokes.length &&
      this.setState({ loading: true }, this.fetchJokes)
  }

  async fetchJokes() {
    try {
      const newJokes = []
      let promises = []

      while (newJokes.length < this.props.jokesPerGet) {
        while (promises.length < this.props.jokesPerGet) {
          promises.push(
            axios.get(API_URL, {
              headers: {
                Accept: 'application/json',
              },
            })
          )
        }

        const response = await Promise.all(promises)
        response.forEach(({ data: { id, joke, success } }) => {
          !newJokes.find((joke) => joke.id === id) &&
            !this.seenJokes.has(id) &&
            newJokes.push({ id, joke, score: 0 }) &&
            this.seenJokes.add(id)
        })
        promises = []
      }

      this.setState(
        {
          jokes: [...this.state.jokes, ...newJokes],
          loading: false,
        },
        () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      )
    } catch (err) {
      this.setState({ loading: false })
      alert(err)
    }
  }

  handleClick() {
    this.setState({ loading: true }, this.fetchJokes)
  }

  handleVote(id, delta) {
    this.setState(
      (state) => ({
        jokes: state.jokes.map((joke) =>
          joke.id === id ? { ...joke, score: joke.score + delta } : joke
        ),
      }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  render() {
    return (
      <main className="flex items-center w-4/5 h-4/5 select-none">
        <header className="flex flex-col items-center justify-center gap-10 w-1/3 min-w-[300px] h-full bg-green-500 shadow-xl">
          <h1 className="text-5xl font-bold text-white">
            Dad <span className="font-thin">Jokes</span>
          </h1>
          <Logo
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            className="w-3/5 rounded-full p-2 border-2 border-white shadow-2xl"
          />
          <button
            onClick={this.handleClick}
            className="btn btn-info hover:bg-[#00b4dc] hover:border-white text-white rounded-full border-2 border-white lowercase shadow-xl text-sm font-normal px-12"
          >
            new&nbsp;<span className="font-semibold">jokes</span>
          </button>
        </header>
        <Ul className="flex flex-col items-center h-[90%] w-full min-w-[600px] bg-slate-100 shadow-xl overflow-y-auto">
          {this.state.loading && <LoadingSpinner />}
          {!this.state.loading && (
            <FlipMove className="w-full">
              {this.state.jokes &&
                this.state.jokes
                  .sort((a, b) => b.score - a.score)
                  .map((joke) => (
                    <Joke
                      key={joke.id}
                      id={joke.id}
                      joke={joke.joke}
                      score={joke.score}
                      upvote={() => this.handleVote(joke.id, 1)}
                      downvote={() => this.handleVote(joke.id, -1)}
                    />
                  ))}
            </FlipMove>
          )}
        </Ul>
      </main>
    )
  }
}
