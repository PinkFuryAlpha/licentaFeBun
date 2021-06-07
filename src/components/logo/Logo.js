import React from 'react'
import { LogoText, LogoWrapper, LogoImg } from './LogoElements'
import WebAppLogo from "./logo192.png"

const Logo = (props) => {
    return (
        <LogoWrapper>
            <LogoImg>
                <img src ={WebAppLogo} alt=  "Music-Logo"/>
            </LogoImg>
            <LogoText>Music App</LogoText>
        </LogoWrapper>
    )
}

export default Logo
