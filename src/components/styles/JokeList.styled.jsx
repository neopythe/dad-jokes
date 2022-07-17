import styled from 'styled-components'

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

const StyledUl = styled.ul`
  scrollbar-width: thin;
`

export { Logo, StyledUl }
