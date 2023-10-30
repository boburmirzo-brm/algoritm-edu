import React, { useRef, useEffect} from 'react';
import './Banner.css';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import bnV from '../../assets/bnV.mp4';

const Banner = () => {
    const { t } = useTranslation();
    const vd = useRef();
    useEffect(() => {
        vd.current.play();
    }, [vd])
    return (
        <div className="banner">
            <div className="banner__mainImage">
                <video className='banner_video' playsInline={true} ref={vd} autoPlay={true} muted loop src={bnV}></video>
            </div>
            <div className="banner__mainOperation">
                <h1 className="banner__title">
                   {t('__banner.title')}
                </h1>
                <p>{t('__banner.quote')}</p>
                <div className="banner__searchbar">
                    <input type="text"  placeholder={window.innerWidth >= 430? t('__banner.input') : "Qidirish..."} className="banner__searchinput"/>
                    <div className="banner__searchIcon">
                         <FiSearch/>
                    </div>
                </div>
                <p>Biz sizga quyidagilarni taklif etamiz</p>
                <div className="banner__suggestions">
                    <ul className="banner__suggestionCollection">
                        <li className="suggestion__item">UI UX Design</li>
                        <li className="suggestion__item">CSS Fundamental</li>
                        <li className="suggestion__item">GSAP animations</li>
                        <li className="suggestion__item">Website Development</li>
                        <li className="suggestion__item">JavaScript</li>
                        <li className="suggestion__item">React.js Full</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
