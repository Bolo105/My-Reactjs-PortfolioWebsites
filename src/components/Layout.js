import React from 'react'
import { StartNavbar } from './start/startComp/StartNavbar'
import { StartFooter } from './start/startComp/StartFooter'

export const Layout = ({children}) => {
  return (
    <div>
      <StartNavbar />
        {children}
      <StartFooter />
    </div>
  )
}
