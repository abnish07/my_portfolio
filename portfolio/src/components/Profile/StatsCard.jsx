import React from 'react'
import './Stats.css';

export default function StatsCard(props){
    
    const { number, time, desc } = props

    return(
        <>
             <div class='col-6 col-sm-6 col-md-4 col-lg-2 '>
                            <div class=' circle progress-bar'>
                                <h5 class='number'>{number}+</h5>
                            </div>
                        <div class="hours text-center my-3">
                            <strong>{time}</strong><br/>
                            {desc}
                       
                        </div>
                    </div>
        </>
    )
}