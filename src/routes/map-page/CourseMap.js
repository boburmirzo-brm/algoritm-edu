import React, { useEffect, useState} from 'react';
import './CourseMap.css'
import { courses } from '../../data/STATIC_DATA'
import MapItems from '../../components/mapitems/MapItems';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhoneCall } from 'react-icons/fi';


function CourseMap() {
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
        <div className="course_map">
            <div className="course_mapCollection">
                {
                    courses?.map(({id, title, field, techInfo, mentor, image, stars,mentorImage}) => (
                        <MapItems key={id} mentorImage={mentorImage} counter={id} title={title} stars={stars} field={field} techInfo={techInfo} mentor={mentor} image={image}/>
                    ))
                }
            </div>
            <div className="course__motive">
                <h1>Kurslarimiz nimalarni o'z ichiga oladi?</h1>
                <p>Kurslarimiz xaritasi bilan tanishib chiqishingiz mumkin.</p>
            </div>
        </div>
        </>
    )
}

export default CourseMap
