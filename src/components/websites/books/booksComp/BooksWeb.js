import React from 'react'
import { BooksHome } from './BooksHome'
import { BooksPopular } from './BooksPopular'
import { BooksAuthors } from './BooksAuthors'
import { BooksTemathics } from './BooksTemathic'
import { BooksNavbar } from './BooksNavbar'
import { BooksFooter } from './BooksFooter'

export const BooksWeb = () => {
  return (
    <div>
       <BooksNavbar />
       <BooksHome />
       <BooksPopular />
       <BooksAuthors />
       <BooksTemathics />
       <BooksFooter />
    </div>
  )
}
