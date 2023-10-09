import React from 'react'
import { BuildNav } from './BuildNav'
import { BuildHero } from './BuildHero'
import { BuildAbout } from './BuildAbout'
import { BuildServices } from './BuildServices'
import { BuildPortfolio } from './BuildPortfolio'
import { BuildTest } from './BuildTest'
import { BuildBlog } from './BuildBlog'
import { BuildContact } from './BuildContact'
import { BuildFooter } from './BuildFooter'


export const BuildWeb = () => {
  return (
    <div>
      <BuildNav />
      <BuildHero />
      <BuildAbout />
      <BuildServices />
      <BuildPortfolio />
      <BuildTest />
      <BuildBlog />
      <BuildContact />
      <BuildFooter />
    </div>
  )
}
