import React, { Component } from 'react'
import styled from 'styled-components'
import { CgSmileMouthOpen } from 'react-icons/cg'

const Spinner = styled.div`
  animation: icon-spin 2s infinite linear;

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`

export default class LoadingSpinner extends Component {
  render() {
    return (
      <Spinner>
        <CgSmileMouthOpen className="text-[#ffd764] h-32 w-32" />
      </Spinner>
    )
  }
}
