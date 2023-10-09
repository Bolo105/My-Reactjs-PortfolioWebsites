import React from 'react'
import { BooksNavbar } from './BooksNavbar'
import { BooksFooter } from './BooksFooter'

export const BooksLayout = ({children}) => {
  return (
    <div>
       <BooksNavbar />
         {children}
       <BooksFooter />
    </div>
  )
}
