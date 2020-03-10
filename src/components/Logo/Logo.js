import React from 'react'
import burgerLogo from '../../assets/images/original.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo}></img>
    </div>
)

export default logo