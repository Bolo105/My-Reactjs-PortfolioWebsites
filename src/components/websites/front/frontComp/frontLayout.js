import React from 'react'
import { FrontNavbar } from './frontNavbar'
import { FrontFooter } from './frontFooter'

export const FrontLayout = ({ children }) => {
  return (
    <div>
      <FrontNavbar />
       {children}
      <FrontFooter />
    </div>
  )
}
