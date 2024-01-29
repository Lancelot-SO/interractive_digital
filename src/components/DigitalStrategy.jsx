import React from 'react'
import "./DigitalStrategy.css"
import ds from "../assets/ds.png"
import icon from "../assets/strategyIcon.png"
import vr from "../assets/vrImage.png"
import Banner from './Banner'

const DigitalStrategy = () => {
    return (
        <div>
            <div className='strategy'>
                <img src={ds} alt='ds' />
                <div className='strategy-text'>
                    <h2>Digital stategy & Consulting</h2>
                </div>
                <div className='strategy-next-text'>
                    <h2>Digital stategy Consulting</h2>
                </div>
            </div>
            <section>
                <div className='main-strategy'>
                    <div className='strategy-col'>
                        <div className='strategy-column'>
                            <div className='strategy-row'>
                                <div className='strategy-content'>
                                    <h3>Photography</h3>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                                </div>
                                <img src={icon} alt='icon' />
                            </div>
                            <div className='strategy-row'>
                                <div className='strategy-content'>
                                    <h3>UI/UX DESIGN</h3>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                                </div>
                                <img src={icon} alt='icon' />
                            </div>
                            <div className='strategy-row'>
                                <div className='strategy-content'>
                                    <h3>WEB DESIGN
                                    </h3>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                                </div>
                                <img src={icon} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <img src={vr} alt='bigIcon' />
                    <div className='stra-col'>
                        <div className='stra-row'>
                            <img src={icon} alt='icon' />
                            <div className='stra-content'>
                                <h3>WEB DEVELOPMENT</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                            </div>
                        </div>
                        <div className='stra-row'>
                            <img src={icon} alt='icon' />
                            <div className='stra-content'>
                                <h3>
                                    3D DESIGN
                                </h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                            </div>
                        </div>
                        <div className='stra-row'>
                            <img src={icon} alt='icon' />
                            <div className='stra-content'>
                                <h3>2D DESIGN
                                </h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Banner />
        </div>
    )
}

export default DigitalStrategy
