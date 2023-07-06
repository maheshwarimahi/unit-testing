import React from 'react';

const FeedbackOverview = (props)=>{
    console.log(props.feedbacklist)
    if(props.feedbacklist.length==0){
        return <h3>No Feedback found</h3>
    }
    return (
        <div>
        <h2>Feedback Overview</h2> 
        <ul>
        {
           props.feedbacklist.map(feedback=>{
             return <li key={feedback.id}>{feedback.feedbacktxt}</li>
            })
        }
            
            
            </ul>   
        </div>
    )
}

export default FeedbackOverview;