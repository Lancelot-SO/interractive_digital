import React from 'react'
import "./Marketing.css";
import market from "../assets/market.png"
import seo from "../assets/seo.png"
import ads from "../assets/ads.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import Banner from './Banner'



const Marketing = () => {
    return (
        <div>
            <div className='market'>
                <img src={market} alt='market' />
                <div className='market-text'>
                    <h2>Digital <b>Marketing</b></h2>
                </div>
            </div>
            <section>
                <div className='mark'>
                    <div className='main-mark'>
                        <h1>Digital <b>Marketing</b></h1>
                        <span>Find your spot in a noisy world.
                            We know the exact place we harness the power of
                            digital channels to expand your brand’s reach.
                            Our digital marketing experts develop data-driven
                            strategies to connect with your target audience,
                            increase engagement, and drive conversions.</span>
                    </div>
                </div>
            </section>
            <div className='spring'>
                <div className='spread'>
                    <div className='main-box'>
                        <img src={seo} alt='seo' />
                        <h4>Search engine optimization:</h4>
                        <span>Find your spot in a noisy world. We know the exact place. We harness the power
                            of digital channels to expand your brand’s reach. </span>
                    </div>
                    <div className='main-box'>
                        <img src={ads} alt='seo' />
                        <h4>Search engine optimization:</h4>
                        <span>Find your spot in a noisy world. We know the exact place. We harness the power
                            of digital channels to expand your brand’s reach. </span>
                    </div>
                    <div className='main-box'>
                        <img src={email} alt='seo' />
                        <h4>Search engine optimization:</h4>
                        <span>Find your spot in a noisy world. We know the exact place. We harness the power
                            of digital channels to expand your brand’s reach. </span>
                    </div>
                    <div className='main-box'>
                        <img src={phone} alt='seo' />
                        <h4>Search engine optimization:</h4>
                        <span>Find your spot in a noisy world. We know the exact place. We harness the power
                            of digital channels to expand your brand’s reach. </span>
                    </div>

                </div>
            </div>
            <Banner />
        </div>
    )
}

export default Marketing
