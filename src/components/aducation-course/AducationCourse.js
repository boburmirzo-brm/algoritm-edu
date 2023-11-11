import React from "react";
import "./AducationCourse.css";
import {COURSES} from '../../data/STATIC_DATA'

function AducationCourse() {
  return (
    <div id="AducationCourse" className="aducation__course">
      <h2>O`quv kurslar</h2>
      <p>
        Bizning o'quvchilar nufuzli <span>IT (ayti)</span> kompaniyalarda
        ishlashmoqda o'quvchilar yuqori natijalar bilan kurslarni yakunlashadi
      </p>
      <div className="aducation__course-grid">
        {
          COURSES?.map((item)=> <div key={item.id} 
            style={{background: `url(${item.url}) no-repeat center/cover`}}
            className="aducation__course-item">
              <div className="aducation__course-dark"></div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
          </div> )
        }
      </div>
    </div>
  );
}

export default AducationCourse;
