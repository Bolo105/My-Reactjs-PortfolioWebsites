import React from 'react'
import { GymNavbar } from './GymNavbar'
import { GymHome } from './GymHome'
import { GymWhyUs } from './GymWhyUs'
import { GymOffers } from './GymOffers'
import { GymEnviroment } from './GymEnviroment'
import { GymBanner } from './GymBanner'
import { GymPlan } from './GymPlan'
import { GymTeam } from './GymTeam'
import { GymFooter } from './GymFooter'
import { GymContact } from './GymContact'

export const GymWeb = () => {
  return (
    <div>
       <GymNavbar />
       <GymHome />
       <GymWhyUs />
       <GymOffers />
       <GymEnviroment />
       <GymBanner />
       <GymPlan />
       <GymTeam />
       <GymContact />
       <GymFooter />
    </div>
  )
}
