import React from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner }
  from "../components"

const Home = (products) => (
  <div>
    <HeroBanner heroBanner={products.bannerData.length && products.bannerData[0]} />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {products?.products.map((product) => product.name)}
    </div>

    < FooterBanner />
  </div>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;

