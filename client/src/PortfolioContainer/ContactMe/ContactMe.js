import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import imgBack from '../../../src/images/mailz.jpeg'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

const ContactMe = (props) => {
  /*STATES */
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [banner, setBanner] = useState('')
  const [bool, setBool] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let data = {
        name,
        email,
        message,
      }
      setBool(true)
      const res = await axios.post(`/contact`, data)
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)

        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div className='main-container fade-in' id={props.id || ''}>
      <ScreenHeading subHeading={'Lets keep in touch'} title={'Contact Me'} />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            <span>Get in touch</span>
          </h2>
          <a href='https://github.com/Mitchreyes'>
            <i className='fa fa-github-square'></i>
          </a>
          <a href='https://www.linkedin.com/in/mitchell-reyes-23507a100/'>
            <i className='fa fa-linkedin-square'></i>
          </a>
        </div>
        <div className='back-form'>
          {/* <div className='img-back'>
            <h4>Send your email here</h4>
            <img src={imgBack} alt='not found' />
          </div> */}
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input type='text' onChange={handleName} value={name} />

            <label htmlFor='email'>Email</label>
            <input type='email' onChange={handleEmail} value={email} />

            <label htmlFor='message'>Message</label>
            <textarea type='text' onChange={handleMessage} value={message} />

            <div className='send-btn'>
              <button type='submit'>
                {bool ? <span>Sending</span> : <span>Send</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
