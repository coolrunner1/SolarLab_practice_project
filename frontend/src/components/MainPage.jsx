import { useState } from 'react'
import '../styles/MainPage.css'

function MainPage(){
    return(
        <>
        <div id="main-content-container">
                    <div>
                        <h2>Your projects</h2>
                        <div id="projects-container">
                            <div class="project-entries">
                                <div class="yellow-stripe"></div>
                                <div class="project-content">
                                    <h4>Infernal Chaos</h4>
                                    <h5>My university project under GPL-3 license. Top-down 2d shooter.</h5>
                                    <div></div>
                                    <div class="project-icons">
                                        <div></div>
                                        <a href="" title="Release page (WIP)"><div class="main-content-icons live-preview"></div></a>
                                        <a href="https://github.com/coolrunner1/Infernal_Chaos" title="Infernal Chaos Github page"><div class="main-content-icons github-page"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-entries">
                                <div class="yellow-stripe"></div>
                                <div class="project-content">
                                    <h4>Etch-a-Sketch</h4>
                                    <h5>Small drawing utility written in JavaScript.</h5>
                                    <div></div>
                                    <div class="project-icons">
                                        <div></div>
                                        <a href="https://coolrunner1.github.io/etch-a-sketch" title="Live preview"><div class="main-content-icons live-preview"></div></a>
                                        <a href="https://github.com/coolrunner1/etch-a-sketch" title="Etch-a-Sketch Github page"><div class="main-content-icons github-page"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-entries">
                                <div class="yellow-stripe"></div>
                                <div class="project-content">
                                    <h4>Sign-up form</h4>
                                    <h5>Simple sign-up form. Alas, slightly broken.</h5>
                                    <div></div>
                                    <div class="project-icons">
                                        <div></div>
                                        <a href="https://coolrunner1.github.io/sign-up-form" title="Live preview"><div class="main-content-icons live-preview"></div></a>
                                        <a href="https://github.com/coolrunner1/sign-up-form" title="Sign-up form Github page"><div class="main-content-icons github-page"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-entries">
                                <div class="yellow-stripe"></div>
                                <div class="project-content">
                                    <h4>Survey form</h4>
                                    <h5>Survey form for the freeCodeCamp.</h5>
                                    <div></div>
                                    <div class="project-icons">
                                        <div></div>
                                        <a href="https://coolrunner1.github.io/a-survey-form-project" title="Live preview"><div class="main-content-icons live-preview"></div></a>
                                        <a href="https://github.com/coolrunner1/a-survey-form-project" title="Infernal Chaos Github page"><div class="main-content-icons github-page"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-entries">
                                <div class="yellow-stripe"></div>
                                <div class="project-content">
                                    <h4>Landing Page</h4>
                                    <h5>My first webpage for the Odin Project.</h5>
                                    <div></div>
                                    <div class="project-icons">
                                        <div></div>
                                        <a href="https://coolrunner1.github.io/landing-page" title="Live preview"><div class="main-content-icons live-preview"></div></a>
                                        <a href="https://github.com/coolrunner1/landing-page" title="Landing page Github page"><div class="main-content-icons github-page"></div></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Announcements</h2>
                            <div id="announcements">
                                <div class="announcement">
                                    <h4>React JS</h4>
                                    <h5>I am going to write my first React web app soon!</h5>
                                </div>
                                <div class="announcement">
                                    <h4>Infernal Chaos</h4>
                                    <h5>Will be released soon!</h5>
                                </div>
                                <div class="announcement last">
                                    <h4>MySQL</h4>
                                    <h5>A MySQL project is coming to my Github soon!</h5>
                                </div>
                            </div>
                            <h2>Trending</h2>
                            <div id="trending">
                                <div class="trending-entry">
                                    <div class="trending-icons" id="trending-icon-1"></div>
                                    <div>
                                        <div>@ReactJS</div>
                                        <h5>The most popular front-end JavaScript framework.</h5>
                                    </div>
                                </div>
                                <div class="trending-entry">
                                    <div class="trending-icons" id="trending-icon-2"></div>
                                    <div>
                                        <div>@Docker</div>
                                        <h5>Container software.</h5>
                                    </div>
                                </div>
                                <div class="trending-entry">
                                    <div class="trending-icons" id="trending-icon-3"></div>
                                    <div>
                                        <div>@Webpack</div>
                                        <h5>Module bundler for JavaScript.</h5>
                                    </div>
                                </div>
                                <div class="trending-entry">
                                    <div class="trending-icons" id="trending-icon-4"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" /></svg>
                                    </div>
                                    <div>
                                        <div>@Tailwind</div>
                                        <h5>Popular CSS framework.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default MainPage;