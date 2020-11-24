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
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 450;
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;

    &::after {
      background-color: var(--color-gray-600);
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      margin: auto auto -0.3rem;
      position: absolute;
      right: 0;
      width: 40%;
    }
  }

  .lead {
    font-size: clamp(1rem, 2.5vw, 1.75rem);
    line-height: 1.3;
    margin: 0 auto 3rem;
    max-width: 65ch;
    /* text-align: center; */
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
      display: flex;
      flex-direction: column;
      justify-content: center;

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

            &::after {
              background-color: var(--color-gray-800);
              bottom: 0;
              content: '';
              height: 1px;
              left: 0;
              margin: auto auto -0.3rem;
              position: absolute;
              right: 0;
              width: 30%;
            }
          }

          h3 {
            margin: 1rem 0 2rem;
            font-size: 1.75rem;
            font-weight: 300;
            line-height: 1.5;
          }
        }

        > p {
          color: var(--color-gray-400);
          font-size: 1.1rem;
          line-height: 1.4;
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
