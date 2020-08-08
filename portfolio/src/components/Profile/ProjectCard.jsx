import React from 'react'
import './Project.css';

 export default function ProjectCard(props){

    const { projectName, projectImg, projectTitle, projectDesc, projectStackImages } = props;
    let arr =[]
    for(let i in projectStackImages){
        arr.push(projectStackImages[i])
    }
    console.log(arr)
    console.log("projectStackImages", projectStackImages)
    return(
        <>
               <div class ='col-12 col-sm-12 col-md-6 col-lg-4 mb-5'>        
                    <h3 class="text-center">{projectName}</h3>
                    <div class="card mt-2 h-100 project shadow">
                        <div className="imgBack">
                            <img src={projectImg} class="card-img-top  img-fluid p-2" alt="..."/>
                        </div>
                        <div class="text-center ">
                            <i class="fas fa-plus"></i>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-center title-color"><a href="../portfolio/projects/Typewriter/keyboard.html">{projectTitle}</a> </h5>
                            <p class="card-text">{projectDesc}</p>
                        </div>
                    <div class="card-footer d-flex justify-content-center">
                        {arr.map(ele=>( 

                        <img src={ele} class="rounded iconFooter mr-2" alt="..."/>
                         ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}