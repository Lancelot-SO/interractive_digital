import React from 'react'
import "./Contact.css"
import girls from "../assets/girls.png"

const Contact = () => {
    return (
        <div>
            <div class='contact'>
                <div class='contact-text'>
                    <h2>Make a call Today</h2>
                </div>
                <div class='contact-image'>
                    <img src={girls} alt='girls' />
                </div>
            </div>
            <section class="contact-process">
                <div class="contact-next-process">
                    <div class="contact-process-left">
                        <h2>Link Up Quick!</h2>
                        <div class="check-rule">
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#0F172A"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>Do you have a business and wish to be known?</span>
                            </div>
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#0F172A"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>Any business idea?</span>
                            </div>
                            <div class="check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#0F172A"
                                    class="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                                    />
                                </svg>
                                <span>All the business strategy need </span>
                            </div>
                        </div>
                        <div class="contact-find">
                            <a href="/contact">Make the Call</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#2563EB"
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
                    <div class="contact-process-right">
                        <h6>Make an Inquiry</h6>
                        <form action="#" method="post">
                            <div class="form-group">
                                <input type="text" placeholder='Full name' id="fullname" name="fullname" required />
                                <select name="select1">
                                    <option value="option1">What service are you interested in?</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder='Email Address' id="email" name="email" required />
                                <select name="select2">
                                    <option value="option1">How did you hear about us?</option>
                                    <option value="option2">Option B</option>
                                    <option value="option3">Option C</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="tel" placeholder='Phone' id="phone" name="phone" required />
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Leave a message" name="message"></textarea>
                            </div>
                            <button type="submit">Submit
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
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
