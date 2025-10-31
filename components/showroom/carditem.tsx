
interface cardprops {
    imagesrc: string;
    titelcard: string;
    descriptioncard: string;
    tag:string[];

}
export default function Carditem({ tag,imagesrc, titelcard, descriptioncard }: cardprops) {
    return (
        <div className="col-md-3 ">
            <div className="card shadow-sm h-100 w-100" >
                <img src={imagesrc} alt="" style={{ objectFit: "cover", height: "300px" }} />
                <div className="card-body ">
                    <h4 className="card-title">{titelcard}</h4>
                    <p className="card-text">{descriptioncard}</p>
                    <div className="d-flex gap-3">
                        <p className="border border-dark rounded-pill px-2 ">{tag[0]}</p>
                        <p className="border border-dark rounded-pill px-2 ">{tag[1]}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}