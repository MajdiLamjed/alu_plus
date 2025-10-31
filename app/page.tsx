import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Homepage from "@/components/home/home";
import Services from "@/components/Services/services";
import Realisations from "@/components/Realisations/Realisations";
import Call from "@/components/call/call";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Homepage/>
      <Services/>
      <Realisations/>
      <Call/>

    </main>
    <Footer/>

    
    </>
  );
}
