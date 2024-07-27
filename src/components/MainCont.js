import React from 'react'
import ai_logo from './ai-logo.png';
import ArcGIS_logo from './ArcGIS-logo.png';
import bi from './bi.jpg';
import bootstrap_logo from './bootstrap-logo.png';
import css3_logo from './css3-logo.png';
import ge_pro_logo from './ge-pro-logo.png';
import html5_logo from './html5-logo.png';
import js_logo from './js-logo.png';
import ms_excel_logo from './ms-excel-logo.png';
import ms_pp_logo from './ms-pp-logo.png';
import ms_word from './ms-word.png';
import react_logo from './react-logo.png';
import snip1 from './snip1.JPG';
import snip2 from './snip2.JPG';
import snip3 from './snip3.jpg';
import omair_cv from "./omair's cv (B).pdf";
export default function MainCont() {
    return (
        <div id="home">
            <div className="contain">
                <div className='topline'>
                    <span className='free1cover'><img className='free1' src={bootstrap_logo} alt="" /></span>
                    <span className='free2cover'><img className='free2' src={css3_logo} alt="" /></span>
                    <span className='free3cover'><img className='free3' src={html5_logo} alt="" /></span>
                    <span className='free4cover'><img className='free4' src={js_logo} alt="" /></span>
                    <span className='free5cover'><img className='free5' src={react_logo} alt="" /></span>
                    <h1><span id="element">Hello World! Welcome to my portfolio!</span></h1>
                </div>

                
                <div className="intro" id="about">
                    <div className="cover-container">
                        <div className="img-container">
                            <img src={bi} alt="" />
                        </div>
                    </div>
                    <div className="info-1">
                        {/* <h1 id="about"><span id="element">Hello World! Welcome to my portfolio!</span></h1> */}
                        <h3>A little about me:</h3>
                        <span>Hello! my name is Omair. I have completed my MSc and looking to start my professional journey in
                            an organization with an encouraging environment. I have learnt Web Development through various
                            platforms on internet. If you are looking for a person who require minimal instructions to acquire
                            new skills to do tasks, then you are on a correct place. </span>
                        <div id="cv">
                            <a href={omair_cv} download={omair_cv}>
                                <button>Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="skills-cover" id="skill">
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className="skills-container">
                            <div className="left">
                                <h5>Web Development</h5>
                                <div className="logo-container">
                                    <div className="logos">
                                        <img src={html5_logo} alt="" />
                                        <span>HTML</span>
                                    </div>
                                    <div className="logos">
                                        <img src={css3_logo} alt="" />
                                        <span>CSS</span>
                                    </div>
                                    <div className="logos">
                                        <img src={js_logo} alt="" />
                                        <span>JavaScript</span>
                                    </div>
                                    <div className="logos">
                                        <img src={react_logo} alt="" />
                                        <span>ReactJS</span>
                                    </div>
                                    <div className="logos">
                                        <img src={bootstrap_logo} alt="" />
                                        <span>Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <h5>Others</h5>
                                <div className="logo-container">
                                    <div className="logos">
                                        <img src={ai_logo} alt="" />
                                        <span>Illustrator</span>
                                    </div>
                                    <div className="logos">
                                        <img src={ArcGIS_logo} alt="" />
                                        <span>ArcGIS</span>
                                    </div>
                                    <div className="logos">
                                        <img src={ge_pro_logo} alt="" />
                                        <span>Google Earth Pro</span>
                                    </div>
                                    <div className="logos">
                                        <img src={ms_word} alt="" />
                                        <span>MS Word</span>
                                    </div>
                                    <div className="logos">
                                        <img src={ms_excel_logo} alt="" />
                                        <span>MS Excel</span>
                                    </div>
                                    <div className="logos">
                                        <img src={ms_pp_logo} alt="" />
                                        <span>MS PowerPoint</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="projects-cover" id="project">
                    <div className="projects">
                        <h3>Projects</h3>
                        <div className="projects-container">
                            <div className="setpro mx-3">
                                <div className="logo-container">
                                    <div className="card" style={{ width: "28rem" }}>
                                        <img src={snip1} className="card-img-top" alt="..." />
                                        <div className="card-body text-center text-white">
                                            <h5 className="card-title">MyTicTacToe</h5>
                                            <p className="card-text">I made this game using HTML, CSS and JavaScript. With the help of
                                                Youtube and Google, I tried to make it as good as possible. I added sounds using JS
                                                so that whenever the player wins or touches/clicks on reset button, the respective
                                                sound will play. Animations are also added in this project.</p>
                                            <a href="https://omair619.github.io/MyTicTacToe/" className="btn btn-primary">View
                                                Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="setpro mx-3">
                                <div className="logo-container">
                                    <div className="card" style={{ width: "28rem" }}>
                                        <img src={snip2} className="card-img-top" alt="..." />
                                        <div className="card-body text-center text-white">
                                            <h5 className="card-title">Spotify Clone</h5>
                                            <p className="card-text">With the help of Youtube and Google, I tried to make Spotify clone.
                                                I used HTML, CSS and JavaScript in this project. We can play/pause the music when we
                                                click/touch on a specific button and music name changes accordingly. A gif also
                                                comes up when the music is playing.</p>
                                            <a href="https://omair619.github.io/Spotify-Clone/" className="btn
                                            btn-primary">View
                                                Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="setpro mx-3">
                                <div className="logo-container">
                                    <div className="card" style={{ width: "28rem" }}>
                                        <img src={snip3} className="card-img-top" alt="..." />
                                        <div className="card-body text-center text-white">
                                            <h5 className="card-title">TextUtils React App</h5>
                                            <p className="card-text">I made this project with the help of Youtube Tutorials and Google.
                                                I used HTML, CSS, JavaScript and ReactJS in this project. We can can use TextUtils to convert text into uppercase or lowercase, extract emails and to count words.</p>
                                            <a href="https://omair619.github.io/textutils-react/" className="btn
                                            btn-primary">View
                                                Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>


                <div className="contact-cover" id="contacts"><div className="contact">
                    <h3>Get in touch</h3>
                    <div className="contact-container">
                        <div className="divone">Email:</div>
                        <div className="divtwo">omairuddin19@gmail.com</div>
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}
