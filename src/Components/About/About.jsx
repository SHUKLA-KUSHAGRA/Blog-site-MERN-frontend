import React from 'react'
import Navbar from '../HomePage/Navbar';
import { Link } from 'react-router-dom';

function About() {
    const url = "http://surl.li/fikac";
    return (
        <>
            <Navbar/>
            <img src={url} alt='about-img' style={{width : '40vh',margin : '10% 0px'}}/>
            <div style={{margin : '0px 10%',minWidth :280}}>
                <h3>
                    This Blog Site is created as a learning project by <br/>
                    <Link to ="https://www.linkedin.com/in/kushagra-shukla-0672b8208/" target="_blank" rel="noreferrer" style={{color : 'blue'}}>@Kushagra Shukla</Link>
                </h3>
            </div>
        </>
    )
}

export default About;