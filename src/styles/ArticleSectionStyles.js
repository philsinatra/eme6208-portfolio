import styled from 'styled-components'

const ArticleSectionStyles = styled.section`
  background-color: var(--color-gray-950);
  line-height: 1.4;
  min-height: 75vh;
  padding-top: 1.5rem;

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
    font-weight: 350;
    margin-top: 0;
    position: relative;
    text-align: center;

    &::after {
      background-color: var(--color-gray-600);
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      margin: auto auto -0.3rem;
      position: absolute;
      right: 0;
      width: 50%;
    }
  }
`

export default ArticleSectionStyles
