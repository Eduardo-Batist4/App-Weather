
interface InfoWather {
    temperature: number | null;
    description: string;
    img: string;
}

export const InfoWather = (props: InfoWather) => {
    return (
        <div className="info-wather-container">
            <img src={props.img} alt="img-wather"/>
            <h3 className="temperature-wather">{props.temperature}<span className="celsius">c</span></h3>
            <p className="description-wather">{props.description}</p>
       </div>
    )
}