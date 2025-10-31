import style from"../showroom/hero.module.css"
export default function ServicesHero(){
    return(
        <section className={style.section} style={{margin:"0 0 50px 0"}}>
            <div className={style.vide}></div>
            <div>
            <h1>Nos Services</h1>
            <p>Des solutions complètes en menuiserie aluminium pour tous vos projets résidentiels et commerciaux</p>
            </div>
        </section>
    )
}   