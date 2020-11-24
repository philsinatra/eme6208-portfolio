import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppContext from '../state'
import { HeaderStyles } from '../styles'
import Navbar from './Navbar'

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  console.log('site :>> ', site)

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
        <nav>
          <ul>
            {site.siteMetadata.menuLinks.map(({ link, name }) => (
              <li key={uuidv4()}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </HeaderStyles>
      {state.navOpen ? <Navbar site={site} /> : null}
    </>
  )
}

export default Header
