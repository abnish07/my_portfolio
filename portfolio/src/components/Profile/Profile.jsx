import React from 'react'
import style from './Profile.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faMarker, faMailBulk, faMobile } from "@fortawesome/free-solid-svg-icons";


function Profile(){

    return(
        <>
        <div className="container-fluid">
        <div className="row pl-5">
            <div className="bg-white col-3">
                <img />
                <h3 className="text-primary pt-5">Abnish Kumar</h3>
                <h6 className="fullStack pt-2">Full Stack Developer</h6>
                <i class="fas fa-map-marker-alt location pt-3"><span className="ml-2 location">Patna, Bihar, India</span></i>
                <p className="desc pt-4">A passionate aspiring Full Stack Developer skilled in front end JavaScript/ES6/ES2017 areas, moduled and shaped by Masai's intensive and immensive learning. Look forward to join a company where I shall be able to contribute towards individual and company growth.  </p>
                <i className="resume"><a href=""> View full Resume</a></i>
                <div className="contact pt-5">
                <i class="fas fa-phone-alt"></i> +91-8051665056 </div>
                <div className="contact pt-1"><i class="fas fa-envelope"></i> akp12556@gmail.com </div>
                <div className="mt-5">
               <i class="fab fa-github-square socialIcon"></i>
               <i class="fab fa-hackerrank socialIcon"></i>
               <i class="fab fa-linkedin socialIcon"></i>
               <i class="fab fa-twitter-square socialIcon"></i>
               </div>
            </div>           
            <div className="rightHandProfile col-9">
                <div className="pt-5">
                <img src="/images/mypicture.png" className="myImg" alt="profileImg" />
                <span className="smallCircle"></span>
                </div>
               <div className='row pt-5 pl-5'>
                    <div className="col-3">
                        <img src="/images/html-5.svg" alt="" className="html" />
                    </div>
                    <div className="col-3">
                        <img src="/images/css-5.svg" alt="" className="icon" />
                    </div>
                    <div className="col-3">
                        <img src="/images/javascript.svg" alt="" className="icon" />
                    </div>
                    <div className="col-3">
                        <img src="/images/nodejs.svg" alt="" className="icon" />
                    </div>
               </div>
               <div className='row pt-5 pl-5'>
                    <div className="col-3">
                        <img src="/images/bootstrap-4.svg" alt="" className="icon" />
                    </div>
                    <div className="col-3">
                        <img src="/images/react.svg" alt="" className="icon" />
                    </div>
                    <div className="col-3">
                        <img src="/images/redux.svg" alt="" className="icon" />
                    </div>
                    <div className="col-3">
                        <img src="/images/mongodb.svg" alt="" className="icon" />
                    </div>
               </div>
             
            </div>           
        </div>
        </div>
        </>
    )
}
 
export default Profile;