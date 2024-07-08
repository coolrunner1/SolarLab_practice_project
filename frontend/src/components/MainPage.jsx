import { useState } from 'react'
import '../styles/MainPage.css'
import BookEntry from '../components/BookEntry.jsx'

function MainPage(){
    return(
        <>
        <div id="main-content-container">
                    <div>
                        <div>
                            <h2>Анонсы</h2>
                            <div id="announcements">
                                <div className="announcement">
                                    <h4>React JS</h4>
                                    <h5>I am going to write my first React web app soon!</h5>
                                </div>
                                <div className="announcement">
                                    <h4>Infernal Chaos</h4>
                                    <h5>Will be released soon!</h5>
                                </div>
                                <div className="announcement last">
                                    <h4>MySQL</h4>
                                    <h5>A MySQL project is coming to my Github soon!</h5>
                                </div>
                            </div>
                            <h2>Авторы недели</h2>
                            <div id="trending">
                                <div className="trending-entry">
                                    <div className="trending-icons" id="trending-icon-1"></div>
                                    <div>
                                        <div>@ReactJS</div>
                                        <h5>The most popular front-end JavaScript framework.</h5>
                                    </div>
                                </div>
                                <div className="trending-entry">
                                    <div className="trending-icons" id="trending-icon-2"></div>
                                    <div>
                                        <div>@Docker</div>
                                        <h5>Container software.</h5>
                                    </div>
                                </div>
                                <div className="trending-entry">
                                    <div className="trending-icons" id="trending-icon-3"></div>
                                    <div>
                                        <div>@Webpack</div>
                                        <h5>Module bundler for JavaScript.</h5>
                                    </div>
                                </div>
                                <div className="trending-entry">
                                    <div className="trending-icons" id="trending-icon-4"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" /></svg>
                                    </div>
                                    <div>
                                        <div>@Tailwind</div>
                                        <h5>Popular CSS framework.</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h2>Книги</h2>
                        <div id="books-container">
                            <BookEntry/>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default MainPage;