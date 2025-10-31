import style from "./home.module.css"

import Link from "next/link"
export default function Homepage() {
  return (
    <section >
      <div className={style.heroSection}>
        <div className={style.overlay}>
          <h1 className={style.heroTitle}>Excellence en menuiserie aluminium</h1>
          <p className={style.heroSubtitle}>
            Portes, fenêtres, façades et garde-corps sur mesure
          </p>
          <div className={style.heroButtons}>
            <Link href="/showroom" className={style.btnPrimary}>
              Découvrir nos réalisations
            </Link>
            <Link href="/contact" className={style.btnOutline}>
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}