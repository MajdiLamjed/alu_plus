import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus } from "lucide-react"
export default function Formdevis() {
    return (
        <fieldset className="container my-4">
            <legend></legend>
            <form action="">
                <div className="form-group">
                    <label htmlFor="" className="form-label">nom</label>
                    <input type="text" className="form-control" placeholder="nom.." />
                    <label htmlFor="" className="form-label">email</label>
                    <input type="email" name="" id="" className="form-control" placeholder="email..." />
                    <label htmlFor="" className="form-label">adresse</label>
                    <input type="text" name="" id="" className="form-control" placeholder="votre localisation..." />
                    <label htmlFor="" className="form-label">téléphone</label>
                    <input type="tel" name="" id="" className="form-control" placeholder="ex:+216 xx xxx xxx" />

                </div>
                <div className="">
                    <h3>Articles</h3>
                    <button  className="btn btn-dark"><Plus/>Ajouter un article</button>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text"  placeholder="Ex: Porte d'entrée en aluminium"/>

                    <label htmlFor="">Quantité</label>
                    <input type="number" />

                    <label htmlFor="">longueur</label>
                    <input type="number" placeholder='en mètre'/>

                    <label htmlFor="">largeur</label>
                    <input type="number"  placeholder='en mètre'/>

                    
                </div>

                <div>
                    <label htmlFor="">Notes</label>
                    <textarea name="" id="" rows={3}></textarea>
                </div>
                    <div>
                         <button className="mt-5 btn btn-primary" type="submit">Envoyer</button>
             <button className="mt-5 btn btn-danger" type="reset">Reset</button>
                    </div>
            </form>
        </fieldset>
    )
}