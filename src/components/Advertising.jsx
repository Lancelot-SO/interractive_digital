import React from 'react'
import "./Advertising.css"
import advert from "../assets/advert.png"
import guinness from "../assets/guiness.png"
import members from "../assets/members1.png"
import members2 from "../assets/members2.png"
import bank from "../assets/bank.png"
import mtn from "../assets/mtn-ghana.png"
import Banner from './Banner'


const Advertising = () => {
    return (
        <div>
            <div className='advert'>
                <img src={advert} alt='market' />
                <div className='advert-text'>
                    <h2>Social Media <b>Marketing</b></h2>
                </div>
            </div>
            <section>
                <div className='advertise'>
                    <div className='main-advertise'>
                        <h1>Online <b>Advertising</b></h1>
                        <span>Find your spot in a noisy world. We know the exact place.
                            We harness the power of digital channels to expand your brand’s reach.
                            Our digital marketing experts develop data-driven strategies to connect with your target audience,
                            increase engagement, and drive conversions.</span>
                    </div>
                </div>
            </section>
            <section>
                <div className='mobile-advertise'>
                    <div className='mobile-advertise'>
                        <h1>All the essential tools</h1>
                        <span>Odio vulputate cras vel lacinia turpis volutpat adipiscing.
                            Sollicitudin at velit,
                            blandit tempus nunc in.</span>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='ads'>
                        <div className='ads-left'>
                            <img src={guinness} alt='guiness' />
                        </div>
                        <div className='ads-right'>
                            <div className='border'>
                                <small>MALTA GUINNESS</small>
                                <span>Venenatis blandit habitasse nunc, sapien enim elit in.
                                    Arcu, pharetra, et cursus sit senectus in blandit.
                                    Aliquet enim fermentum non semper nibh ut neque.
                                    Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.</span>
                            </div>
                            <div className='members'>
                                <h5>Team Members</h5>
                                <img src={members} alt='mem' />
                            </div>

                        </div>
                    </div>
                    <div className='ads'>
                        <div className='ads-left'>
                            <img src={bank} alt='guiness' />
                        </div>
                        <div className='ads-right'>
                            <div className='border'>
                                <small>STANBIC BANK LIMITED</small>
                                <span>Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut.
                                    At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.</span>
                            </div>
                            <div className='members'>
                                <h5>Team Members</h5>
                                <img src={members2} alt='mem' />
                            </div>

                        </div>
                    </div>
                    <div className='ads'>
                        <div className='ads-left'>
                            <img src={mtn} alt='guiness' />
                        </div>
                        <div className='ads-right'>
                            <div className='border'>
                                <small>MALTA GUINNESS</small>
                                <span>Venenatis blandit habitasse nunc, sapien enim elit in.
                                    Arcu, pharetra, et cursus sit senectus in blandit.
                                    Aliquet enim fermentum non semper nibh ut neque.
                                    Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.</span>
                            </div>
                            <div className='members'>
                                <h5>Team Members</h5>
                                <img src={members} alt='mem' />
                            </div>

                        </div>
                    </div>
                    <div className='ads'>
                        <div className='ads-left'>
                            <img src={bank} alt='guiness' />
                        </div>
                        <div className='ads-right'>
                            <div className='border'>
                                <small>MALTA GUINNESS</small>
                                <span>Venenatis blandit habitasse nunc, sapien enim elit in.
                                    Arcu, pharetra, et cursus sit senectus in blandit.
                                    Aliquet enim fermentum non semper nibh ut neque.
                                    Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.</span>
                            </div>
                            <div className='members'>
                                <h5>Team Members</h5>
                                <img src={members2} alt='mem' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Banner />
        </div>
    )
}

export default Advertising
