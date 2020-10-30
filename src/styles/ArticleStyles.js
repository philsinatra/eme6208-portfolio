import styled from 'styled-components'

const ArticleStyles = styled.article`
  --background: var(--white);
  --color: var(--black);

  /* @media (prefers-color-scheme: dark) {
    --background: var(--dark-gray);
    --color: var(--white);
  } */

  background: var(--background);
  color: var(--color);
  font-size: 1rem;

  a {
    /* color: var(--dark-red); */
    transition: all var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      /* background-color: #40000c;
      color: var(--red); */
    }
  }
`

export default ArticleStyles
