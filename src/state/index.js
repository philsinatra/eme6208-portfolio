import React, { useEffect, useState } from 'react'

const AppContext = React.createContext()

export function AppProvider({ children }) {
  const [state, setState] = useState({
    navOpen: false,
  })

  useEffect(() => {
    console.log('state :>> ', state)
  }, [state])

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
