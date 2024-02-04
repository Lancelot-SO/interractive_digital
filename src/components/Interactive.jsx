import React, { useEffect } from 'react'
import "./Interactive.css"
import picture1 from "../assets/Picture1.png"
import picture2 from "../assets/Picture2.png"
import picture3 from "../assets/Picture3.png"
import icon from "../assets/icons.png"
import symbol1 from "../assets/symbol1.png";
import symbol2 from "../assets/symbol2.png";
import symbol3 from "../assets/symbol3.png";
import symbol4 from "../assets/symbol4.png";
import symbol5 from "../assets/symbol5.png";
import service1 from "../assets/service1.svg"
import service2 from "../assets/service2.svg"
import service3 from "../assets/service3.svg"
import service4 from "../assets/service4.svg"
import service5 from "../assets/service4.svg"
import lamp from "../assets/lamp.png"
import blob from "../assets/blob.png"
import rocket from "../assets/rocket.png"
import screen from "../assets/screen.png"
import Aos from 'aos'
import "aos/dist/aos.css";






const Interactive = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
        Aos.refresh();
    }, []);

    return (
        <div>
            <section class="interactive">
                <div data-aos="zoom-in" class="digital">
                    <div class="digital-left">
                        <img src={icon} alt="icon" />

                        <h2>
                            We are Interactive<br />
                            Digital
                        </h2>
                        <p>
                            We are an award-winning, full service digital marketing agency
                            that creates compelling online experiences in digital media for
                            great brands. Our solutions leverage strategy, creative thinking
                            and coordinated execution to deliver on business goals through
                            digital.
                        </p>
                        <div class="arrow">
                            <a href="#home">Come have a look</a>
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
                    <div class="digital-right">
                        <div class="container">
                            <div class="picture-container1">
                                <img src={picture1} alt="pic1" />
                            </div>
                            <div class="picture-container2">
                                <img src={picture2} alt="pic2" />
                            </div>
                            <div class="picture-container3">
                                <img src={picture3} alt="pic3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up-left" class="interactive2">
                <div class="digital2">
                    <div class="digital-left2">
                        <small>Interative Digital</small>
                        <h2>
                            OUR<br />
                            Service
                        </h2>
                        <p>
                            We examine the top of funnel to figure out how to make people to a
                            subscribe newsletter then turn prospects into leads.
                        </p>
                        <div className='add-arrow'>
                            <a href="/">Contact us</a>
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
                        <div class="arrow2">
                            <a href="/">Contact us</a>
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
                    <div class="digital-right2">
                        <div class="container2">
                            <div class="new-container">
                                <div class="service1" data-card="1" onmouseover="showCard(1)">
                                    <div class="img">
                                        <img src={service1} alt="service1" />
                                    </div>
                                    <span>Social Media Marketing</span>
                                </div>
                                <div class="service2" data-card="2" onmouseover="showCard(2)">
                                    <div class="img">
                                        <img src={service2} alt="service1" />
                                    </div>
                                    <span>Online Advertising</span>
                                </div>
                                <div class="service3" data-card="3" onmouseover="showCard(3)">
                                    <div class="img">
                                        <img src={service3} alt="service1" />
                                    </div>
                                    <span>Media Production</span>
                                </div>
                                <div class="service4" data-card="4" onmouseover="showCard(4)">
                                    <div class="img">
                                        <img src={service4} alt="service1" />
                                    </div>
                                    <span>Website Design</span>
                                </div>
                                <div class="service5" data-card="5" onmouseover="showCard(5)">
                                    <div class="img">
                                        <img src={service5} alt="service1" />
                                    </div>
                                    <span>Strategy Consulting</span>
                                </div>
                            </div>

                            <div class="container3">
                                <div class="main-card1" id="card1">
                                    <div class="card1">
                                        <img src={symbol1} alt='sym' />
                                        <span
                                        >Find your spot in a noisy world. We know the exact place
                                        </span>
                                    </div>
                                </div>
                                <div class="main-card2" id="card2">
                                    <div class="card2">
                                        <img src={symbol2} alt='sym' />
                                        <span>
                                            We have the know-how and access to the best networks
                                            available to deliver and manage digital ad campaigns.Our
                                            in-depth understanding of dynamic display advertising, ad
                                            formats, and performance insights, gives your brand the
                                            best chance of connecting with your ideal audience.
                                        </span>
                                    </div>
                                </div>
                                <div class="main-card3" id="card3">
                                    <div class="card3">
                                        <img src={symbol3} alt='sym' />
                                        <span
                                        >We deliver full scale media production services. With
                                            state of the art equipment and a professional team of
                                            media practitioners, we deliver world-class production
                                            quality content for digital, which also works for use on
                                            TV.
                                        </span>
                                    </div>
                                </div>
                                <div class="main-card4" id="card4">
                                    <div class="card4">
                                        <img src={symbol4} alt='sym' />
                                        <span
                                        >Our cocktail of appealing front-end visual and very
                                            secure back-end programming ensures that your website
                                            delivers optimum user experience for all your visitors.We
                                            utilize the latest technologies to build highly functional
                                            yet aesthetically pleasing websites that deliver the best
                                            user experiences, leading visitors to convert and come
                                            back for more.
                                        </span>
                                    </div>
                                </div>
                                <div class="main-card5" id="card5">
                                    <div class="card5">
                                        <img src={symbol5} alt='sym' />
                                        <span
                                        >We deliver comprehensive digital marketing strategy for
                                            several global brands. With a deep understanding of
                                            various industry, brand and consumer landscapes, we
                                            unearth data-driven insights and craft a winning approach
                                            for a product or brand looking to win with digital in any
                                            market.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="zoom-out-down" class="process">
                <div class="next-process">
                    <div class="process-left">
                        <h2>Our Process</h2>
                        <div class="check-rule">
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#ED3224"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>We always listen...</span>
                            </div>
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#ED3224"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>We are always learning</span>
                            </div>
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#ED3224"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>We always create</span>
                            </div>
                        </div>
                        <div class="find">
                            <a href="/about">Find more about us</a>
                        </div>
                    </div>
                    <div class="process-right">
                        <div class="main-process">
                            <div class="lamp">
                                <img src={lamp} alt="lamp" />
                            </div>
                            <div class="blob">
                                <img src={blob} alt="blob" />
                            </div>
                            <div class="main-screen">
                                <div>
                                    <img src={screen} alt="screen" />
                                </div>
                            </div>
                            <div class="board">
                                <div class="cardboard">
                                    <div class="btn">
                                        <small>Step 1</small>
                                    </div>
                                    <h3>
                                        ... always<br />
                                        Listening
                                    </h3>
                                    <p>
                                        We’re constantly plugged into the social media and digital
                                        landscape, looking for triggers that inspire our creativity
                                        for your brand.
                                    </p>
                                </div>
                                <div class="cardboard1">
                                    <div class="btn1">
                                        <small>Step 2</small>
                                    </div>
                                    <h3>
                                        ... always<br />
                                        Listening
                                    </h3>
                                    <p>
                                        We’re constantly mining insights from what is happening
                                        online, to better understand who they are, how they feel and
                                        where they go.
                                    </p>
                                </div>
                                <div class="cardboard2">
                                    <div class="btn2">
                                        <small>Step 3</small>
                                    </div>
                                    <h3>
                                        ... always<br />
                                        Listening
                                    </h3>
                                    <p>
                                        We challenge what we know already, with the very
                                        inspirational “what if…”. The answer always brings our
                                        creative edge that lets us win with and for you.
                                    </p>
                                </div>
                            </div>
                            <div class="rocket">
                                <img src={rocket} alt="rocket" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Interactive
