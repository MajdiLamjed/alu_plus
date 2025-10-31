import Formdevis from "@/components/devis/form_devi";
import Herodevis from "@/components/devis/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Devis(){
    return(
        <>
        <Header/>
        <main>
            <Herodevis/>
            <Formdevis/>

        </main>
        <Footer/>
        </>
    )
}