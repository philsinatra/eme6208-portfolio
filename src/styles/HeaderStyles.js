import styled from 'styled-components'

const HeaderStyles = styled.header`
  background-color: var(--color-gray-100);
  height: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;

  a {
    align-items: center;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    transition: color var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      color: var(--color-orange-700);
    }
  }

  button {
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius);
    color: var(--color-gray-800);
    height: 2.125rem;
    padding: 0 7px;
    transition: background-color 113ms ease-out, color 113ms ease-out;
    width: 2.125rem;

    svg {
      height: 100%;
      width: 100%;
    }

    &:hover,
    &:focus {
      background-color: var(--color-gray-50);
      color: var(--color-white);
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export default HeaderStyles
