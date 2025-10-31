import Button from "./button";
import style from "./call.module.css";
import Link from "next/link"

export default function Call() {
    return (
        <section className={style.body} >
            <div className={style.titel}>
                <h1>Prêt à démarrer votre projet ?</h1>
                <p>Contactez-nous ou générez un devis gratuit en ligne</p>
            </div>
            <div className={style.btndiv}>
                <Link href="/" className={style.link}>
                    <Button textColor="white" backColor="black" hovercolor="white" text="Contactez-nous" />
                </Link>
                <Link href="/" className={style.link}>
                    <Button textColor="black" backColor="white" hovercolor="gray" text="Générer un devis" />
                </Link>
            </div>
        </section>
    )
}