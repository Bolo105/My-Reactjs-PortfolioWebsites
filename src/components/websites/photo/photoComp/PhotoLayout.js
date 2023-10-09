import React from 'react'
import { PhotoNavbar } from './PhotoNavbar'
import { PhotoFooter } from './PhotoFooter'

export const PhotoLayout = ({ children }) => {
  return (
    <div>
      <PhotoNavbar />
       {children}
      <PhotoFooter />
    </div>
  )
}
