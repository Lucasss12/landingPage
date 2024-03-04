import React from 'react'
import Banner from './components/banner/banner'
import CardsStack from './components/cardsStack/cardsStack'
import BentoGrid from './components/bentoGrid/bentoGrid'

export default function page() {
  return (
    <>
      <Banner />
      <BentoGrid />
      {/* <CardsStack /> */}
    </>
  )
}
