import React, { useEffect } from 'react'
import "./Hero.css"
import lucozade from "../assets/lucozade.png"
import gino from "../assets/gino.png"
import yango from "../assets/yango.png"
import hdplus from "../assets/hdplus.png"
import frame from "../assets/frame.png"
import Interactive from './Interactive';
import Portfolio from './Portfolio';
import blog1 from "../assets/blog1.png"
import socials from "../assets/socials.png"
import student from "../assets/student.png"
import mainSocial from "../assets/main-socials.png"
import backlight from "../assets/Backlights.svg"
import Aos from 'aos'
import "aos/dist/aos.css";
import "../fonts/Fontspring-DEMO-lufga-black.otf"





const Hero = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
        Aos.refresh();
    }, []);

    return (
        <div>
            <div className='hero'>
                <div className='main-container'>
                    <div className='container'>
                        <div className='container-left'>
                            <div className='container-text'>
                                <h1>
                                    Grow your<br /> <span>business</span> not your<br /> followers
                                </h1>
                                <p>We discus on business performance and metrics that matter- sales,
                                    new customers, revenue, and such.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className='container-right'>
                            <img src={frame} alt='frame' />
                        </div>
                    </div>
                </div>
            </div>
            <section class="flow">
                <div class="main-flow">
                    <div class="slide-show">
                        <img src={lucozade} alt="lucozade" />
                        <img src={gino} alt="gino" />
                        <img src={yango} alt="yango" />
                        <img src={hdplus} alt="hdplus" />
                    </div>
                </div>
            </section>
            <Interactive />
            <Portfolio />
            <section>
                <div className='main-blog'>
                    <h4>From Our blog</h4>
                    <div className='container-blog'>
                        <div className='blog'>
                            <img src={blog1} alt='blog' />
                            <div className='blog-post'>
                                <div className='line'></div>
                                <div className='blog-text'>
                                    <p>What is Branding? Why is<br />it important in 2023</p>

                                    <small>By Dan Armah - Sep 27</small>
                                </div>
                            </div>
                        </div>
                        <div className='blog'>
                            <img src={socials} alt='blog' />
                            <div className='blog-post'>
                                <div className='line'></div>
                                <div className='blog-text'>
                                    <p>What is Branding? Why is<br />it important in 2023</p>

                                    <small>By Dan Armah - Sep 27</small>
                                </div>
                            </div>
                        </div>
                        <div className='blog'>
                            <img src={student} alt='blog' />
                            <div className='blog-post'>
                                <div className='line'></div>
                                <div className='blog-text'>
                                    <p>What is Branding? Why is<br />it important in 2023</p>

                                    <small>By Dan Armah - Sep 27</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-arrow">
                        <a href="/">Visit our Blog</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
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
            </section>
            <section data-aos="fade-left" className='new-sect'>
                <div className='next-sect'>
                    <img src={mainSocial} alt='main' />
                    <span>Let's <small>Collaborate</small> to <br />create better experience</span>
                    <img src={backlight} alt='light' />
                </div>
            </section>
        </div>
    )
}

export default Hero
