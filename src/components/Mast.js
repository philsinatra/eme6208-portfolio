import React from 'react'
import styled from 'styled-components'
import bg from '../assets/images/GettyImages-1064926970.jpg'

const MastStyles = styled.section`
  background: url(${bg}) no-repeat var(--color-gray-75);
  background-size: cover;
  background-attachment: fixed;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  padding: 0 3rem;
  width: 100vw;

  > div {
    background-color: rgba(0, 0, 0, 0.85);
    padding: 0.5rem;
  }

  h1,
  h2 {
    color: var(--color-white);
    line-height: 1.2;
    margin: 0;
    text-align: center;
    text-shadow: var(--material-shadow);
  }

  h1 {
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 3vw, 3rem);
    font-weight: 600;
  }

  h2 {
    font-size: 80%;
    font-size: clamp(0.875rem, 2vw, 1.5rem);
    font-weight: 550;
  }
`

const Mast = () => (
  <MastStyles>
    <div>
      <h2>Phil Sinatra's ePortfolio</h2>
      <h1>Designing Integrated Media Environments</h1>
    </div>
  </MastStyles>
)

export default Mast
