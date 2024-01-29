import React from 'react'
import "./Service.css"
import service from "../assets/service-hero.png"
import col from "../assets/Col.png"
import col2 from "../assets/Col2.png"
import col3 from "../assets/Col3.png"
import col4 from "../assets/Col4.png"
import Banner from './Banner'



const Service = () => {
    return (
        <div>
            <div className='service'>
                <img src={service} alt='service' />
                <div className='service-text'>
                    <h2>What we do</h2>
                </div>
            </div>
            <section>
                <div className='main-service'>
                    <div className='services'>
                        <div className='service-left'>
                            <small>INTERACTIVE DIGITAL</small>
                            <h3>Social Media Marketing</h3>
                            <span>Find your spot in a noisy world. We know the exact place
                                We harness the power of digital channels to expand your brand’s reach.
                                Our digital marketing experts develop data-driven strategies to connect
                                with your target audience,
                                increase engagement, and drive conversions.</span>
                            <div class="service-arrow">
                                <a href="/marketing">View more</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#ED3224"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='service-right'>
                            <img src={col} alt='col' />
                        </div>
                    </div>
                    <div className='services'>
                        <div className='service-left'>
                            <small>INTERACTIVE DIGITAL</small>
                            <h3>Online Advertising</h3>
                            <span>Find your spot in a noisy world. We know the exact place
                                We harness the power of digital channels to expand your brand’s reach.
                                Our digital marketing experts develop data-driven strategies to connect
                                with your target audience,
                                increase engagement, and drive conversions.</span>
                            <div class="service-arrow">
                                <a href="/advertising">View more</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#ED3224"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='service-right'>
                            <img src={col2} alt='col' />
                        </div>
                    </div>
                    <div className='services'>
                        <div className='service-left'>
                            <small>INTERACTIVE DIGITAL</small>
                            <h3>Video & Media Production</h3>
                            <span>Find your spot in a noisy world. We know the exact place
                                We harness the power of digital channels to expand your brand’s reach.
                                Our digital marketing experts develop data-driven strategies to connect
                                with your target audience,
                                increase engagement, and drive conversions.</span>
                            <div class="service-arrow">
                                <a href="/video">View more</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#ED3224"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='service-right'>
                            <img src={col3} alt='col' />
                        </div>
                    </div>
                    <div className='services'>
                        <div className='service-left'>
                            <small>INTERACTIVE DIGITAL</small>
                            <h3>Digital Strategy & Consulting</h3>
                            <span>Find your spot in a noisy world. We know the exact place
                                We harness the power of digital channels to expand your brand’s reach.
                                Our digital marketing experts develop data-driven strategies to connect
                                with your target audience,
                                increase engagement, and drive conversions.</span>
                            <div class="service-arrow">
                                <a href="/digitalstrategy">View more</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#ED3224"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='service-right'>
                            <img src={col4} alt='col' />
                        </div>
                    </div>
                </div>
            </section>
            <Banner />

        </div>
    )
}

export default Service
