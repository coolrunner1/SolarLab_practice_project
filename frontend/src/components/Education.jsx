import { useState } from 'react'
import '../styles/Education.css'

function Education(){
    return(
    <>
        <label id="school-label" htmlFor="school">College/University <input id="school" type="text" placeholder="Your College/University " /></label>
        <label htmlFor="degree-type">
            Degree type
            <select id="degree-type">
            <option>Lower post-secondary vocational education</option>
            <option>Specialist Degree</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>PhD</option>
            <option>Other</option>
            </select>
        </label>
        <label id="start-date-label-ed" htmlFor="start-date-ed">Start date <input id="start-date-ed" type="date" /></label>
        <label id="end-date-label-ed" htmlFor="end-date-ed">End date <input id="end-date-ed" type="date" /></label>
    </>
    )
}

export default Education