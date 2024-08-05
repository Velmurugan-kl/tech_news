import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => (
  <div className="about-container">
    <h1 className="about-title">About Tech News</h1>
    
    <section className="about-section">
      <h2 className="about-section-title">Our Mission</h2>
      <p className="about-text">
        Tech News is dedicated to bringing you the latest and most relevant technology news. Our mission is to provide accurate, insightful, and timely information to keep you ahead in the fast-paced world of tech.
      </p>
      <p className="about-text">
        We cover everything from groundbreaking gadgets and innovative software to important industry trends and in-depth analysis. Our goal is to be your trusted source for everything technology.
      </p>
    </section>

    <section className="about-section">
      <h2 className="about-section-title">Company History</h2>
      <p className="about-text">
        Founded in 2021, TechSavvy News began with a vision to revolutionize how tech news is delivered. We started as a small blog and quickly grew into a leading source of tech news thanks to our commitment to quality journalism and our deep passion for technology.
      </p>
      <p className="about-text">
        Our team of experts and journalists work tirelessly to ensure that we are on top of the latest trends and innovations. Over the years, we’ve expanded our coverage and enhanced our content to meet the evolving needs of our readers.
      </p>
    </section>

    <section className="about-section">
      <h2 className="about-section-title">Meet the Founders</h2>
      <div className="about-founder-container">
        <div className="about-founder-card">
          <img className="about-founder-image" src="https://via.placeholder.com/100" alt="Varun" />
          <h3 className="about-founder-name">Varun</h3>
          <p className="about-text">Co-Founder & CEO</p>
          <p className="about-text">
            Varun is the driving force behind TechSavvy News. With over a decade of experience in the tech industry, he brings a wealth of knowledge and a passion for technology that inspires the entire team.
          </p>
        </div>
        <div className="about-founder-card">
          <img className="about-founder-image" src="https://via.placeholder.com/100" alt="Saran" />
          <h3 className="about-founder-name">Saran</h3>
          <p className="about-text">Co-Founder & CTO</p>
          <p className="about-text">
            Saran is the tech visionary behind our innovative content and platform. His expertise in software development and his love for gadgets ensure that TechSavvy News remains at the cutting edge of technology.
          </p>
        </div>
        <div className="about-founder-card">
          <img className="about-founder-image" src="https://via.placeholder.com/100" alt="Velmurugan" />
          <h3 className="about-founder-name">Velmurugan</h3>
          <p className="about-text">Co-Founder & Editor</p>
          <p className="about-text">
            Velmurugan oversees our editorial team and ensures that our content is engaging, accurate, and well-researched. With a background in journalism and a passion for tech, he plays a crucial role in shaping the voice of TechSavvy News.
          </p>
        </div>
      </div>
    </section>

    <section className="about-section">
      <h2 className="about-section-title">Our Milestones</h2>
      <div className="about-milestone-container">
        <div className="about-milestone">
          <h3 className="about-milestone-title">2021</h3>
          <p className="about-text">Launched TechSavvy News as a blog with a focus on gadget reviews and tech news.</p>
        </div>
        <div className="about-milestone">
          <h3 className="about-milestone-title">2022</h3>
          <p className="about-text">Expanded coverage to include in-depth analyses and industry trends. Reached 1 million monthly visitors.</p>
        </div>
        <div className="about-milestone">
          <h3 className="about-milestone-title">2023</h3>
          <p className="about-text">Introduced a new website design and added video content to enhance user engagement.</p>
        </div>
      </div>
    </section>

    <section className="about-section">
      <h2 className="about-section-title">Testimonials</h2>
      <div className="about-testimonial-container">
        <div className="about-testimonial">
          <p className="about-text">
            "TechSavvy News is my go-to source for tech updates. Their reviews are thorough and their news coverage is always current. Highly recommend!" – Jane Doe, Tech Enthusiast
          </p>
        </div>
        <div className="about-testimonial">
          <p className="about-text">
            "As a developer, I rely on TechSavvy News for the latest trends and innovations in technology. Their insights have been invaluable." – John Smith, Software Developer
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
