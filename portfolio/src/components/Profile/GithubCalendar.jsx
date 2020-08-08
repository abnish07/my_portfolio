import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default function GithubCalendar(){

    return(
        <>
                   <div className="text-center mt-5"><br/><br/>
                   <h1 className="text-center text-dark my-5">Github Contributions</h1>
                   <div className="border rounded m-5 p-4">
                <GitHubCalendar username="abnish07" blockSize={20} showTotalCount={true} >
                <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
                </div>
                </div>
        </>
    )
}