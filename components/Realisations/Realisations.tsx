import Link from "next/link";
import Image from  "next/image"
import style from "./realisations.module.css"
import Button from "./Button";

export default function Realisations(){
    return(
        <section className={style.body}>
            <div className={style.header}>
                <div className={style.titel}>
                    <h2>Nos Réalisations</h2>
                    <p>Découvrez nos projets récents</p>
                </div>
                <div className={style.linkhead}>
                    
                    <Button/>
                </div>

            </div>
            <div className={style.bigimagdiv}>
                <div className={style.card}>
                    <Link href={"/"}>
                        <div className={style.imageWrapper}>
                            <img src={"/doors.png"} alt={"door"} />
                            <div className={style.caption}>
                                <h3>Portes Aluminium</h3>
                                <p>Porte d'entrée moderne</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={style.card}>
                    <Link href={"/"}>
                    <div className={style.imageWrapper}>
                        <img src={"/Aluminum-in-Architecture-Facades-1-jpg.webp"} alt="façade"  />
                            <div className={style.caption}>
                                <h3>Façades</h3>
                                <p>Façade vitrée commerciale</p>
                            </div>
                    </div>
                    </Link>
                </div>
                <div className={style.card}>
                    <Link href={"/"}>
                    <div className={style.imageWrapper}>
                        <img src={"/modern-aluminum-windows-residential.jpg"} alt="fenêtres" />
                            <div className={style.caption}>
                                <h3>Fenêtres</h3>
                                <p>Fenêtres résidentielles</p>
                            </div>
                    </div>
                    </Link>
                </div>
            </div>



        
        </section>
    )

}