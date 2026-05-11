import React from 'react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { FaStar, FaUsers, FaCalendarCheck } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tag" data-aos="fade-down" data-aos-delay="100">
            <BsLightningChargeFill color="#00d4ff" size={14}/> Online Fitness Coaching
          </p>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Transform Your Body <br />
            <span>In Just 30 Days</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            I help busy professionals get fit, build confidence, 
            and create a healthy lifestyle — without spending hours in the gym.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <a href="#contact" className="btn-primary">Start Your Journey</a>
            <a href="#services" className="btn-secondary">See My Programs</a>
          </div>
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
            <div className="stat">
              <FaUsers color="#00d4ff" size={24}/>
              <h3>500+</h3>
              <p>Clients Transformed</p>
            </div>
            <div className="stat">
              <FaStar color="#00d4ff" size={24}/>
              <h3>5.0</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat">
              <FaCalendarCheck color="#00d4ff" size={24}/>
              <h3>30</h3>
              <p>Days To Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}