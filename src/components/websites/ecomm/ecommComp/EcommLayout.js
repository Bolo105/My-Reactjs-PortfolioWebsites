import React from 'react'
import { EcommNavbar } from './EcommNavbar'
import { EcommFooter } from './EcommFooter'

export const EcommLayout = ({ children }) => {
  return (
    <div>
      <EcommNavbar />
        {children}
      <EcommFooter />
    </div>
  )
}

