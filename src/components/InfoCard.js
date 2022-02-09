import React from "react";


const InfoCard = props => {
    return(
        <div class = "m-8">
            {props.content.map((content)=> {
                return <div>
                    <h1>University: {content.university}</h1>
                    <h1>Major: {content.major}</h1>
                    <h1>GPA: {content.GPA}</h1>
                    <h1>Scholarship: {content.scholarship}</h1>
                </div>;}
            )}
        </div>
    );
};

export default InfoCard;