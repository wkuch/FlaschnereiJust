import React from 'react'
import { Navigation } from '../molecules/navigation'
import { Gallery } from '../atoms/gallery'
import { Paragraph } from '../molecules/paragraph'
import { CardGallery } from '../molecules/cardGallery'
import { Footer } from '../molecules/footer'

export const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <Gallery />
      <Paragraph heading="Arbeit" />
      <CardGallery />
      <Footer />
    </div>
  )
}
