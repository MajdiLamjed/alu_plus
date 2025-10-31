import style from "./contact-from.module.css"
export default function ContactForm() {
    return (
        <form action=""  className={style.contactform}>
            <div className={style.field}>
                <label className={style.label} htmlFor="nom" >Nom complet</label>
                <input type="text" id="nom" name="nom" className={style.input}  autoComplete="name" required/>
            </div>
            <div className={style.field}>
                <label className={style.label} htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  className={style.input} autoComplete="email" required/>
            </div>
            <div className={style.field}>

                <label className={style.label} htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" className={style.input} autoComplete="tel"  required/>
            </div>
            <div className={style.field}>
                <label className={style.label} htmlFor="textarea" >Message</label>
                <textarea id="textarea" rows={5} name="message" className={style.textarea} required/>
            </div>
  
                <button className={style.submit} type="submit">Envoye le message </button>
            
        </form>
    )
}