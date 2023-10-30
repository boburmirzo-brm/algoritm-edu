import React from 'react';
import './FooterTop.css';
import appstore from '../../assets/appstorebtn.svg';
import googleplay from '../../assets/playmarketbtn.svg';
import mobileappimage from '../../assets/mobileapp.svg';

function FooterTop() {
    return (
        <div className="footerTop">
            <div className="footerTop__container">
                <div className="footerTop__downloadApp">
                     <h1 className="footerTop__title">Mobile ilovamiz, tez kunda!</h1>
                     <p className="footerTop__description">AppStore va PlayMarketdan yuklab oling! Tez orada</p>
                     <div className="downloadApp__btn">
                        <img src={googleplay} alt="" />
                        <img src={appstore} alt="" />
                     </div>
                </div>
                <img src={mobileappimage} alt="" className="mobile__image"/>        
            </div>
        </div>
    )
}

export default FooterTop
