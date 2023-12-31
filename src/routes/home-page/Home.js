import React, { useState, useEffect } from 'react';
import './Home.css'
import Banner from '../../components/banner/Banner';
import Advantages from '../../components/advantages/Advantages';
import shapeOne from '../../assets/shape_one.svg';
import FooterTop from '../../components/footerTop/FooterTop';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhoneCall } from 'react-icons/fi';
import Contact from "../../components/contact/Contact";
import AducationCourse from '../../components/aducation-course/AducationCourse';
import Youtube from '../../components/youtube/Youtube';


const Home = () => {
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
               <></> : <Link to="/contact" className='calltoact__fix'><FiPhoneCall/></Link>    
            }  
            <Banner/>
            <img src={shapeOne} alt="" className="shape__image"/>
            <Advantages/>
            <AducationCourse/>
            <Youtube/>
            <Contact/>
            {/* <Courses/> */}
            {/* <Contact/> */}
            <FooterTop/>
        </>
    )
}

export default Home
