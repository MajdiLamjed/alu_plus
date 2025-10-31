import style from "./fotter.module.css"
export default function  Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.bigdiv}>
                <div className={style.div1}>
                    <span>ALU+</span>
                    <span>ALUMINIUM</span>
                    <p>Spécialiste en menuiserie aluminium - portes, fenêtres, façades et garde-corps</p>
                </div>
                <div className={style.div2}>
                    <h3>Services</h3>
                    <ul>
                        <li>Portes Aluminium</li>
                        <li>Fenêtres</li>
                        <li>Façades</li>
                        <li>Garde-Corps</li>
                    </ul>
                </div>
                <div className={style.div3}>
                    <h3>contact</h3>
                    <ul>
                        <li>tunisie bizerte menzel bourguiba</li>
                        <li>+216 56 648 648</li>
                        <li>contact@aluplus.tn</li>

                    </ul>
                </div>
            </div>
            <div>
                <p>© 2025 ALU+. Tous droits réservés.</p>
            </div>
        </footer>
    )
}