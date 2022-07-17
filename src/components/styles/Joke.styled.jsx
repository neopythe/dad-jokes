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

export { UpvoteButton, DownvoteButton }
