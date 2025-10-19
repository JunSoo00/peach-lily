import React from 'react'
import Header from '../component/Header'
import MainImg from '../component/MainImg'
import Footer from '../component/Footer'
import '../App.css'
import ItemListSection from '../component/ItemListSection'
import CollectionSection from '../component/CollectionSection'

const Home = () => {
  return (
    <div>
        <Header/>
        <MainImg/>
        <ItemListSection/>
        <CollectionSection/>
        <Footer/>
    </div>
  )
}

export default Home