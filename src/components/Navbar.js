import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLockBodyScroll } from '../hooks'
import AppContext from '../state'
import { NavbarStyles } from '../styles'

const Navbar = ({ site }) => {
  const [state, setState] = useContext(AppContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('site :>> ', site)
  }, [site])

  useEffect(() => {
    const t = setTimeout(() => setOpen(state.navOpen), 10)
    return () => {
      clearTimeout(t)
    }
  }, [state.navOpen])

  useLockBodyScroll()

  return (
    <>
      <NavbarStyles className={open ? 'is-open' : ''}>
        <header>
          <h1>
            <Link to="/">ePortfolio</Link>
          </h1>
        </header>
        <ul>
          {site.siteMetadata.menuLinks.map(({ link, name }) => (
            <li key={uuidv4()}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </NavbarStyles>
      <div
        className="shroud"
        hidden={state.navOpen ? false : true}
        onClick={() => setState({ ...state, navOpen: false })}
      />
    </>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool,
}

export default Navbar
