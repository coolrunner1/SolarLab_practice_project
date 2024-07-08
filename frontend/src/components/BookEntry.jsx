import { useState } from 'react'
import '../styles/BookEntry.css'

function BookEntry(){
    return(
        <>
            <div className="book-entries">
                <div className="yellow-stripe"></div>
                <div className="book-cover"></div>
                <div className="book-content">
                    <h4>placeholder</h4>
                        <h5>placeholder description</h5>
                        <div></div>
                        <div className="book-icons">
                            <div></div>
                            <a href="" title="Release page (WIP)"><div className="main-content-icons live-preview"></div></a>
                            <a href="https://github.com/coolrunner1/Infernal_Chaos" title="Infernal Chaos Github page"><div className="main-content-icons github-page"></div></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default BookEntry;