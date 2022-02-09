import React from "react";


const SkillBox = props => {
    return(
        <div class = "m-8 flex space-x-3.5">
            {props.content.map((content)=> {
                return <div class = "flex shadow-sm rounded-lg text-white bg-indigo-300 font-bold">
                        <svg class="w-6 h-6 flex-none fill-indigo-100 stroke-indigo-300 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="8" />
                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                    <a>&nbsp;{content.text}&nbsp;&nbsp;</a>
                </div>;}
            )}
        </div>
    );
};







export default SkillBox;