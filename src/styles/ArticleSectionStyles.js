import styled from 'styled-components'

const ArticleSectionStyles = styled.section`
  background-color: var(--color-gray-950);
  font-size: 1.1875rem;
  line-height: 1.6875rem;
  font-weight: 300;
  min-height: 75vh;
  padding: 1.5rem 0;

  @media screen and (min-width: 48em) {
    padding-top: 3rem;
  }

  .contain {
    background-color: var(--color-white);
    line-height: 1.6;
    margin: 0 auto;
    max-width: 90vw;
    padding: 3rem 1.5rem;

    @media screen and (min-width: 48em) {
      max-width: 75ch;
      padding: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
    position: relative;
    text-align: center;
  }
`

export default ArticleSectionStyles
