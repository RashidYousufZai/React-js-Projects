import React from 'react'
import AboutPage from '../component/AboutPage'
import Payment from '../component/Payment'
import ScrollToTop from "react-scroll-to-top";

import "./About.scss"

const About = () => {
    return (
        <div>
            <ScrollToTop />
            <AboutPage content="About us" />
            <div className="container">
                <div className="row  our-mission">
                    <div className="col-md-9 col-12 mission">
                        <h3>Our Mission</h3>
                        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                        <p>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                    </div>
                    <div className="col-md-9 col-12 mission vision">
                        <h3>Our Vision</h3>
                        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                        <p>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                    </div>
                </div>
            </div>
            <Payment className="About-paymant" />
        </div>
    )
}

export default About
