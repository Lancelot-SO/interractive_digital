import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='banner-container'>
                    <h1>Let's discuss and create magic!</h1>
                    <p>"Unlock the gates of possibility as we dive into vibrant discussions
                        and co-create a symphony of innovation that will make waves.
                        Let's fuse our unique perspectives and unleash a storm of creativity, crafting something truly remarkable together. Prepare to embark on a journey where groundbreaking ideas take flight and coolness reaches unprecedented heights. Join us in the realm of limitless imagination, where we sculpt the future with our collective genius. Together,
                        let's sculpt brilliance and forge a path towards extraordinary achievement."
                    </p>
                    <div class="banner-arrow">
                        <a href="/contact">Contact us</a>
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
            </div>
        </div>
    )
}

export default Banner
