import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ]

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 75 },
    { skill: 'React JS', ratingPercentage: 75 },
    { skill: 'Express JS', ratingPercentage: 40 },
    { skill: 'Node JS', ratingPercentage: 40 },
    { skill: 'Mongo Db', ratingPercentage: 50 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 80 },
  ]

  const projectsDetails = [
    {
      title: 'Portfolio Website',
      duration: { fromDate: '2021', toDate: '2021' },
      description: 'A Portfolio website to showcase myself and my projects.',
      subHeading: 'Technologies Used: React JS, Bootstrap',
    },
    {
      title: (
        <a href='https://book-review-club-mpreyes.herokuapp.com/'>
          Book Review Social Media Website
        </a>
      ),
      duration: { fromDate: '2021', toDate: '2021' },
      description:
        'A book review website with social media functions.  Users may post books reviews, as well as comment and like reviews posted by other users.',
      subHeading:
        'Technologies Used:  ReactJS, Mongo DB, Express Js, Node Js, Redux.',
    },
  ]

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'Bottega University'}
        subHeading={'Full Stack Development Program'}
        fromDate={'2020'}
        toDate={'2021'}
      />
      <ResumeHeading
        heading={'University of Portland'}
        subHeading={'Bachelors Degree - Business Administration, Finance'}
        fromDate={'2013'}
        toDate={'2017'}
      />

      <ResumeHeading
        heading={'High School '}
        subHeading={'Mid-Pacific Institute'}
        fromDate={'2007'}
        toDate={'2013'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'TEC Equipment'}
          subHeading={'Floorplan Administrator'}
          fromDate={'2019'}
          toDate={'2021'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Corporate accounting and administration position, overseeing all
            flooring loans for purchased trucks
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Worked with partnered banks and operated the flooring line duties
            on the web portal such as adding flooring lines and paying off loans
          </span>
          <br />
          <span className='resume-description-text'>
            - Created and managed reconciliation with internal ledger and
            external banking data
          </span>
          <br />
          <span className='resume-description-text'>
            - Operated primarily in excel and the accounting software CDK
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Music'
        description='I love going to music shows, whether it be live music or a DJ set.  I enjoy music from mostly all genres, but my favorite is dance music and rock'
      />
      <ResumeHeading
        heading='Tech'
        description='Growing up on video games and having built my computer by the age of 9, I was always interested in the tech world.  Whether it be electronics, or some of the newer technology such as AI and VR, I am always intrigued by progress.'
      />
      <ResumeHeading
        heading='Snowboarding'
        description='Snowboarding is both my mental and physical therapy.  Being up in the mountains and flowing down is almost therapeutic at this point.  I try to never miss a season!'
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <ScreenHeading
          title={'Resume'}
          subHeading={'The nitty gritty details'}
        />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume
