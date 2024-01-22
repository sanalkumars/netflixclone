import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import endpoints from '../services/movieServices'

const Home = () => {
  return (
    <>
    <Hero />
    <Row title="upcoming" url={endpoints.popular} />
    <Row title="Top Rated" url={endpoints.topRated} />
    <Row  title="Trending" url={endpoints.trending} />
    <Row title="Comedy" url={endpoints.comedy} />
    </>
  )
}

export default Home