import style from "./services.module.css"
import{DoorOpen,Frame,Building2,Fence} from "lucide-react"
export default function services(){
    return(
        <section>
            <div className={style.bigdiv}>
                <div className={style.titeldiv} >
                    <h2>Nos Services</h2>
                    <p>Des solutions complètes en menuiserie aluminium</p>
                </div>

                <div className={style.rowdiv}>
                    <div className={style.div1}>
                        <DoorOpen/>
                        <h3>Portes Aluminium</h3>
                        <p>Portes d&apos;entrée et intérieures en aluminium de haute qualité</p>
                    </div>
                    <div className={style.div2}>
                        <Frame/>
                        <h3>Fenêtres</h3>
                        <p>Fenêtres sur mesure avec isolation thermique optimale</p>
                    </div>
                    <div className={style.div3}>
                        <Building2/>
                        <h3>Façades</h3>
                        <p>Murs-rideaux et façades architecturales modernes</p>
                    </div>
                    <div className={style.div4}>
                        <Fence/>
                        <h3>Garde-Corps</h3>
                        <p>Garde-corps en aluminium et vitre pour balcons et terrasses</p>
                    </div>
                </div>
            </div>
        </section>
    )
}