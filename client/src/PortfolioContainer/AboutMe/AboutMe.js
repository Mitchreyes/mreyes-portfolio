import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTANTS = {
    description:
      'Full-stack web developer with a Finance business background.  Recently completed the Full Stack Web Development course at Bottega University learning ReactJS, Python (introductory), JavaScript, CSS/SCSS, HTML, and the MERN stack.  Professional background in finance and accounting has led to a detail-oriented perspective when it comes to coding. An avid reader and a lifelong learner',
    highlights: {
      bullets: [
        'ReactJS (Intermediate/Advanced)',
        'Javascript, HTML, CSS (Intermediate/Advanced)',
        'Python (Introductory)',
        'NodeJS, Express, MongoDB (Introductory)',
      ],
      heading: 'Coding Stacks:',
    },
  }

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div
      className='about-me-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why choose me'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlights-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me{' '}
              </button>
              <a
                href='mitch-reyes-resume.pdf'
                download='Mitch mitch-reyes-resume.pdf'
              >
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
