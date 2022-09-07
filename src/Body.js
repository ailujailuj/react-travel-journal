import React from "react";
import localeIcon from "./location-icon.png"


export default function Body(props){
    return (
        <div className="container">
            <div className="card">
                <img className="card-img" src={props.image}/>
                <div className="info">
                    <div className="locale-row">
                        <img src={localeIcon}/>
                        <p className="locale">{props.locale}</p>
                        <a className="view-maps" href={props.maps}>View on Google Maps</a>
                    </div>
                    <h2 className="title">{props.title}</h2>
                    <p className="period">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}