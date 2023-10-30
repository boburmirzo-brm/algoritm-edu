import React, { useState, useEffect} from 'react'
import './About.css'
import aboutImage1 from '../../assets/b1.jpg'
import aboutImage2 from '../../assets/b2.jpg'
import aboutTeam from '../../assets/team.png'
import {aboutStudents} from '../../data/STATIC_DATA'
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhoneCall } from 'react-icons/fi';

function About() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        {
                scrollPosition < 170 ?
                <></>  : <Link to="/contact" className='calltoact__fix'><FiPhoneCall/></Link>    
            }  
        <div className="about">
            
            <div className="about__section">
                <div className="about__sectionImage">
                    <img src={aboutImage1} alt="" />
                </div>
                <div className="about_sectionText">
                    <h1>Either you run the day or the day runs you.</h1>
                    <p>Education is perhaps one of the most important ingredients to a happy, successful, and constructive life</p>
                </div>
                <div className="a_square_1"></div>
            </div>

            <div className="about__section">
                <div className="about_sectionText">
                    <h1>Who questions much,shall learn much, and retain much</h1>
                    <p>We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself.</p>
                </div>
                <div className="about__sectionImage">
                    <img src={aboutImage2} alt="" />
                </div>
                <div className="a_square_2"></div>
            </div>

            <div className="about_centerText">
                <h1>Trust us and <br />we will justify your trust</h1>
                <div className="about_underLine"></div>
            </div>

            <div className="our_student">
                {
                    aboutStudents?.map(student =>(
                        <div key={student.id} className="our_studentItem"> 
                            <img src={student.studentImage} alt="" />
                            <div className="our_studentInfo">
                                {/* <h3>{student.studentName}</h3> */}
                                <p>Our Student</p>
                            </div>
                        </div>
                    ))
                }
                <div className="circle"></div>
            </div>

            <div className="about_centerText">
                <h1>Become a great <br />team with us</h1>
                <div className="about_underLine"></div>
            </div>

            <div className="about_team">
                <img src={aboutTeam} alt="" />
                 <div className="a_square_3"></div>
            </div>
        </div>
        </>
    )
}

export default About
