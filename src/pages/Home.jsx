import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import Hero from '../component/Hero'
import Card from "../component/Card"
import Galery from '../component/Galery'
import "./Home.scss"
import PopularItems from '../component/PopularItems';
import Payment from '../component/Payment';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <h1 className='text-center'>New Arrivals</h1>
            <div className="new-items">
                <Card />
                <Card />
                <Card />
            </div>

            <Galery />
            <PopularItems />
            <Payment />
        </div>
    )
}

export default Home
