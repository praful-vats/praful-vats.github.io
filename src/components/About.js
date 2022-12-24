import React from "react";
import './About.css'
import pro from './images/pro.png';
import pdf from './images/Praful_Vats.pdf';
import ReactCurvedText from "react-curved-text";
// import  { ScrollRotate } from 'react-scroll-rotate';
import xim from './images/xim.jpeg';
// import stat from './images/stat.gif';
// import mix from './images/mix.jpg'
// import { Parallax } from 'react-scroll-parallax';
// import HoverImage from "react-hover-image";
<meta name="viewport" content="width=device-width,initial-scale=1"/>







function About() {
    return (
        <div>
            <div className="grid-container">
                <div className="logo one">
                    <img src={pro} width={50} height={50} alt="logo"/>
                </div>
                <div className="head two">
                    PORTFOLIO
                </div>
                <div className="three wing">
                    <a className="none" href={pdf} target="_blank" rel="noopener noreferrer">RESUME</a> &nbsp; CONTACT &nbsp; <a className="none" rel=" noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/praful-vats-6ab90b162/">LINKEDIN</a> 
                </div>
                        
                <div className="vl four">
                    <div className="cont">
                    <span style={{color: '#f40009'}}><b>H</b></span>ello, I’m a Software Developer 
                        <br></br
                        >and Web Des<span style={{color: '#f40009'}}><b>i</b></span>gner with niche<br></br> 
                        inte<span style={{color: '#f40009'}}><b>r</b></span>est in Full Stack Dev<span style={{color: '#f40009'}}><b>e</b></span>lopment.<br></br>
                        Absolute carnage in those bleep<br></br><span style={{color: '#f40009'}}><b>m</b></span>etavers<span style={{color: '#f40009'}}><b>e</b></span> of fucking innvovation.<br></br><br></br>
                        Assembling a tesseract of<br></br>
                        tools and technologies and<br></br> 
                        solving challenging problems<br></br> 
                        with passion and determination.<br></br> 
                        To Infinity beyond Black Hole<span style={{color: '#f40009'}}><b>!</b></span>
                    </div>
                <div className="name">
                <span style={{color: '#f40009'}}>.</span> Praful Vats
                </div>
                </div>
                {/* <Parallax speed={-10}> */}
                <div className="five po">
                        <img src={xim} width={400} height={400} alt="pho"/>
                        {/* <HoverImage  src={xim} hoverSrc={mix} alt="pho"/> */}
                        {/* <HoverImage src={yourFile} hoverSrc={yourFileHover} /> */}
                </div>
                {/* </Parallax> */}
            
                <div className="cent six">
                    <div className="spin">
                    <ReactCurvedText
                        width={380}
                        height={235}
                        cx={190}
                        cy={120}
                        rx={100}
                        ry={100}
                        startOffset={4}
                        reversed={false}
                        text="Work in progress / site under rehabilitation and blah blah blah @#%!&*"
                        textPathProps={{"fill": "#F40009"}}
                    />
                    </div>
                <div style={{color: "black", fontSize:"30px", marginTop:"78px"}}>&nbsp;&nbsp;1<span style={{color: '#f40009'}}>.</span>9<span style={{color: '#f40009'}}>.</span>9<span style={{color: '#f40009'}}>.</span>9<span style={{color: '#f40009'}}>.</span></div>
                </div>
            </div>
        </div>
    )
}

export default About
