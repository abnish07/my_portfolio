import React from 'react'
import './Project.css';
import ProjectCard from './ProjectCard';



function Profile(){
  
    let obj = {
        images1: '/images/react.svg',
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/javascript.svg',
    }
    return(
        <>
        <div className="container mb-5">
            <h1 className="text-center text-dark "> Projects</h1>
            <div class='row mt-5'>
             <ProjectCard 
             projectName="Project 1"
             projectTitle = "Typewriter"
             projectImg = '/images/typewriter.png'
             projectStackImages = {obj}
             projectDesc ="I made a Typewriter which has similar functionality like real typewriter" 
             />
             <ProjectCard 
             projectName="Project 2"
             projectTitle = "Timer & Stopwatch"
             projectImg = '/images/stopwatch.png'
             projectStackImages = {obj}
             projectDesc ="I made Stopwatch and Timer to count the time according to their functionality" 
             />
             <ProjectCard 
             projectName="Project 3"
             projectTitle = "Typewriter"
             projectImg = '/images/typewriter.png'
             projectStackImages = {obj}
             projectDesc ="I made a Typewriter which has similar functionality like real typewriter" 
             />
        </div>
    </div>
        </>
    )
}
 
export default Profile;