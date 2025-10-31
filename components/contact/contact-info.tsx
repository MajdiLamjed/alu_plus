import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./button";
export default function ContactInfo (){
    const contactdata =[
        {
            icon: MapPin ,
            titel:"Adresse",
            content:"Tunisie Bizerte Menzel Bourguiba"
        },
        {
            icon: Phone ,
            titel:"Téléphone",
            content:"+216 56 648 648"
        },
        {
            icon: Mail ,
            titel:"Email",
            content:"contact@aluplus.tn"
        },
        {
            icon: Clock ,
            titel:"Horaires",
            content:"Lun-Sam: 8h-17h"
        },
    ]
    return(
        <section >

        <div  className="d-flex flex-column gap-2 m-4">
            {contactdata.map((detail,index)=>(
                <div key={index} className="d-flex align-items-center gap-3">
                    <detail.icon size={24}/>
                    <div>
                        <h3 className="fw-semibold mb-0">{detail.titel}</h3>
                        <p>{detail.content}</p>
                    </div>
                </div>
            ))}
            <Button />

        </div>
        </section>
    )
}