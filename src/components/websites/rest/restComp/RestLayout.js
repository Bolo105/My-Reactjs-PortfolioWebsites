import React from 'react'
import { RestNavbar } from './restNavbar'
import { RestFooter } from './restFooter'

export const RestLayout = ({ children }) => {
  return (
    <div>
     <RestNavbar />
       {children}
     <RestFooter />
    </div>
  )
}
