import style from"./hero.module.css"
export default function ShowroomHero () {
    return(
        <section className={style.section}>
            <div className={style.vide}></div>
            <div>
            <h1> Notre Salle d&apos;exposition</h1>
            <p>Explorez notre collection complète de portes, fenêtres, façades et garde-corps en aluminium</p>
            </div>
        </section>
    )
}