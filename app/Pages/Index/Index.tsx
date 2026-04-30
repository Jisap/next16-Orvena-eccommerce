import React from 'react'
import Hero from './Hero/page'
import Discover from './Discover/page'
import Banner from './Banner.tsx/page'
import Sneakers from './Best-sneakers/page'
import ShopBannerCategory from './ShopBannerCategory/page'
import HotDealsBanner from './HotDealsBanner/page'
import NewArrivals from './NewArrivals/page'
import Blogs from './Blogs/page'
import FollowUs from './FollowUs/page'
import Brands from './Brands/page'





import Reveal from '../../Components/Animations/Reveal'


const Index = () => {
  return (
    <>
      <Hero />
      <Reveal direction="up" delay={0.2}>
        <Discover />
      </Reveal>
      <Reveal direction="up">
        <Banner />
      </Reveal>
      <Reveal direction="left">
        <Sneakers />
      </Reveal>
      <Reveal direction="right">
        <ShopBannerCategory />
      </Reveal>
      <HotDealsBanner />
      <Reveal direction="up">
        <NewArrivals />
      </Reveal>
      <Reveal direction="up">
        <Blogs />
      </Reveal>
      <FollowUs />
      <Brands />
    </>
  )
}

export default Index