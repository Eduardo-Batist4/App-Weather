import sun from "../assets/clear.png"

export const InfoWather = () => {
    return (
        <div className="info-wather-container">
            <img src={sun} alt="img-wather"/>
            <h3 className="temperature-wather">0 <span className="celsius">c</span></h3>
            <p className="description-wather">Broken Clouds</p>
       </div>
    )
}