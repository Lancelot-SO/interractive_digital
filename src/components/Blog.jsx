import React from 'react'
import "./Blog.css"
import blog from "../assets/main-blog.png"
import conference from "../assets/conference.png"
import setup from "../assets/setup.png"
import setup1 from "../assets/setup1.png"
import study from "../assets/study.png"
import post1 from "../assets/post1.png"
import post2 from "../assets/post2.png"
import post3 from "../assets/post3.png"
import post4 from "../assets/post4.png"
import post5 from "../assets/post5.png"
import post6 from "../assets/post6.png"
import post7 from "../assets/post7.png"
import post8 from "../assets/post8.png"
import post9 from "../assets/post9.png"

import author from "../assets/postImage.svg"



const Blog = () => {
    return (
        <div>
            <div className='new-blog'>
                <img src={blog} alt='blog' />
                <div className='new-blog-text'>
                    <h2>All the insight at your finger tips</h2>
                    <p>All you need to read....</p>
                </div>
            </div>
            <section>
                <div className='main-blog'>
                    <div className='separate-blog'>
                        <div className='left-blog'>
                            <h3>Recent blog posts</h3>
                            <img src={conference} alt='conf' />
                            <div className='author-name'>
                                <small>Maame Ama</small>
                                <small>• 1 Jan 2023</small>
                            </div>
                            <span className='left-blog-title'>UX review presentations</span>
                            <span className='left-blog-desc'>How do you create compelling presentations that
                                wow your colleagues and impress your managers?
                            </span>
                            <div className='categories'>
                                <a href='/blog'>Design</a>
                                <a href='/blog'>Research</a>
                                <a href='/blog'>Presentation</a>
                            </div>
                        </div>
                        <div className='right-blog'>
                            <div className='right-blog-col'>
                                <div className='blog-setup'>
                                    <img src={setup} alt='setup' />
                                    <div className='blog-setup-content'>
                                        <div className='right-author-name'>
                                            <small>Phoenix Baker </small>
                                            <small>• 1 Jan 2023</small>
                                        </div>
                                        <strong>Migrating to Linear 101</strong><br />
                                        <span>Linear helps streamline software projects, sprints, tasks, and bug tracking.
                                            Here’s how to get...
                                        </span>
                                        <div className='right-categories'>
                                            <a href='/blog'>Design</a>
                                            <a href='/blog'>Research</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-setup'>
                                    <img src={setup1} alt='setup' />
                                    <div className='blog-setup-content'>
                                        <div className='right-author-name'>
                                            <small>Lana Steiner</small>
                                            <small> • 1 Jan 2023</small>
                                        </div>
                                        <strong>Building your API Stack</strong><br />
                                        <span>Linear helps streamline software projects, sprints, tasks, and bug tracking.
                                            Here’s how to get...
                                        </span>
                                        <div className='right-categories'>
                                            <a href='/blog'>Design</a>
                                            <a href='/blog'>Research</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='blogger'>
                    <div className='blogger-setup'>
                        <img src={study} alt='setup' />
                        <div className='blogger-setup-content'>
                            <div className='blogger-right-author'>
                                <small>Phoenix Baker </small>
                                <small>• 1 Jan 2023</small>
                            </div>
                            <strong>Migrating to Linear 101</strong><br />
                            <span>A grid system is a design tool used to arrange content
                                on a webpage.
                                It is a series of vertical and horizontal lines that create a matrix of intersecting points,
                                which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website,
                                and can help to make the layout more visually appealing and easier to navigate.
                            </span>
                            <div className='blogger-right-categories'>
                                <a href='/blog'>Design</a>
                                <a href='/blog'>Research</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='main-blog-post'>
                    <h3>All blog posts</h3>
                    <div className='blog-posts'>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post1} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post2} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post3} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-posts'>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post4} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post5} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post6} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='blog-posts'>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post7} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post8} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className="blog-poster">
                                <img className="post-image" src={post9} alt='posts' />
                                <div className='branding'>
                                    <small>Branding</small>
                                    <h6>6min Read</h6>
                                </div>
                                <p>Integer Maecenas Eget Viverra</p>
                                <div className='post-share'>
                                    <img src={author} alt='posts' />
                                    <h5>Maame Ama</h5>
                                    <h6>-- June 28, 2018</h6>
                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M2.90909 10.875C3.96345 10.875 4.81818 10.0355 4.81818 9C4.81818 7.96447 3.96345 7.125 2.90909 7.125C1.85473 7.125 1 7.96447 1 9C1 10.0355 1.85473 10.875 2.90909 10.875Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 5.25C14.147 5.25 15.0018 4.41053 15.0018 3.375C15.0018 2.33947 14.147 1.5 13.0927 1.5C12.0383 1.5 11.1836 2.33947 11.1836 3.375C11.1836 4.41053 12.0383 5.25 13.0927 5.25Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0927 16.5C14.147 16.5 15.0018 15.6605 15.0018 14.625C15.0018 13.5895 14.147 12.75 13.0927 12.75C12.0383 12.75 11.1836 13.5895 11.1836 14.625C11.1836 15.6605 12.0383 16.5 13.0927 16.5Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.57031 9.91992L11.4247 13.7066M11.4247 4.29492L4.57031 8.08164" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        1K shares
                                    </small>

                                </div>
                                <span>Aenean eleifend ante maecenas pulvinar montes lorem et
                                    pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                                </span>

                                <div class="post-blog-arrow">
                                    <a href="/blogpost">Visit Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="main-pagination">
                    <a href='/blog'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M12.8346 7.49935H1.16797M1.16797 7.49935L7.0013 13.3327M1.16797 7.49935L7.0013 1.66602" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        previous
                    </a>
                    <ul class="pagination">

                        <li><a href="/blog">1</a></li>
                        <li><a href="/blog">2</a></li>
                        <li><a href="/blog">3</a></li>
                        <li>...</li>
                        <li><a href="/blog">8</a></li>
                        <li><a href="/blog">9</a></li>
                        <li><a href="/blog">10</a></li>

                    </ul>
                    <a href='/blog'>
                        next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M4.16797 10.4993H15.8346M15.8346 10.4993L10.0013 4.66602M15.8346 10.4993L10.0013 16.3327" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </div>


            </section>
        </div>
    )
}

export default Blog
