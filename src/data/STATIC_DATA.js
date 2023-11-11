import iconGroup from '../assets/icon_group.svg';
import iconBook from '../assets/icon_book.svg';
import iconTeacher from '../assets/icon_teacher.svg';
import marketingImage from '../assets/Marketing.png';
import gsapImage from '../assets/Gsap.png';
import figmaImage from '../assets/Figma.png';

import videoAd1 from "../assets/ad1.webm";
import videoAd2 from "../assets/ad2.webm";
import videoAd3 from "../assets/ad3.webm";

import aboutStudent1 from '../assets/i1.jpg'
import aboutStudent2 from '../assets/i2.jpg'
import aboutStudent3 from '../assets/i3.jpg'
import aboutStudent4 from '../assets/i4.jpg'

import bobur from "../assets/me.jpg"
import muhammadali from "../assets/MUHAMMADALI.jpg"

import web from "../assets/web.png"
import english from "../assets/english.jpg"
import russian from "../assets/russian.png"
import dtm from "../assets/dtm.webp"
import kids from "../assets/kids.jpg"
import math from "../assets/math.jpg"


export const COURSES = [
    {
        id: 1,
        url: web,
        title: "Dasturlash",
        desc: "HTML, CSS, JavaScript, ReactJS"
    },
    {
        id: 2,
        url: english,
        title: "Ingliz tili",
        desc: "IELTS, CEFR"
    },
    {
        id: 3,
        url: russian,
        title: "Rus tili",
        desc: ""
    },
    {
        id: 4,
        url: dtm,
        title: "DTM",
        desc: "Barcha fanlar"
    },
    {
        id: 5,
        url: math,
        title: "Matematika",
        desc: ""
    },
    {
        id: 6,
        url: kids,
        title: "Kichkintoylar",
        desc: ""
    },
]


const advantages = [
    {
        "id" : 0,
        "title" : "Ajoyib jamoa",
        "image" : iconGroup,
        "description" : "Siz kurs dastur o'rganish davomida ko'plab do'stlar orttirasiz bu esa IT da juda muhim. Do'stlar yangi loyihalar asoslari."
    },
    {
        "id" : 1,
        "title" : "Tajribali Mentorlar",
        "image" : iconTeacher,
        "description" : "Ko'plab chet el loyihalarida va O'zbekistondagi yirik loyihalar asoschisi va qatnashchilaridan tahsil oling va ular bilan amaliyot qiling."
    },
    {
        "id" : 2,
        "title" : "Flexible access",
        "image" : iconBook,
        "description" : "Biz tayyorlagan ajoyib o'quv rejasi va sinovdan o'tgan o'qitish tizimi sizni kelajakdagi orzuyingiz tomon yetaklaydi. Tartib hamma sohada muhim."
    }
]

const courses = [
    {
        "id" : 0,
        "title" : "HTML",
        "field" : "Technology",
        "aim" : "This course aims to give you deeper understanding of core processes ...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : marketingImage,
        "videoLessons" : 3,
        "stars" : 3,
        "mentorImage" : bobur,
        "techInfo": "Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services"
    },
    {
        "id" : 1,
        "title" : "Figma asoslari",
        "field" : "Design",
        "aim" : "These lessons and exercises will help you start designing with Figma ...",
        "mentor" : "Mukhammadali Kodirov",
        "image" : figmaImage,
        "videoLessons" : 2,
        "stars" : 5,
        "mentorImage" : muhammadali,
        "techInfo":"Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.    "
    },
    {
        "id" : 2,
        "title" : "CSS asoslari",
        "field" : "Coding",
        "aim" : "Well organized and easy to make you understand tutorials with lots of ...",
        "mentor" : "Mukhammadali Kodirov",
        "image" : figmaImage,
        "videoLessons" : 4,
        "stars" : 4,
        "mentorImage" : muhammadali,
        "techInfo":"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        "id" : 3,
        "title" : "GSAP animatsiyalari",
        "field" : "Coding",
        "aim" : "Create awesome web animations with GSAP and have a chance...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : gsapImage,
        "videoLessons" : 5,
        "stars" : 4,
        "mentorImage" :bobur,
        "techInfo":"GreenSock is a JavaScript framework which makes it easy to animate HTML elements. "
    },
    {
        "id" : 4,
        "title" : "JavaScript asoslari",
        "field" : "Coding",
        "aim" : "Understand the basics of JavaScript and build some logic with this...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : "https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg",
        "videoLessons" : 9,
        "stars" : 5,
        "mentorImage" : bobur,
        "techInfo":"JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
    },
    {
        "id" : 5,
        "title" : "SVG animatsiyalar",
        "field" : "Coding and Theoretical",
        "aim" : "Perform complex animations with svg and vectors...",
        "mentor" : "Mukhammadali Kodirov",
        "image" : "https://www.daddydesign.com/wp-content/uploads/2018/05/svg-logo-as-background-image-using-css3.jpg",
        "videoLessons" : 3,
        "stars" : 3,
        "mentorImage" : muhammadali,
        "techInfo":"Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format for two-dimensional graphics with support for interactivity and animation."
    },
    {
        "id" : 6,
        "title" : "Bootstrap and Tailwind",
        "field" : "Coding and Practice",
        "aim" : "Create websites with ease and no time consumption, Bootstrap 5 is ready...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : "https://htmlburger.com/blog/wp-content/uploads/2021/02/lets-talk-about-bootstrap.png",
        "videoLessons" : 4,
        "stars" : 5,
        "mentorImage" : bobur,
        "techInfo":"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
    },
    {
        "id" : 7,
        "title" : "Firebase",
        "stars" : 5,
        "field" : "Coding and Logic",
        "aim" : "Create your own database and user auth website with Firebases...",
        "mentor" : "Mukhammadali Kodirov",
        "image" : "https://firebase.google.com/images/social.png",
        "videoLessons" : 6,
        "mentorImage" : muhammadali,
        "techInfo":"Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
    },
    {
        "id" : 8,
        "title" : "React.js",
        "stars" : 5,
        "field" : "Coding and Logic",
        "aim" : "Create your own database and user auth website with Firebases...",
        "mentor" : "Mukhammadali Kodirov",
        "image" : "https://learn-reactjs.ru/resources/imges/logo-meta.png",
        "videoLessons" : 6,
        "mentorImage" : muhammadali,
        "techInfo":"Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
    },
    {
        "id" : 9,
        "title" : "Node.js and Security",
        "stars" : 5,
        "field" : "Coding and Logic",
        "aim" : "Create your own database and user auth website with Firebases...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : "https://blog.eduonix.com/wp-content/uploads/2019/07/Node1.jpg",
        "videoLessons" : 6,
        "mentorImage" : bobur,
        "techInfo":"Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
    },
    {
        "id" : 10,
        "title" : "Redux.js",
        "stars" : 5,
        "field" : "Coding and Logic",
        "aim" : "Create your own database and user auth website with Firebases...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : "https://blog.slashgear.dev/static/ee72c19029938b25ca14c9387d5095ab/4fe8c/redux.jpg",
        "videoLessons" : 6,
        "mentorImage" : bobur,
        "techInfo":"Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
    },
    {
        "id" : 11,
        "title" : "Mongo DB Atlas",
        "stars" : 5,
        "field" : "Coding and Data management",
        "aim" : "Create your own database and user auth website with Firebases...",
        "mentor" : "Boburmirzo Rasulov",
        "image" : "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
        "videoLessons" : 6,
        "mentorImage" : bobur,
        "techInfo":"Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
    }
]

export const videos = [
    {
        "id" : 0,
        "video" : videoAd1 
    },
    {
        "id" : 1,
        "video" : videoAd2
    },
    {
        "id" : 2,
        "video" : videoAd3
    },
]

export const aboutStudents = [
    {
        "id": 0,
        "studentName": "Otabek",
        "studentImage": aboutStudent1,
    },
    {
        "id": 1,
        "studentName": "Asadbek",
        "studentImage": aboutStudent2,
    },
    {
        "id": 2,
        "studentName": "Otabek",
        "studentImage": aboutStudent3,
    },
    {
        "id": 3,
        "studentName": "Asadbek",
        "studentImage": aboutStudent4,
    },
]


export { advantages, courses }

