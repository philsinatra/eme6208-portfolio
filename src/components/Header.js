import React, { useContext, useEffect } from 'react'
import AppContext from '../state'
import { HeaderStyles } from '../styles'
import Navbar from './Navbar'

const Header = () => {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    setState({ ...state, navOpen: false })
  }, [])

  return (
    <>
      <HeaderStyles>
        <button
          onClick={() => {
            setState({ ...state, navOpen: !state.navOpen })
          }}
        >
          <svg>
            <use
              xlinkHref={`#${state.navOpen ? 'close-icon' : 'icon-show-menu'}`}
            />
          </svg>
        </button>
      </HeaderStyles>
      {state.navOpen ? <Navbar /> : null}
    </>
  )
}

export default Header
