import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const PageMastStyles = styled.section`
  align-items: center;
  background-color: var(--color-black);
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  min-height: 14.25rem;
  padding: 0 3rem;

  h1 {
    color: var(--color-white);
    font-size: 1.5rem;
    font-size: clamp(2rem, 4vw, 6rem);
    margin: 0;
    position: relative;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    top: 1rem;
  }
`

const PageMast = ({ title }) => {
  return (
    <PageMastStyles>
      <Header />
      <h1>{title}</h1>
    </PageMastStyles>
  )
}

PageMast.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageMast
