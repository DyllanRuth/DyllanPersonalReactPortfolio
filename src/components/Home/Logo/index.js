import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
const bgRef = useRef();
const outlineLogoRef = useRef();
const solidLogoRef = useRef();

useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
    .to(bgRef.current, {
        duration: 1,
        opacity: 1,
    })
    .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 8,
    })

    gsap.fromTo(
        solidLogoRef.current,
        {
            opacity:0,
        },
        {
            opacity:1,
            delay: 4,
            duration:4,
        }
    )
}, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="D" />
            <svg 
            width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0 559 897"
            xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(0 457) scale(.1 -.1)"
                fill="none"
                >
                <path
                    ref={outlineLogoRef}
                    d="m183.922 53.313-183.203.39V683h183.203c203.516 0 327.734-118.75 327.734-314.062 0-196.485-124.218-316.016-327.734-315.625Zm.781 503.515h-57.812V178.703h56.64c124.61 0 200.391 71.875 200.391 189.844 0 117.187-75.391 188.281-199.219 188.281Z"
                />
                <path
                    ref={outlineLogoRef}
                    d="m239.891 1.313-183.203.39V631H239.89c203.515 0 327.734-118.75 327.734-314.062C567.624 120.453 443.405.922 239.89 1.313Zm.781 503.515h-57.813V126.703H239.5c124.609 0 200.391 71.875 200.391 189.844 0 117.187-75.391 188.281-199.219 188.281Z"
                />
                </g>
            </svg>
        </div>
    )
}

export default Logo