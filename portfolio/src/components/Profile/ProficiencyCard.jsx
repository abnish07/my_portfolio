import React from 'react'
import './Proficiency.css';

 export default function ProficiencyCard(props){
    
    const { techTitle, techStack, techImg } = props;

    return(
        
        <>
            <div className="col-3 text-center">
                <img src={techImg} className="techCategory" alt="frontend" />
                <h5 className=" mt-2">{techTitle}</h5>

                    <p>{techStack}</p>
              </div>
        </>
    )
}

