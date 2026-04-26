import React from 'react'
import Hero from './Hero/page'
import Discover from './Discover/page'
import Banner from './Banner.tsx/page'
import Sneakers from './Best-sneakers/page'
import ShopBannerCategory from './ShopBannerCategory/page'
import HotDealsBanner from './HotDealsBanner/page'
import NewArrivals from './NewArrivals/page'
import Blogs from './Blogs/page'



const Index = () => {
  return (
    <>
      <Hero />
      <Discover />
      <Banner />
      <Sneakers />
      <ShopBannerCategory />
      <HotDealsBanner />
      <NewArrivals />
      <Blogs />
    </>
  )
}

export default Index