// ** React Imports
import React from 'react'

// // ** Component Imports
// import { AbilityContext } from 'src/layouts/components/acl/Can'

const CanViewNavLink = props => {
  // ** Props
//   const { children, navLink } = props
  const { children } = props

  // ** Hook
//   const ability = useContext(AbilityContext)

//   return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
    return <>{children}</>
}

export default CanViewNavLink
