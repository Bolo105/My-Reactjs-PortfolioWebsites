import React from 'react'
import { RestNavbar } from './restNavbar'
import { RestHome } from './restHome'
import { RestAbout } from './restAbout'
import { RestWhy } from './restWhy'
import { RestMenu } from './restMenu'
import { RestGallery } from './restGallery'
import { RestTest } from './restTest'
import { RestQuestions } from './restQuestions'
import { RestTeam } from './restTeam'
import { RestBook } from './restBook'
import { RestContact } from './restContact'
import { RestFooter } from './restFooter'

export const RestWeb = () => {
  return (
    <div>
       <RestNavbar />
       <RestHome />
       <RestAbout />
       <RestWhy />
       <RestMenu />
       <RestGallery />
       <RestTest />
       <RestQuestions />
       <RestTeam />
       <RestBook />
       <RestContact />
       <RestFooter />
    </div>
  )
}
