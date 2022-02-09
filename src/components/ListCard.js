import React from "react";

//import './ListCard.css';

const ListCard = props => {
    return(
    <div class = "m-8">
        <ul>{
            props.content.map((content)=> {
                return <div class = "grid grid-cols-4">
                               
                                    <div class = "col-span-3">
                                        <li class = "text-lg font-bold">{content.id}</li>
                                    </div>
                                    <div class = "col-start-4 col-span-1">
                                        <li class = "text-lg font-bold">{content.period}</li>
                                    </div>
                                
                                <div class = "row-start-2 col-span-4">
                                        <li class = "text-md">{content.position}</li>
                                        <li class = "text-md">{content.text1}</li>
                                        <li class = "text-md">{content.text2}</li>
                                </div>
                            
                </div>;
            }) 
        }</ul>
    </div>
    );
};

export default ListCard;