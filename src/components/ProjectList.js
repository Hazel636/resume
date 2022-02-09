import React from "react";


const ProjectList = props => {
    return(
        <div class = "m-8">
            {
                props.content.map((content)=> {
                    return <div class = "grid grid-cols-4">
                                   
                                        <div class = "col-span-3">
                                            <h1 class = "text-lg font-bold">{content.name}</h1>
                                        </div>
                                        <div class = "col-start-4 col-span-1">
                                            <h1 class = "text-lg font-bold">{content.period}</h1>
                                        </div>
                                    
                                    <div class = "row-start-2 col-span-4">
                                        <p class = "text-md">{content.position}</p>
                                        <p class = "text-md">{content.text}</p>
                                    </div>
                                
                    </div>;
                }) 
            }
        </div>
    );
};

export default ProjectList;