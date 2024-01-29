import React from 'react'
import "./Portfolio.css"
import chill from "../assets/chill.png"
import stanbic from "../assets/stanbic.png"
import engine from "../assets/engine.png"
import dance from "../assets/dance.png"
import yan from "../assets/yan.png"
import coke from "../assets/coke.png"

const Portfolio = () => {
    return (
        <section>
            <div class="main-portfolio">
                <h2>Portfolio</h2>
                <div class="new-portfolio">
                    <div data-aos="flip-left" class="portfolio-row">
                        <div class="portfolio">
                            <img src={chill} alt="chill" />
                            <div class="portfolio-next">
                                <span>Malta <br />Guinness</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                        <div class="portfolio">
                            <img src={stanbic} alt="chill" />
                            <div class="portfolio-next">
                                <span>Stanbic <br />Bank Limited</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                        <div class="portfolio">
                            <img src={engine} alt="chill" />
                            <div class="portfolio-next">
                                <span>Search Engine <br />Optimization</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-right" class="portfolio-row">
                        <div class="portfolio">
                            <img src={dance} alt="chill" />
                            <div class="portfolio-next">
                                <span>Search Engine <br />Optimization</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                        <div class="portfolio">
                            <img src={yan} alt="chill" />
                            <div class="portfolio-next">
                                <span>Search Engine <br />Optimization</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                        <div class="portfolio">
                            <img src={coke} alt="chill" />
                            <div class="portfolio-next">
                                <span>Search Engine <br />Optimization</span>
                                <p>Maecenas elementum sapien in metus placerat finibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
