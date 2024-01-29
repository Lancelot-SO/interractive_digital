import React from 'react'
import "./About.css"
import about from "../assets/about.png"
import star from "../assets/stars.png"
import group from "../assets/group.png"
import rightimage from "../assets/rightimage.png"
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import team4 from "../assets/team4.png"
import Banner from './Banner'
import mobileRightimage from "../assets/mobile-rightimage.png"


const About = () => {
    return (
        <div>
            <div className='about'>
                <img src={about} alt='about' />
                <div className='text'>
                    <h2>About us</h2>
                    <p>We discus on business performance and metrics that matter- sales,
                        new customers, revenue, and such.</p>
                </div>

                <section className='data'>
                    <img src={star} alt='star' className='background-image' />
                    <div className='data-text'>
                        <h3>Data-Driven,</h3>
                        <span>Human-Centered</span>
                        <p>We are an award-winning, full service digital marketing agency that creates
                            compelling online experiences in digital media for great brands.
                            Our solutions leverage strategy, creative thinking and coordinated execution
                            to deliver on business goals through digital.</p>
                        <div class="arrow2">
                            <a href="/">Come have a look +</a>
                        </div>
                    </div>

                </section>
                <section>
                    <div className='group'>
                        <img src={group} alt='group' />
                    </div>
                </section>
            </div>

            <section>
                <div className='choose'>
                    <div className='left-choose'>
                        <img src={rightimage} alt='rightimage' />
                        <img src={mobileRightimage} alt='rightimage' />
                    </div>
                    <div className='right-choose'>
                        <h4>Why Choose
                            Us?</h4>
                        <span>Our company has a strong and proven track record in delivering exceptional results for businesses.
                            We offer customized strategies tailored to your unique needs,
                            ensuring maximum effectiveness. With our comprehensive services,
                            we can handle all aspects of your digital marketing and advertising campaigns.
                            Our data-driven approach allows us to make informed decisions and optimize your campaigns for better results.
                            We also bring creativity, innovation, and transparency to the table,
                            ensuring a successful partnership and open communication.</span>
                    </div>
                </div>
            </section>
            <section>
                <div className='team'>
                    <h5>Meet the star
                        Team!</h5>
                    <h6>Awesome team
                        members</h6>
                    <div>
                        <img src={team1} alt='team' />
                        <img src={team2} alt='team' />
                        <img src={team3} alt='team' />
                        <img src={team4} alt='team' />

                    </div>
                </div>
            </section>
            <Banner />
        </div>
    )
}

export default About
