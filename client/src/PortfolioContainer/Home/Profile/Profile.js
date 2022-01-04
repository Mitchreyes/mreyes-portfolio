import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://github.com/Mitchreyes'>
                <i className='fa fa-github-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/mitchell-reyes-23507a100/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {' '}
              Hello, I'm <span className='highlighted-text'>Mitch</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'ReactJS',
                    1000,
                    'React Hooks',
                    1000,
                    'React Redux',
                    1000,
                    'MERN Stack',
                    1000,
                    'Python',
                    1000,
                    'CSS',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Front and back end web developer
              </span>
            </span>
          </div>
          <div className='profile-options'>
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
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
