
interface InfoWeather {
    temperature: number | null;
    description: string;
    img: string;
    classList: string;
}

export const InfoWeather = (props: InfoWeather) => {
    return (
        <div className={props.classList}>
            <img src={props.img} alt="img-weather"/>
            <h3 className="temperature-wather">{props.temperature}<span className="celsius">c</span></h3>
            <p className="description-weather">{props.description}</p>
       </div>
    )
}