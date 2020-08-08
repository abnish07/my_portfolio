import React from 'react'
import './Stats.css';
import StatsCard from './StatsCard';

export default function Stats(){

    return(
    <>
        <div class='container'>
            <div class="p-3 mb-2 bg-info text-white">
                <div class='row mt-5 offset-1'>
                   <StatsCard 
                   number ="1000"
                   time = "HOURS"
                   desc = "of full stack"
                   />
                   <StatsCard 
                   number ="1000"
                   time = "HOURS"
                   desc = "of full stack"
                   />
                   <StatsCard 
                   number ="1000"
                   time = "HOURS"
                   desc = "of full stack"
                   />
                   <StatsCard 
                   number ="1000"
                   time = "HOURS"
                   desc = "of full stack"
                   />
                   <StatsCard 
                   number ="1000"
                   time = "HOURS"
                   desc = "of full stack"
                   />
                </div>
            </div>
        </div>
    </>
    )
}
 