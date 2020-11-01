import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import bg from '../assets/images/GettyImages-1191225866.jpg'
import Header from './Header'

const PageMastStyles = styled.section`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  padding: 0 3rem;

  h1 {
    color: var(--color-white);
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin: 0;
    position: relative;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    top: 1rem;
  }
`

const PageMast = ({ title }) => {
  return (
    <PageMastStyles
      css={css`
        background: url(${bg}) no-repeat;
        background-size: cover;
        @media screen and (min-width: 48em) {
          background-position: bottom center;
        }
      `}
    >
      <Header />
      <h1>{title}</h1>
    </PageMastStyles>
  )
}

PageMast.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageMast
