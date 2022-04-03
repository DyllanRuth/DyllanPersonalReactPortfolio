import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
    }, 3000)
}, [])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t','','m','e',]}
                        idx={15}
                        />
                </h1>
                <p>
                    I am a very ambitious Software Engineer/Developer looking for a role in a 
                    established IT company with the opportunity to work with the lastest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I am confident, naturally curious, and perpetually working on improving my
                    skills on day at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family oriented person,
                    tech-obsessed, gym focused, and a daily motivator!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color=""/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-grid-pulse'/>
        </>
    )
}

export default About