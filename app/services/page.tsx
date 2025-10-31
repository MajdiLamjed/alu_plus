import Footer from "@/components/footer";
import Header from "@/components/header";
import Contentserv from "@/components/Services/contentserv";
import ServicesHero from "@/components/Services/serviceshero";

export default function ServicesPage () {
    return(
        <>
        <Header/>
        <main>
            <ServicesHero/>
            <Contentserv/>

        </main>
        <Footer/>
        </>
    )
}