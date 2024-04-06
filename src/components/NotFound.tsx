import imgNot from "../assets/404.png";

interface notFoundProps {
    className: string;
}

export const NotFound = (props: notFoundProps) => {
    return (
        <div className={props.className}>
            <img src={imgNot} alt="img-notFound" />
            <h3>Location not found!</h3>
        </div>
    )
}