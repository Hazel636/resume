import React from "react";



const BasicInfo = props => {
    return(
        <div class ="text-center leading-10 text-indigo-500">
        <div>
            {props.content.map((content)=> {
                return <div>
                    <h1>Name: {content.name}</h1>
                    <h1>Tel: {content.tel}</h1>
                    <h1>Email: {content.email}</h1>
                    <h1>Location: {content.location}</h1>
                </div>;}
            )}
        </div>
        </div>
    );
};

export default BasicInfo;