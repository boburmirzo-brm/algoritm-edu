import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Kurs haqida batafsil ma'lumot olishni xohlaysizmi?</h1>
      <p>Ma’lumotlaringizni qoldiring. Siz bilan tez orada bog'lanamiz</p>
      <form className="contact__form">
        <input type="text" placeholder="Ismingiz" />
        <input type="text" placeholder="Telefon raqamingiz" />
        <button>Yuborish</button>
        <p>
          Tugmani bosib,{" "} 
          <span>maxfiylik siyosati</span> va{" "}
          <span>foydalanuvchi shartnomasining</span> 
          {" "}
           shartlarini qabul qilgan bo'lasiz
        </p>
      </form>
    </div>
  );
}

export default Contact;