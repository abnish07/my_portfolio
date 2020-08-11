import React from 'react'
import './Project.css';
import ProjectCard from './ProjectCard';



function Profile(){
  
    let objOnefinestay = {
        images1: '/images/react.svg',
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/javascript.svg',
        images6: '/images/redux.svg',
    }
    let objShoppingCart = {
        images1: '/images/react.svg',
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/redux.svg',
    }
    let objTodo = {
        images1: '/images/react.svg',
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/redux.svg',
    }
    let objChrome = {
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/javascript.svg',
    }
    let objTimer = {
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images5: '/images/javascript.svg',
    }
    let objTypewriter = {
        images2: '/images/html-5.svg',
        images3: '/images/css-5.svg',
        images5: '/images/javascript.svg',
    }
    return(
        <>
        <div className="container mb-5">
            <h1 className="text-center text-dark "> Projects</h1>
            <div class='row mt-5 text-center'>

            {/* one fine stay project */}
             <ProjectCard 
             projectTitle = "Onefinestay"
             projectImg = '/images/onefinestay_.png'
             projectUrl = "http://finestay.abhishekray.tech/"
             projectStackImages = {objOnefinestay}
             projectDesc ="Online Hotel Booking website, where user can book a variety of
             hotels and make payment" 
             />

            <ProjectCard 
             projectTitle = "Shopping Cart"
             projectImg = '/images/shopping_cart.png'
             projectUrl="https://shopping-cart-sigma.vercel.app/"
             projectStackImages = {objShoppingCart}
             projectDesc ="Online shopping cart, select your product, Add add them into the cart, put delivery address and order online." 
             />

            <ProjectCard 
             projectTitle = "Todo"
             projectImg = '/images/todo_1.png'
             projectUrl="https://todo-git-master.abnish07.vercel.app/"
             projectStackImages = {objTodo}
             projectDesc ="Add your items into todo, edit and update your items and remove
             when complete." 
             />

            {/* Chrome Extension */}
             <ProjectCard 
             projectTitle = "Chrome Extension"
             projectImg = '/images/tracker.png'
             projectStackImages = {objChrome}
             projectDesc ="A Tracker to track your waste time on your listing websites. Show the total time at the end of the day." 
             />
          
            
             <ProjectCard 
             projectTitle = "Timer"
             projectImg = '/images/timer_.png'
             projectUrl="/timer/timer.html"
             projectStackImages = {objTimer}
             projectDesc =" A java scrit project to show the timer and stopwatch. Timer takes input and run. Perform start, stop, pause and reset." 
             />
             <ProjectCard 
             projectTitle = "Typewriter"
             projectImg = '/images/typewriter.png'
             projectUrl="/Typewriter/keyboard.html"
             projectStackImages = {objTypewriter}
             projectDesc ="A javascript project in which user can write, delete, reverse the string and convert the string into password string." 
             />
             
        </div>
    </div>
        </>
    )
}
 
export default Profile;