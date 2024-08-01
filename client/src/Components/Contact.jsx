import React from 'react'
import './Contact.css'
export const Contact = () => {
  return (
    <div>
        <div class="contact-form">
          <form action="#" method="post">
            <div class="form-row">
              <div class="name">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="email">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <label for="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <label for="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              required
            />
            <div class="send">
              <button type="submit">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M633.319 722.634L429 860.298V672.034z"
                    fill="#009fff"
                  />
                  <path
                    d="M446.662 681.407l388.442 104.557L960 163.702l-159.706 99.826L64 723.667z"
                    fill="#75c2f0"
                  />
                  <path
                    d="M446.662 681.407L960 163.702l-159.706 99.826L64 723.667z"
                    fill="#244f69"
                  />
                </svg>
                Submit
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}
