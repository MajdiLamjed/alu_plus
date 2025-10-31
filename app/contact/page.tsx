import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import Herocontact from "@/components/contact/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Map from"@/components/contact/map";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <Herocontact />
                <div className="container my-5">
                    <div className="row g-5">
                        <div className="col-12 col-lg-6">

                            <ContactInfo />
                        </div>
                        <div className="col-12 col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <Map/>
            </main>
            <Footer />
        </>
    )
}