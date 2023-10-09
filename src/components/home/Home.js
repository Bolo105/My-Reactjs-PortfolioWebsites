import React from 'react'
import { StartNavbar } from '../start/startComp/StartNavbar'
import { StartHero } from '../start/startComp/StartHero'
import { StartGallery } from '../start/startComp/StartGallery'
import { StartServices } from '../start/startComp/StartServices'
import { StartContact } from '../start/startComp/StartContact'
import { StartAbout } from '../start/startComp/StartAbout'



export const Home = () => {
  return (
    <div>
       <StartNavbar />
       <StartHero />
       <StartAbout />
       <StartGallery />
       <StartServices />
       <StartContact />
    </div>
  )
}
