import React from 'react'
import "./Video.css"
import video from "../assets/video.png"
import pop1 from "../assets/pop1.png"
import pop2 from "../assets/pop2.png"
import pop3 from "../assets/pop3.png"
import pop4 from "../assets/pop4.png"
import vgraphy from "../assets/videoImage.png"
import kfc from "../assets/kfc.png"
import cola from "../assets/cola.png"
import carshow from "../assets/carshow.png"




const Video = () => {
    return (
        <div>
            <div className='video'>
                <img src={video} alt='video' />
                <div className='video-text'>
                    <h2>VIDEOGRAPHY</h2>
                </div>
            </div>
            <section>
                <div className='latest-pprojects'>
                    <h4>Projects</h4>
                    <div className='project-row'>
                        <div className='new-projects'>
                            <img src={pop1} alt='pop' />
                            <div className='show-col'>
                                <h3>The K-POP Live Show</h3>
                                <small>1h 14m</small>
                            </div>
                        </div>
                        <div className='new-projects'>
                            <img src={pop2} alt='pop' />
                            <div className='show-col'>
                                <h3>The K-POP Live Show</h3>
                                <small>1h 14m</small>
                            </div>
                        </div>
                        <div className='new-projects'>
                            <img src={pop3} alt='pop' />
                            <div className='show-col'>
                                <h3>Minions Official</h3>
                                <small>1h 14m</small>
                            </div>
                        </div>
                        <div className='new-projects'>
                            <img src={pop4} alt='pop' />
                            <div className='show-col'>
                                <h3>Minions Official</h3>
                                <small>1h 14m</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='videography'>
                    <div className='videography-text'>
                        <h2>VIDEOGRAPHY</h2>
                        <h5>Online<br /> Advertising</h5>
                        <span>Augue feugiat mi, massa amet.
                            Id purus aliquam bibendum purus dictum elementum
                            nullam odio tellus. Imperdiet feugiat est
                            odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie.
                            Facilisis pretium porta congue proin.</span>
                    </div>
                    <div className='graph'>
                        <div className='project-list'>
                            <button type='button' className='button'>Project List</button>
                            <div className='project-name'>
                                <div className='icon-name'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.5453 8.34864C12.5921 8.27518 12.6237 8.19306 12.6382 8.10717C12.6526 8.02128 12.6497 7.93336 12.6296 7.84861C12.6094 7.76387 12.5725 7.68404 12.5209 7.61385C12.4693 7.54365 12.4042 7.48453 12.3293 7.43998L5.71469 3.41866C5.60712 3.35355 5.48376 3.31919 5.35802 3.31933C4.98469 3.31933 4.68269 3.61466 4.68269 3.97933V12.02C4.68269 12.1433 4.71803 12.264 4.78469 12.3686C4.98202 12.678 5.39802 12.7726 5.71469 12.58L12.3293 8.55931C12.4167 8.50597 12.4913 8.43331 12.546 8.34797L12.5453 8.34864ZM13.0427 9.67997L6.42869 13.7006C5.47869 14.2786 4.22869 13.994 3.63803 13.0666C3.43833 12.754 3.33216 12.3909 3.33203 12.02V3.97999C3.33203 2.886 4.23869 2 5.35869 2C5.73669 2 6.10735 2.10333 6.42869 2.29867L13.0427 6.31998C13.9927 6.89731 14.284 8.11731 13.6927 9.0453C13.5287 9.30264 13.306 9.51997 13.0427 9.67997Z" fill="white" />
                                    </svg>
                                    <h5>Project Name</h5>
                                </div>
                                <div className='icon-name'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.5453 8.34864C12.5921 8.27518 12.6237 8.19306 12.6382 8.10717C12.6526 8.02128 12.6497 7.93336 12.6296 7.84861C12.6094 7.76387 12.5725 7.68404 12.5209 7.61385C12.4693 7.54365 12.4042 7.48453 12.3293 7.43998L5.71469 3.41866C5.60712 3.35355 5.48376 3.31919 5.35802 3.31933C4.98469 3.31933 4.68269 3.61466 4.68269 3.97933V12.02C4.68269 12.1433 4.71803 12.264 4.78469 12.3686C4.98202 12.678 5.39802 12.7726 5.71469 12.58L12.3293 8.55931C12.4167 8.50597 12.4913 8.43331 12.546 8.34797L12.5453 8.34864ZM13.0427 9.67997L6.42869 13.7006C5.47869 14.2786 4.22869 13.994 3.63803 13.0666C3.43833 12.754 3.33216 12.3909 3.33203 12.02V3.97999C3.33203 2.886 4.23869 2 5.35869 2C5.73669 2 6.10735 2.10333 6.42869 2.29867L13.0427 6.31998C13.9927 6.89731 14.284 8.11731 13.6927 9.0453C13.5287 9.30264 13.306 9.51997 13.0427 9.67997Z" fill="white" />
                                    </svg>
                                    <h5>Project Name</h5>
                                </div>
                                <div className='icon-name'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.5453 8.34864C12.5921 8.27518 12.6237 8.19306 12.6382 8.10717C12.6526 8.02128 12.6497 7.93336 12.6296 7.84861C12.6094 7.76387 12.5725 7.68404 12.5209 7.61385C12.4693 7.54365 12.4042 7.48453 12.3293 7.43998L5.71469 3.41866C5.60712 3.35355 5.48376 3.31919 5.35802 3.31933C4.98469 3.31933 4.68269 3.61466 4.68269 3.97933V12.02C4.68269 12.1433 4.71803 12.264 4.78469 12.3686C4.98202 12.678 5.39802 12.7726 5.71469 12.58L12.3293 8.55931C12.4167 8.50597 12.4913 8.43331 12.546 8.34797L12.5453 8.34864ZM13.0427 9.67997L6.42869 13.7006C5.47869 14.2786 4.22869 13.994 3.63803 13.0666C3.43833 12.754 3.33216 12.3909 3.33203 12.02V3.97999C3.33203 2.886 4.23869 2 5.35869 2C5.73669 2 6.10735 2.10333 6.42869 2.29867L13.0427 6.31998C13.9927 6.89731 14.284 8.11731 13.6927 9.0453C13.5287 9.30264 13.306 9.51997 13.0427 9.67997Z" fill="white" />
                                    </svg>
                                    <h5>Project Name</h5>
                                </div>
                                <div className='icon-name'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.5453 8.34864C12.5921 8.27518 12.6237 8.19306 12.6382 8.10717C12.6526 8.02128 12.6497 7.93336 12.6296 7.84861C12.6094 7.76387 12.5725 7.68404 12.5209 7.61385C12.4693 7.54365 12.4042 7.48453 12.3293 7.43998L5.71469 3.41866C5.60712 3.35355 5.48376 3.31919 5.35802 3.31933C4.98469 3.31933 4.68269 3.61466 4.68269 3.97933V12.02C4.68269 12.1433 4.71803 12.264 4.78469 12.3686C4.98202 12.678 5.39802 12.7726 5.71469 12.58L12.3293 8.55931C12.4167 8.50597 12.4913 8.43331 12.546 8.34797L12.5453 8.34864ZM13.0427 9.67997L6.42869 13.7006C5.47869 14.2786 4.22869 13.994 3.63803 13.0666C3.43833 12.754 3.33216 12.3909 3.33203 12.02V3.97999C3.33203 2.886 4.23869 2 5.35869 2C5.73669 2 6.10735 2.10333 6.42869 2.29867L13.0427 6.31998C13.9927 6.89731 14.284 8.11731 13.6927 9.0453C13.5287 9.30264 13.306 9.51997 13.0427 9.67997Z" fill="white" />
                                    </svg>
                                    <h5>Project Name</h5>
                                </div>
                                <div className='icon-name'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.5453 8.34864C12.5921 8.27518 12.6237 8.19306 12.6382 8.10717C12.6526 8.02128 12.6497 7.93336 12.6296 7.84861C12.6094 7.76387 12.5725 7.68404 12.5209 7.61385C12.4693 7.54365 12.4042 7.48453 12.3293 7.43998L5.71469 3.41866C5.60712 3.35355 5.48376 3.31919 5.35802 3.31933C4.98469 3.31933 4.68269 3.61466 4.68269 3.97933V12.02C4.68269 12.1433 4.71803 12.264 4.78469 12.3686C4.98202 12.678 5.39802 12.7726 5.71469 12.58L12.3293 8.55931C12.4167 8.50597 12.4913 8.43331 12.546 8.34797L12.5453 8.34864ZM13.0427 9.67997L6.42869 13.7006C5.47869 14.2786 4.22869 13.994 3.63803 13.0666C3.43833 12.754 3.33216 12.3909 3.33203 12.02V3.97999C3.33203 2.886 4.23869 2 5.35869 2C5.73669 2 6.10735 2.10333 6.42869 2.29867L13.0427 6.31998C13.9927 6.89731 14.284 8.11731 13.6927 9.0453C13.5287 9.30264 13.306 9.51997 13.0427 9.67997Z" fill="white" />
                                    </svg>
                                    <h5>Project Name</h5>
                                </div>
                            </div>
                            <div className='select-list'>
                                <select className='button2'>
                                    <option value='project1'>

                                        Project Name
                                    </option>
                                    <option value='project2'>

                                        Project Name 2</option>
                                    <option value='project3'>

                                        Project Name 3</option>
                                </select>
                            </div>
                        </div>
                        <img src={vgraphy} alt='graph' />
                    </div>
                    <div className='three-images'>
                        <img src={kfc} alt='kfc' />
                        <img src={cola} alt='cola' />
                        <img src={carshow} alt='carshow' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Video
