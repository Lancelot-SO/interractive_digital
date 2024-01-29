import React from 'react'
import "./BlogPost.css"
import authorheader from "../assets/authorpost.png"
import grid1 from "../assets/grid1.png"
import grid2 from "../assets/grid2.png"
import grid3 from "../assets/grid3.png"
import grid4 from "../assets/grid4.png"
import grid5 from "../assets/grid5.png"
import grid6 from "../assets/grid6.png"
import facebook from "../assets/facebook.svg"


const BlogPost = () => {
    return (
        <div>
            <div className='authorheader'>
                <img src={authorheader} alt='authorheader' />
                <div className='authorheader-text'>
                    <h2>BRANDING STORY TITLE HERE...</h2>
                    <p>This a sub heading ....</p>
                    <div className='authorheader-content'>
                        <h5>Maame Ama -- </h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0013 12.0002L9.66797 13.5558M12.0013 8.11133V12.0002" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h7>6 minute read --</h7>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.4 12H0V3.6H2.4V12ZM7.2 12H4.8V0H7.2V6V12ZM12 12H9.6V7.2H12V12Z" fill="white" />
                        </svg>
                        <h7>1.6K views</h7>
                    </div>
                </div>
            </div>
            <section>
                <div className='main-authorheader'>
                    <div className='authorheader-mark'>
                        <span>Find your spot in a noisy world.
                            We know the exact place we harness the power of
                            digital channels to expand your brand’s reach.
                            Our digital marketing experts develop data-driven
                            strategies to connect with your target audience,
                            increase engagement, and drive conversions.</span>

                        <h2>Eu ridiculus fringilla aenean</h2>
                        <span>Eget aenean tellus venenatis. Donec odio tempus.
                            Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas
                            consectetuer commodo condimentum aenean.</span>

                        <h3>Eu ridiculus fringilla aenean</h3>
                        <span>Eget aenean tellus venenatis. Donec odio tempus.
                            Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas
                            consectetuer commodo condimentum aenean.</span><br /><br />
                        <span>
                            Ut eu sem aenean imperdiet. Hendrerit penatibus sem adipiscing aliquet consequat nec orci nascetur.
                            Etiam massa quam dolor aenean maecenas sociis tellus consectetuer. In sit donec massa integer nisi mus viverra odio ultricies ridiculus. Sapien sem lorem. Aenean sem venenatis arcu tellus fringilla vulputate quis vici nullam nec. Cum quam veni lorem elit aliquet pede in enim.
                            Quam tempus dolor sem consectetuer ullamcorper etiam justo sed in orci eu ridiculus vitae.
                        </span>
                        <ul>
                            <li>1.Mollis lorem vitae varius.</li>
                            <li>2.Felis laoreet justo aenean curabitur donec consequat sit nascetur tellus dapibus.</li>
                            <li>3.Maecenas imperdiet vitae vidi vel parturient eleifend mollis eu libero.</li>
                            <li>4.Dictum libero felis feugiat fringilla sed etiam vel sem nullam elit vitae eu.</li>
                            <li>5.Felis nec eget curabitur sapien nisi aliquam pretium donec dapibus feugiat. Faucibus enim venenatis mus semper.</li>
                        </ul>

                        <span>
                            Enim dapibus ante sapien eleifend dis vulputate quis viverra ultricies vitae eros. Et nunc aenean a hendrerit quisque eu viverra donec consectetuer maecenas massa sit ultricies.
                            Tellus ante quis vici elementum etiam.
                        </span>

                        <div className='authorheader-grid'>
                            <img src={grid1} alt='grid' />
                            <img src={grid2} alt='grid' />
                            <img src={grid3} alt='grid' />
                            <img src={grid4} alt='grid' />
                            <img src={grid5} alt='grid' />
                            <img src={grid6} alt='grid' />
                        </div>

                        <span>
                            Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi vici vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in tellus vici ut.
                            Tellus quam varius commodo luctus aliquam nec amet nullam quis viverra sit fringilla consectetuer.
                        </span>
                        <br /><br />
                        <span>
                            Sit dis sed ante integer ullamcorper vel donec tellus a.
                            Nisi vici vulputate elit quis adipiscing aenean imperdiet justo varius.
                            Vel eget luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in tellus vici ut. Tellus quam varius commodo luctus aliquam nec amet nullam quis viverra sit fringilla consectetuer.
                        </span>

                        <div className='main-socials'>
                            <div className='share-socials'>
                                <small>10k</small>
                                <small>Shares</small>
                            </div>
                            <div className="share-socials-icon">
                                <div className="fb-icon">
                                    <img src={facebook} alt='fb' />
                                    Shares 636</div>
                                <div className="p-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <rect x="0.0585938" width="24" height="24" rx="12" fill="white" />
                                        <path d="M11.4734 6.06556C9.52543 6.28836 7.58435 7.90311 7.50423 10.2097C7.45387 11.6181 7.84415 12.6747 9.15232 12.9713C9.71999 11.9453 8.9692 11.7189 8.85246 10.9767C8.37291 7.93478 12.2768 5.86034 14.3198 7.98403C15.7332 9.45454 14.8027 13.9787 12.5229 13.5084C10.3392 13.0593 13.5919 9.45806 11.8488 8.75095C10.4319 8.17634 9.67879 10.5088 10.3506 11.6673C9.95691 13.6597 9.10883 15.5371 9.45218 18.0361C10.5658 17.2082 10.9412 15.6227 11.2491 13.9693C11.8087 14.3176 12.1074 14.6799 12.8216 14.7362C15.4551 14.9449 16.9258 12.0426 16.5664 9.36542C16.2471 6.99196 13.9352 5.78412 11.4734 6.06556Z" fill="#FF0000" />
                                    </svg>
                                    Shares 636
                                </div>
                                <div className="l-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M3.97321 16.8717V5.57338H0.221158V16.8717H3.9736H3.97321ZM2.09797 4.03105C3.40611 4.03105 4.22052 3.16347 4.22052 2.07925C4.19603 0.970316 3.40611 0.126953 2.12284 0.126953C0.838696 0.126953 0 0.970316 0 2.07915C0 3.16337 0.814112 4.03095 2.07338 4.03095H2.09767L2.09797 4.03105ZM6.05002 16.8717H9.80177V10.5629C9.80177 10.2256 9.82626 9.88754 9.92538 9.64667C10.1965 8.97173 10.8138 8.27306 11.8506 8.27306C13.2079 8.27306 13.7512 9.30905 13.7512 10.828V16.8717H17.5028V10.3936C17.5028 6.92337 15.6521 5.3085 13.1836 5.3085C11.1598 5.3085 10.2709 6.44066 9.77709 7.21177H9.80206V5.57377H6.05021C6.09918 6.63368 6.04992 16.8721 6.04992 16.8721L6.05002 16.8717Z" fill="white" />
                                    </svg>
                                    636
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='authorheader-socials'></div>
                </div>
            </section>
        </div>
    )
}

export default BlogPost
