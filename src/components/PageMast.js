import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const PageMastStyles = styled.section`
  align-items: center;
  /* TODO: mast image */
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
  }
`

const PageMast = ({ title }) => (
  <PageMastStyles>
    <Header />
    <h1>{title}</h1>
  </PageMastStyles>
)

PageMast.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageMast
