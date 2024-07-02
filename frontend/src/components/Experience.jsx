import { useState } from 'react'
import '../styles/Experience.css'

function Experience(){
    return(
    <>
        <label id="company-name-label" htmlFor="company-name">Company name <input id="company-name" type="text" placeholder="Enter company name" required /></label>
        <label id="position-label" htmlFor="name">Company name <input id="name" type="text" placeholder="Enter your name" required /></label>
        <label id="email-label"  htmlFor="email">Email <input id="email" type="email" placeholder="Enter your email" required /></label>
        <label id="number-label"  htmlFor="number">Age <input id="number" type="number" placeholder="Enter your age" required /></label>
        <label id="start-date-label-ex" htmlFor="start-date-ex">Start date <input id="start-date-ex" type="date" /></label>
        <label id="end-date-label-ex" htmlFor="end-date-ex">End date <input id="end-date-ex" type="date" /></label>
    </>
    )
}

export default Experience