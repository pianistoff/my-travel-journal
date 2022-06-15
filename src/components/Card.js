import locationImage from "../img/location.png";

export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card">
            <img src={imageUrl} alt="An image of the destination place"  className="main-image" />
            <div className="right-side">
                <div className="first-line">
                    <img src={locationImage} alt="" className="location-image" />
                    <p className="location">{location.toUpperCase()}</p>
                    <p className="view-on-map"><a href={googleMapsUrl} className="view-on-map-link">View on Google Maps</a></p>
                </div>
                <h2 className="title">{title}</h2>
                <p className="date">{startDate} - {endDate}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}