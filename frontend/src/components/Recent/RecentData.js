import "../../styles/recent.css";

function RecentData(props) {
    return (
        <div className="r-card">
            <div className="r-image">
                <img src={props.image} alt="image" />
            </div>
            <h4> {props.heading} </h4>
            <p> {props.text} </p>
        </div>
    )
}

export default RecentData;