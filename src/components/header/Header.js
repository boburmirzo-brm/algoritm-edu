import React, {useState, useEffect} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiGlobe } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import i18n from '../../language/i18next';

const Header = () => {
    const [ language, setLanguage] = useState(localStorage.getItem("lang"));
    const { t } = useTranslation();
    const [showHeader, setShowHeader] = useState(false)
    showHeader
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
    useEffect(() => {
       setLanguage(localStorage.getItem("lang"))
    }, [language])

    const changeLang = () => {
        switch(language){
            case "en":
                i18n.changeLanguage("uz");
                setLanguage("uz")
            break;
            case "uz":
                i18n.changeLanguage("en")
                setLanguage("en")
            break;
            default:
                changeLang(localStorage.getItem("lang"))

        }
    }
    return (
        <div className="header">
            <div className={showHeader? "header__container showHeader": "header__container"}>
                <div className="header__logoContainer">
                    <Link to="/">
                        <img src={logo} alt="" className="logoImage"/>
                    </Link>
                </div>
                <FiMenu onClick={() => setShowHeader(true)} className="humbergermenu"/>
                <IoMdClose onClick={() => setShowHeader(false)} className="closemenu"/>
                <ul className="header__collection">
                    <li onClick={()=> setShowHeader(false)} className="header__collectionItem">
                        <NavLink to="/" className="header__collectionLink">
                            {t('__header.1')}
                        </NavLink>
                    </li>
                    <li onClick={()=> setShowHeader(false)}  className="header__collectionItem">
                        <NavLink to="/coursemap" className="header__collectionLink">
                            {t('__header.2')}
                        </NavLink>
                    </li>
                    <li onClick={()=> setShowHeader(false)}  className="header__collectionItem">
                        <NavLink to="/about" className="header__collectionLink">
                            {t('__header.3')}
                        </NavLink>
                    </li>
                 
                 
                    
                    
                </ul>
                <div className="header__language" onClick={changeLang}>
                 {language}<FiGlobe/>
                </div>
               <Link to="/contact"> <button className="header__calltoact">{t('__header.4')}</button></Link>
            </div>
        </div>
    )
}

export default Header
