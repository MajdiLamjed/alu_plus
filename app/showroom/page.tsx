import Footer from "@/components/footer";
import Header from "@/components/header";
import ShowroomGallery from "@/components/showroom/gallery";
import ShowroomHero from "@/components/showroom/hero";

export default function Showroom (){
    return(
        <>
        <Header/>
        <main>
            <ShowroomHero/>
            <ShowroomGallery/>
        </main>
        <Footer/>
        </>
    )
}