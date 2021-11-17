import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
  const[hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Surfing Made Easy</HeroH1>
        <HeroP>
          Sign Up to catch your next big wave.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
          to="signup"
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'>
            Get On The Wave {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
