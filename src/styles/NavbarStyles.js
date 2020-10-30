import styled from 'styled-components'

const NavbarStyles = styled.nav`
  background-color: var(--color-gray-100);
  font-size: 0.875rem;
  height: 100vh;
  left: 0;
  max-width: 18.75rem;
  padding: 3rem 1.5rem 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform 225ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  z-index: 110;

  &.is-open {
    transform: translateX(0);
  }

  header {
    padding: 0;
    margin-bottom: 3rem;

    h1 {
      color: var(--color-white);
      font-size: 1.25rem;
      margin: 1.5rem 0 0.75rem;

      a,
      button {
        background-color: transparent;
        border: 0;
        color: var(--color-white);
        font-weight: 300;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 113ms ease-in-out;

        &:hover,
        &:focus {
          color: var(--color-blue-700);
          cursor: pointer;
        }
      }
    }
  }

  h2 {
    color: var(--color-white);
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }

  ul {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* height: calc(100vh - 100px); */
    list-style: none;
    margin: 0.75rem 0 1.5rem;
    padding: 0;
    width: 100%;

    li {
      margin: 0;
      width: 100%;

      a,
      button {
        background-color: transparent;
        border: 0;
        color: var(--color-white);
        padding: 0.5rem;
        transition: background-color 113ms ease-in-out;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: flex-start;
        text-decoration: none;

        &:hover,
        &:focus {
          background-color: var(--color-gray-200);
        }

        &:hover {
          cursor: pointer;
        }

        svg {
          color: var(--color-white);
          height: 1rem;
          width: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`

export default NavbarStyles
