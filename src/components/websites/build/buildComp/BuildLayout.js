import React from 'react'
import { BuildNav } from './BuildNav'
import { BuildFooter } from './BuildFooter'

export const BuildLayout = ({ children }) => {
  return (
    <div>
      <BuildNav />
       {children}
      <BuildFooter />
    </div>
  )
}
