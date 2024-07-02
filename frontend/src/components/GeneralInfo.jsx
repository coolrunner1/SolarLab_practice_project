import { useState } from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo(){
    return(
        <>
        <label id="name-label" htmlFor="name">Name <input id="name" type="text" placeholder="Enter your name" required /></label>
        <label id="email-label"  htmlFor="email">Email <input id="email" type="email" placeholder="Enter your email" required /></label>
        <label id="number-label"  htmlFor="number">Age <input id="number" type="number" placeholder="Enter your age" required /></label>
        <label htmlFor="dropdown">
            Gender
            <select id="dropdown">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            </select>
        </label>
        </>
    )
}
export default GeneralInfo