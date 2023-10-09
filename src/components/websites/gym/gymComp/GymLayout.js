import React from 'react'
import { GymNavbar } from './GymNavbar'
import { GymFooter } from './GymFooter'

export const GymLayout = ({ children }) => {
  return (
    <div>
      <GymNavbar />
       {children}
      <GymFooter />
    </div>
  )
}
