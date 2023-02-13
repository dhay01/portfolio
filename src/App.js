import './App.css';
import Button from "./components/button";
import Typewriter from "typewriter-effect";
import Statistics from "./statistics";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from 'styled-components'


function App() {
    return (
        <Wrapper>
            <Parallax pages={3}>
                <ParallaxLayer offset={0} speed={0.9} className='section1'>
                    <div className="margin-main">
                        <div className="main-container">
                            <h1 className="main-header">
                    <span className="h1-main">
                         &lt;h1&gt;
                    </span> this is <span className="main-name">suhaib salih</span><span
                                className="h1-main"> &lt;/h1&gt;</span>

                            </h1>
                            <div className="secondary-container">
                                <span className="span-main">&lt;span&gt;</span>
                                <br/>
                                <h2 id="sentence" className="secondary-header"> and i
                                    am a <span id="writtereffect"><Typewriter
                                        options={{
                                            loop: true,
                                        }}
                                        onInit={(typewriter) => {

                                            typewriter.pauseFor(2500)
                                                .typeString('A system administrator')
                                                .pauseFor(100)
                                                .typeString(' AND ')
                                                .pauseFor(1000)
                                                .typeString(' <span style="color: #03F0FF;">a web hosting specialist</span> ')
                                                .deleteChars(26)
                                                .typeString(' <span style="color: #03F0FF;">a database specialist</span> ')
                                                .deleteChars(23)
                                                .start();

                                        }}
                                    /></span></h2> <span className="span-main">&lt;/span&gt;</span>
                            </div>
                            <div>
                                <Button/>
                                <Statistics/>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.9} className='section2' style={{color: "black",}}>
                    <div className="about-me">
                        <h3> <span className="about-me-title">
                             ~/about-suhaib
                        </span>  <span><Typewriter options={{
                            delay:60,
                        }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Suhaib Salih Ahmed is a highly skilled and experienced IT professional with a Bachelor\'s degree in Management of Information System from the University of Information Technology and Communications in Baghdad. With over 10 years of experience in the industry, Suhaib has held various positions such as Data Entry, IT Officer, System Administrator, and Project Manager. He has expertise in team management, system administration, network design, web hosting, and project management. Suhaib is also a skilled trainer and has worked on various projects including web solutions, e-commerce applications, mobile applications, and local data centers. With his exceptional technical skills, Suhaib is poised to excel in his future endeavors.')
                                    .pauseFor(100)
                                    .start();
                            }}
                        /></span></h3>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.9} className='section1'>
                    <div className="skills-parent">
                        <h1 className="skills">skills</h1>
                    </div>



                </ParallaxLayer>
            </Parallax>
        </Wrapper>
    )
        ;
}

export default App;
const Wrapper = styles.main`


.section2{
  
   place-items: center;
  
   
}

`