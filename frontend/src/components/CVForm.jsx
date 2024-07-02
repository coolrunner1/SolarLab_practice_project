import { useState } from 'react'
import '../styles/CVForm.css'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'

function CVForm(){
    return(
        <form id="survey-form">
            <GeneralInfo/>
            <Education/>
            <Experience/>
        </form>
    )
}
export default CVForm