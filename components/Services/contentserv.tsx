import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
export default function Contentserv(){
    return(
        <section className="conatiner  m-5 ">
            <div className='row align-items-center'>
                <div className='col-md-6 '><Image className='rounded-4 overflow-hidden'  height={500}width={500}alt=''src={"/doors.png"}></Image></div>
                <div className='col-md-6 '>
                    <h2 className='display-4 ff-serif'>Portes Aluminium</h2>
                    <p className='lead text-muted'>Portes d&apos;entrée et intérieures en aluminium alliant sécurité, isolation et esthétique. <br />
                     Personnalisables selon vos besoins.</p>
                    <ul className='list-unstyled'>
                        <li>👌​ Haute sécurité</li>
                        <li>👌​ Isolation thermique et acoustique optimale</li>
                        <li>👌​ Large choix de couleurs et finitions</li>
                    </ul>
                    <button className='btn btn-dark btn-lg rounded-3 px-4'>Demander un devis</button>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>


            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>


            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>


            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>
        </section>
    )
}