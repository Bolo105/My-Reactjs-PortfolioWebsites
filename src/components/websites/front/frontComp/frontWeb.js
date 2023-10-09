import React from 'react'
import { FrontNavbar } from './frontNavbar'
import { FrontHero } from './frontHero'
import { FrontAbout } from './frontAbout'
import { FrontPortfolio } from './frontPortfolio'
import { FrontServices } from './frontServices'
import { FrontTeam } from './frontTeam'
import { FrontTest } from './frontTest'
import { FrontContact } from './frontContact'
import { FrontFooter } from './frontFooter'

export const FrontWeb = () => {
  return (
    <div>
      <FrontNavbar />
      <FrontHero />
      <FrontAbout />
      <FrontPortfolio />
      <FrontServices />
      <FrontTeam />
      <FrontTest />
      <FrontContact />
      <FrontFooter />
    </div>
  )
}
