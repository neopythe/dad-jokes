import styled from 'styled-components'

const UpvoteButton = styled.button`
  &:hover {
    animation: 1.3s ease-out infinite move-up;

    @keyframes move-up {
      0%,
      50%,
      100% {
        transform: translateY(0);
      }
      25%,
      75% {
        transform: translateY(-5px);
      }
    }
  }
`

const DownvoteButton = styled.button`
  &:hover {
    animation: 1.3s ease-out infinite move-down;

    @keyframes move-down {
      0%,
      50%,
      100% {
        transform: translateY(0);
      }
      25%,
      75% {
        transform: translateY(5px);
      }
    }
  }
`

const JokeEmoji = styled.i`
  &:hover {
    animation: 0.7s ease-in-out 0s spin;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`

export { UpvoteButton, DownvoteButton, JokeEmoji }
