import React from 'react'
import "./Footer.css"
import plane from "../assets/plane-design.png"


const Footer = () => {
    return (
        <footer>
            <div className='main-footer'>
                <div className='left-footer'>
                    <span>Get in touch<br />
                        info<span className='at-info'>@interactivedigital.com.gh</span>
                    </span>
                    <div className='left-socials'>
                        <h5>Follow us on</h5>
                        <div className='left-main-socials'>
                            <div className='lms'>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                        <rect x="0.983887" y="0.361328" width="22.4649" height="22.4649" rx="11.2324" fill="black" />
                                        <path d="M12.2189 6.06833C14.0197 6.06833 14.2311 6.07636 14.9428 6.10847C15.6011 6.1379 15.957 6.24761 16.1951 6.34126C16.5109 6.46435 16.7356 6.60884 16.9711 6.84431C17.2066 7.07978 17.3537 7.30455 17.4742 7.6203C17.5651 7.85844 17.6775 8.21432 17.7069 8.87257C17.7391 9.58434 17.7471 9.79572 17.7471 11.5965C17.7471 13.3974 17.7391 13.6087 17.7069 14.3205C17.6775 14.9788 17.5678 15.3346 17.4742 15.5728C17.3511 15.8885 17.2066 16.1133 16.9711 16.3488C16.7356 16.5842 16.5109 16.7314 16.1951 16.8518C15.957 16.9428 15.6011 17.0552 14.9428 17.0846C14.2311 17.1167 14.0197 17.1248 12.2189 17.1248C10.4181 17.1248 10.2067 17.1167 9.4949 17.0846C8.83665 17.0552 8.48077 16.9455 8.24262 16.8518C7.92688 16.7287 7.70211 16.5842 7.46664 16.3488C7.23117 16.1133 7.084 15.8885 6.96359 15.5728C6.87261 15.3346 6.76023 14.9788 6.73079 14.3205C6.69868 13.6087 6.69066 13.3974 6.69066 11.5965C6.69066 9.79572 6.69868 9.58434 6.73079 8.87257C6.76023 8.21432 6.86993 7.85844 6.96359 7.6203C7.08667 7.30455 7.23117 7.07978 7.46664 6.84431C7.70211 6.60884 7.92688 6.46167 8.24262 6.34126C8.48077 6.25029 8.83665 6.1379 9.4949 6.10847C10.2067 6.07368 10.4207 6.06833 12.2189 6.06833ZM12.2189 4.85352C10.3886 4.85352 10.1585 4.86154 9.43871 4.89365C8.72159 4.92576 8.23192 5.04082 7.80379 5.20672C7.35961 5.37797 6.98499 5.61077 6.61038 5.98538C6.23577 6.35999 6.00565 6.73728 5.83172 7.17879C5.66582 7.60692 5.55076 8.09659 5.51865 8.81638C5.48654 9.5335 5.47852 9.76362 5.47852 11.5939C5.47852 13.4241 5.48654 13.6542 5.51865 14.374C5.55076 15.0911 5.66582 15.5808 5.83172 16.0116C6.00297 16.4558 6.23577 16.8304 6.61038 17.205C6.98499 17.5796 7.36228 17.8098 7.80379 17.9837C8.23192 18.1496 8.72159 18.2646 9.44138 18.2968C10.1612 18.3289 10.3886 18.3369 12.2215 18.3369C14.0545 18.3369 14.2819 18.3289 15.0017 18.2968C15.7188 18.2646 16.2085 18.1496 16.6393 17.9837C17.0835 17.8124 17.4581 17.5796 17.8327 17.205C18.2073 16.8304 18.4374 16.4531 18.6114 16.0116C18.7773 15.5835 18.8923 15.0938 18.9244 14.374C18.9565 13.6542 18.9646 13.4268 18.9646 11.5939C18.9646 9.76094 18.9565 9.5335 18.9244 8.81371C18.8923 8.09659 18.7773 7.60692 18.6114 7.17611C18.4401 6.73193 18.2073 6.35732 17.8327 5.9827C17.4581 5.60809 17.0808 5.37797 16.6393 5.20405C16.2112 5.03815 15.7215 4.92309 15.0017 4.89098C14.2792 4.86154 14.0491 4.85352 12.2189 4.85352Z" fill="white" />
                                        <path d="M12.2183 8.13477C10.3078 8.13477 8.75586 9.68406 8.75586 11.5973C8.75586 13.5105 10.3051 15.0597 12.2183 15.0597C14.1315 15.0597 15.6808 13.5105 15.6808 11.5973C15.6808 9.68406 14.1315 8.13477 12.2183 8.13477ZM12.2183 13.8423C10.9768 13.8423 9.97067 12.8362 9.97067 11.5946C9.97067 10.353 10.9768 9.3469 12.2183 9.3469C13.4599 9.3469 14.466 10.353 14.466 11.5946C14.466 12.8362 13.4599 13.8423 12.2183 13.8423Z" fill="white" />
                                        <path d="M15.8164 8.80369C16.2627 8.80369 16.6245 8.44189 16.6245 7.99559C16.6245 7.5493 16.2627 7.1875 15.8164 7.1875C15.3701 7.1875 15.0083 7.5493 15.0083 7.99559C15.0083 8.44189 15.3701 8.80369 15.8164 8.80369Z" fill="white" />
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                            </div>
                            <div className='lms'>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                        <rect x="0.101074" y="0.662109" width="22.4649" height="22.4649" rx="11.2324" fill="#1D9BF0" />
                                        <path d="M9.27733 17.8207C14.2589 17.8207 16.9828 13.6928 16.9828 10.1153C16.9828 9.99733 16.9828 9.87939 16.9772 9.76707C17.5051 9.38517 17.9656 8.90779 18.3307 8.36301C17.8477 8.57643 17.3254 8.72245 16.775 8.78985C17.3366 8.45287 17.7634 7.92495 17.9656 7.29032C17.4433 7.59921 16.8648 7.82386 16.2471 7.94741C15.7528 7.41949 15.0508 7.09375 14.2701 7.09375C12.7762 7.09375 11.5631 8.30685 11.5631 9.80077C11.5631 10.0142 11.5856 10.222 11.6361 10.4185C9.38404 10.3062 7.39029 9.22791 6.05363 7.58798C5.82336 7.98673 5.68857 8.45287 5.68857 8.9471C5.68857 9.88501 6.16595 10.7162 6.89606 11.1992C6.45238 11.188 6.03678 11.0644 5.67172 10.8622C5.67172 10.8735 5.67172 10.8847 5.67172 10.8959C5.67172 12.2101 6.60402 13.2997 7.8452 13.5524C7.62055 13.6142 7.37905 13.6479 7.13194 13.6479C6.95784 13.6479 6.78935 13.631 6.62086 13.5973C6.96345 14.6756 7.96314 15.4563 9.14816 15.4788C8.22149 16.2032 7.05331 16.6357 5.78405 16.6357C5.56502 16.6357 5.3516 16.6245 5.13818 16.5964C6.3232 17.3714 7.74972 17.8207 9.27733 17.8207Z" fill="white" />
                                    </svg>
                                </a>
                                <span>Twitter</span>
                            </div>
                            <div className='lms'>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <rect x="0.419434" y="0.361328" width="22.4649" height="22.4649" rx="11.2324" fill="#0A66C2" />
                                        <path d="M16.9177 5.41602H6.38621C6.14431 5.41602 5.91232 5.51211 5.74127 5.68316C5.57022 5.85421 5.47412 6.0862 5.47412 6.3281V16.8596C5.47412 17.1015 5.57022 17.3335 5.74127 17.5045C5.91232 17.6756 6.14431 17.7717 6.38621 17.7717H16.9177C17.1596 17.7717 17.3916 17.6756 17.5626 17.5045C17.7337 17.3335 17.8298 17.1015 17.8298 16.8596V6.3281C17.8298 6.0862 17.7337 5.85421 17.5626 5.68316C17.3916 5.51211 17.1596 5.41602 16.9177 5.41602ZM9.1568 15.9415H7.29916V10.0408H9.1568V15.9415ZM8.22669 9.22311C8.01597 9.22192 7.81033 9.15834 7.63571 9.04039C7.46109 8.92244 7.32533 8.75541 7.24555 8.56037C7.16577 8.36534 7.14556 8.15104 7.18746 7.94453C7.22935 7.73802 7.33149 7.54854 7.48097 7.40002C7.63045 7.2515 7.82057 7.15058 8.02735 7.11001C8.23413 7.06944 8.44829 7.09103 8.64281 7.17206C8.83733 7.25309 9.00349 7.38992 9.12031 7.56529C9.23714 7.74066 9.2994 7.94671 9.29923 8.15743C9.30122 8.29851 9.27478 8.43854 9.2215 8.56919C9.16822 8.69983 9.08918 8.81841 8.98909 8.91785C8.889 9.0173 8.76992 9.09558 8.63894 9.14802C8.50795 9.20046 8.36775 9.226 8.22669 9.22311ZM16.0039 15.9467H14.1471V12.723C14.1471 11.7723 13.743 11.4789 13.2213 11.4789C12.6704 11.4789 12.1299 11.8942 12.1299 12.747V15.9467H10.2722V10.0451H12.0587V10.8628H12.0827C12.262 10.4999 12.8901 9.8795 13.8485 9.8795C14.885 9.8795 16.0048 10.4947 16.0048 12.2966L16.0039 15.9467Z" fill="white" />
                                    </svg>
                                </a>
                                <span>LinkedIn</span>
                            </div>

                        </div>
                        <img src={plane} alt='plane' />
                    </div>
                </div>

                <div className='middle-footer'>
                    <ul>
                        <li><a href='/'>Free Market Research</a></li>
                        <li><a href='/'>About us</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Social media marketing</a></li>
                        <li><a href='/'>Portfolio</a></li>
                        <li><a href='/'>Case Studies</a></li>
                        <li><a href='/'>Easter Holiday 2022</a></li>
                        <li><a href='/'>Beta Malt Kiddie Jollof Festival</a></li>
                        <li><a href='/'>Contact Us</a></li>

                    </ul>
                </div>
                <div className='right-footer'>
                    <ul>
                        <li><a href='/'>Use Cases</a></li>
                        <li><a href='/'>SEO</a></li>
                        <li><a href='/'>Content Marketing</a></li>
                        <li><a href='/'>Consumer Research</a></li>
                        <li><a href='/'>Public Relations</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-down'>
                <div className='left-content'>
                    <span>@ 2024 interactivedigital, Inc. All rights reserved.</span>

                </div>
                <ul className='right-content'>
                    <li><a href='/'>Terms</a></li>
                    <li><a href='/'>Privacy</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
