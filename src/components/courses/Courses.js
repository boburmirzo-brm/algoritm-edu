import React, { useState } from 'react';
import './Courses.css';
import { courses } from '../../data/STATIC_DATA';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courseId, setCourseId] = useState();
    const selectCourse = (id) => {
        setCourseId(id);
    }
    return (
        <div className="courses">
            <h1 className="courses__title">Nima o'rganmoqchisiz?</h1>
            <p className="courses__description">O'zingizga mos kelgan kursni tanlang. Va o'qishdan zavq oling.</p>
            <div className="course__wrapper">
                {
                    courses?.map(course => (
                        <div  key={course.id} className={"course"} onClick={e => selectCourse(course.id)}>
                            <div className="course__display">
                                <img className="course__image" src={course.image} alt={course.title} />
                                <div className="course__videos">{course.videoLessons} videos</div>
                            </div>
                            <p className="course__field">{course.field}</p>
                            <h2 className="course__title">{course.title}</h2>
                            <p className="course__description">{course.aim}</p>
                            <div className="seperator"></div>
                            {/* <div className="course__profile">
                                <div className="course__avatar" style={{backgroundImage: `url(${course.mentorImage})`}}></div>
                                <div className="course__profileWrapper">
                                    <p className="course__mentor">{course.mentor}</p>
                                    <p className="course__mentorjob">Mentor</p>
                                </div>
                            </div> */}
                            {/* <Link className="link" to="/coursemap">
                                <button className={courseId === course.id ? "course__access" : "none__btn"}>Access Class</button>
                            </Link> */}
                        </div>                        
                    ))
                }
            </div>
            <button className="primary__outlined">Barcha kurslarni ko'rsatish</button>
        </div>
    )
}

export default Courses
