import React, { useState } from 'react'
import './Contact.css';
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa';
// import axios from '../../api/axios';
import Loader from '../../components/loader/Loader'

function Contact() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState("");
    const [course, setCourse] = useState("IT");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    let withInter = "+998"+phoneNumber;

    const sendMsgToBot = async () => {
        let myText = `%0A👨‍🎓 Ismi: <b>${username}</b>%0A%0A`;
        myText += `📱 Tel: <b>+998${phoneNumber}</b>%0A%0A`;
        myText += `👨‍💻 Yo'nalish: <b>${course}</b>%0A%0A`;

        let [chatId, tokenBot] = [
            "-1001727710697",
            "5691062222:AAHaHmPoaJuLUoYxxL75rK3ToqtYZo37Bts",
        ];
        let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`;

        let api = new XMLHttpRequest();
        api.open("GET", tempUrl, true);
        api.send();
    }
 

    // const sendVerification = (e) => {
    //     e.preventDefault();
    //     setDisabled(true);
    //     setLoading(true);
    //             axios.post("registrations", {
    //                 username: username,
    //                 telphone: withInter
    //             })
    //             .then(data => {
    //                 setDisabled(false)
    //                 setUser(data.data)
    //                 setPhoneNumber("");
    //                 setUsername("");
    //                 setLoading(false)
    //                 sendMsgToBot()
    //                 setTimeout(() => {
    //                     history.push("/")
    //                 }, 2000)
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setDisabled(false);
    //                 setLoading(false)
    //               })
    //     }
    //    github
    return (
        <div className="contact__container">
            <div className="contact__bgGold"></div>
            <div className="contact__wrapper">
                
            <div className="contact__form">
                    <form >
                    {
                    user && <p style={{background: "green", color: "#fff", textAlign: "center", padding: "10px 0px"}}>Muvaffaqiyatli ro'yxatdan o'tdingiz!</p>
                }
                        <input  className='contact_input' required type="text" placeholder="Ism familiyangiz" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <div className="phone_wrapper">
                            <div className="international_code">
                                <img src="https://cdn-icons-png.flaticon.com/512/206/206662.png" alt="" />
                                +998
                            </div>
                            <input className='contact_input' required type="text" placeholder="Telefon raqamingiz" value={phoneNumber.length > 18 ? phoneNumber.slice(0, 7): phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                        </div>
                        <select onChange={e=>setCourse(e.target.value)} name="" id="">
                            <option value="" disabled>Yo'nalish</option>
                            <option value="IT">IT</option>
                            <option value="Ingliz tili">Ingliz tili</option>
                            <option value="Rus tili">Rus tili</option>
                        </select>
                 <button disabled={disabled} style={disabled ? {opacity: "0.5", cursor: "not-allowed"} : {opacity: "1"}} type="submit"> {loading ? <Loader/> : "Ro'yxatdan o'tish" } </button>
                    </form>
                </div>
                <div className="contact__courseInfo">
               
                    <div className="contact__location">
                        <h2>Manzilimiz</h2>
                        <p>Namangan shahar A.Navoiy 9.<br />"Shirin dunyo" yonida</p>
                    </div>
                    <div className="contact__follow">
                        <h2>Bizni kuzatib boring</h2>
                        <div className="contact__followIcons">
                            <a href="https://www.facebook.com/algoritm_edu-107753268215659"><GrFacebookOption/></a>
                            <a href="https://instagram.com/algoritm_edu/"><AiOutlineInstagram/></a>
                            <a href="https://t.me/algoritm_edu"><FaTelegramPlane/></a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Contact
