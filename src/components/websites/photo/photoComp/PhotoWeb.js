import React from 'react'
import { PhotoNavbar } from './PhotoNavbar'
import PhotoHero from './PhotoHero'
import { PhotoGallery } from './PhotoGallery'
import { PhotoServices } from './PhotoServices'
import { PhotoTeam } from './PhotoTeam'
import { PhotoContact } from './PhotoContact'
import { PhotoFooter } from './PhotoFooter'

export const PhotoWeb = () => {
  return (
    <div>
      <PhotoNavbar />
      <PhotoHero />
      <PhotoGallery />
      <PhotoServices />
      <PhotoTeam />
      <PhotoContact />
      <PhotoFooter />
    </div>
  )
}
