import React from "react"
import "./Contact.css"
import emailjs from 'emailjs-com';

function Contact(props){

    function sendMessage(e) {

        e.preventDefault()

        emailjs.sendForm("service_oecmsbq", "template_bjgamid", e.target, "user_9EtEh0xOJ964JtXdN23UQ")
        .then((result) => {
            console.log(result.text)
            alert("Message sent successfully!")
        }, (error) => {
            console.log(error.text)
            alert("Message could not be sent! "+error);
        })
        e.target.reset()
    }    

    const englishText = {
        sectionText: "Please feel free to get in touch with me using the form below!",
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "Your email address",
        messageLabel: "Message",
        messagePlaceholder: "Your message here...",
        buttonValue: "Send"
    }

    const japaneseText = {
        sectionText: "お問い合わせは下記のフォームからお願いいたします。",
        nameLabel: "お名前",
        namePlaceholder: "お名前を入力してください",
        emailLabel: "メールアドレス",
        emailPlaceholder: "メールアドレスを入力してください",
        messageLabel: "お問い合わせ内容",
        messagePlaceholder: "お問い合わせ内容を入力してください",
        buttonValue: "送信"
    }

    return(
        <div className="contact-area" id="contact-area">
            <div className="contact-text-area">
                <h3 className="heading">Contact</h3>
                <p className="section-text" lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.sectionText : japaneseText.sectionText}</p>

                <form className="contact-form" onSubmit={sendMessage} method="POST">
                    <input className="contact-input" type="hidden" name="contact_number " />

                    <div className="form-flex" lang={props.isEnglish ? "en" : "ja"}>

                        <div className="form-group">
                            <label className="contact-label">{props.isEnglish ? englishText.nameLabel : japaneseText.nameLabel}</label>
                            <input className="contact-input" type="text" name="user_name" autoComplete="off" placeholder={props.isEnglish ? englishText.namePlaceholder : japaneseText.namePlaceholder} required />
                        </div>
                        
                        <div className="form-group">
                            <label className="contact-label">{props.isEnglish ? englishText.emailLabel : japaneseText.emailLabel}</label>
                            <input className="contact-input" type="email" name="user_email" autoComplete="off" placeholder={props.isEnglish ? englishText.emailPlaceholder : japaneseText.emailPlaceholder} required/>
                        </div>
                        
                    </div>

                    <label className="contact-label" lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.messageLabel : japaneseText.messageLabel}</label>
                    <textarea className="contact-text" name="message" autoComplete="off" placeholder={props.isEnglish ? englishText.messagePlaceholder : japaneseText.messagePlaceholder} required/>

                    <input className="contact-area-button" type="submit" value={props.isEnglish ? englishText.buttonValue : japaneseText.buttonValue} />
                </form>
            </div>
        </div>
    )
    
}

export default Contact