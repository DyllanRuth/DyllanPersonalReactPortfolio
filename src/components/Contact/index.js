import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
    }, 3000)
}, [])
const sendEmail =(e) => {
    e.preventDefault()
    emailjs
    .sendForm(
        'gmail',
        'template_r91b84i',
        refForm.current,
        '72tfJXct-eYGJTizR'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the Message, please try again.')
        }
    )
}

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in intern opportunities - especially ambitious or 
                    large projects. However, if you have other request or question, please
                    do not hesitate to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li className='half'>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li className='half'>
                                <textarea type="Message" name="message" placeholder="Message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" required />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='ball-grid-pulse'/>
        </>
    )
}

export default Contact