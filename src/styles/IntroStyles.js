import styled from 'styled-components'

const IntroStyles = styled.section`
  background-color: var(--color-gray-950);
  padding: 6rem 1.5rem;

  @media screen and (min-width: 48em) {
    padding: 6rem 3rem;
  }

  .contain {
    margin: 0 auto;
    max-width: 70rem;
  }

  h2 {
    font-size: 2rem;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }

  .intro {
  }

  .lead {
    color: rgba(136, 136, 136, 1);
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 2.75rem;
    margin: 0 auto 3rem;
    max-width: 65ch;
    /* text-align: center; */

    span {
      color: var(--color-black);
    }
  }

  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    justify-items: center;

    @media screen and (min-width: 48em) {
      gap: 3rem;
    }

    @media screen and (min-width: 64em) {
      grid-template-columns: repeat(2, 1fr);
    }

    > .card {
      align-items: center;
      /* border-radius: 1.25rem; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      .image {
        line-height: 0;
        vertical-align: middle;

        img {
          width: 100%;
        }
      }

      .content {
        background-color: var(--color-white);
        flex-grow: 1;
        padding: 3rem;

        header {
          text-align: center;

          p {
            color: var(--color-gray-500);
            font-size: 0.75rem;
            font-weight: 300;
            letter-spacing: 0.25rem;
            margin: 0 0 0.15rem 0;
            padding: 0;
            position: relative;
            text-transform: uppercase;
          }

          h3 {
            margin: 0 0 2rem;
            font-size: 1.75rem;
            font-weight: 600;
            line-height: 1.5;
          }
        }

        > p {
          color: var(--color-gray-500);
          font-size: 1.1875rem;
          letter-spacing: 0.2280000001192093px;
          line-height: 1.6875rem;
          margin: 0 0 2rem;
        }
      }

      footer {
        text-align: center;
      }
    }
  }
`

export default IntroStyles
