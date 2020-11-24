import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  align-items: center;
  background-color: var(--color-gray-75);
  color: var(--color-white);
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  padding: 1.5rem;

  a {
    color: var(--color-white);
    text-decoration: none;
    transition: color var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      color: var(--color-celery-700);
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <a
      href="http://education.ufl.edu/educational-technology/"
      target="_blank"
      rel="noopener noreferrer"
    >
      UFL Educational Technology
    </a>
  </FooterStyles>
)

export default Footer
