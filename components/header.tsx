'use client'
import Link from "next/link";
import style from "./header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image"
import { useState } from "react";
import { Menu, X } from "lucide-react"


export default function Header(){
    const pathname = usePathname(); // Get current URL path
    const [mobileMenuOpen,setmobileMenuOpen]= useState(false)
    console.log(pathname)
    const navitem = [
        {href: "/", label: "Accueil"},
        {href: "/showroom", label: "salle d'exposition"},
        {href: "/services", label: "Services"},
        {href: "/about", label: "À Propos"},
        {href: "/contact", label: "Contact"},
        {href: "/devis", label: "devis"},
    ]
    
    return(
        <header className={style.header}>
            <div className={style.bigdiv}>
               
                    <Link href="/" className={style.logobig}>
                        <Image src="/logo-alu+.jpeg" alt="logo" width={60}height={60} className={style.logoimage}/>
                        <div className={style.logotext}>ALU+</div>
                    </Link>
                    <nav className={style.normalnav} >
                        {
                            navitem.map((item) =>(
                                <Link key={item.href} href={item.href} style={{margin: "5px"} }   className={pathname === item.href ? style.active : ""}>
                                    {item.label}
                                </Link>
                            ))
                        }

                    </nav>
               
                <button className={style.buttonmenu} onClick={()=>setmobileMenuOpen(!mobileMenuOpen)} > {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
               
            </div>
            {mobileMenuOpen &&(
                <nav className={style.mobilemenu}>
                    {navitem.map((item)=>(
                        <Link key={item.href} href={item.href} className={style.mobilelink} onClick={()=>setmobileMenuOpen(false)}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}