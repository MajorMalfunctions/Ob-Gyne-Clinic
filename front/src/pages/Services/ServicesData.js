import "../../styles/services.css";

function ServicesData(props) {
    return (
        <div className="services-card">
            <div className="image-container">
                <img src={props.image} alt="services" />
                <h2 class="centered">{props.heading}
                </h2>
            </div>
            {/* <h4> {props.heading} </h4> */}
            <p> {props.text} </p>
        </div>
    )
}

export default ServicesData;