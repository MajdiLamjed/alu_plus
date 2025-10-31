'use client'
import { Search } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./gallery.module.css"
import Carditem from "./carditem";
import { useState } from "react";

const category= ["Tout","Portes Aluminium","Fenêtres","Façades","Garde-Corps Aluminium","Garde-Corps Vitre"]

const cardCont=[
    {id:"1",category:"Portes Aluminium",titelcard:"Porte d'entrée moderne",descriptioncard:"Porte d'entrée contemporaine avec finition premium",tags:["entrée","sécurisé"],imagesrc:"doors.png"},
    {id:"2",category:"Façades",titelcard:"Façade vitrée",descriptioncard:"Façade complète pour bâtiment commercial",tags:["moderne","commercial"],imagesrc:"modern-aluminum-facade.webp"},
    {id:"3",category:"Fenêtres",titelcard:"Fenêtres résidentielles",descriptioncard:"fenêtres optimisées pour réduire les déperditions de chaleur grâce à l'amélioration de l'isolation thermique.",tags:["isolation","double vitrage"],imagesrc:"modern-aluminum-windows-residential.jpg"},
    {id:"4",category:"Garde-Corps Aluminium",titelcard:"garde corps aluminium noir",descriptioncard:" garde corps aluminium noir plat ,avec un design épuré pour sublimer vos espaces intérieurs ou extérieurs.",tags:["garde-corps","noir"],imagesrc:"garde-corps-aluminium-noir-plat-.webp"},
    
    
   
]



export default function ShowroomGallery () {

    const[activeCategory,setactiveCategory]=useState("Tout")
    
    
    const cardContFilter= (activeCategory==="Tout")? cardCont : cardCont.filter((card)=>card.category===activeCategory)
    console.log(cardContFilter)
   
   
    return(
        <section>
            
            <div className="d-flex  gap-2 m-3 " >
                {
                    category.map((item)=>(
                        <button onClick={()=>setactiveCategory(item)} className={style.button} key={item}>{item}</button>
                    ))
                }
            </div>

            <div className="d-flex align-items-center border rounded-3 m-4  px-2" style={{ maxWidth: "250px" }}>
                <Search size={18}  />
                <input className=" border-0 form-control shadow-none" type="search"  placeholder="Recherche..."   onChange={(e)=>setactiveCategory(e.target.value)}/>
            </div>
            <div className="container">
            <div className="row">
                
                {cardContFilter.map((item)=>(
                    <Carditem key={item.id} imagesrc={item.imagesrc} titelcard={item.titelcard} descriptioncard={item.descriptioncard} tag={item.tags}/>
                ))}
            </div>
            </div>
        </section>
    )
}