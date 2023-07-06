import React, { useState } from 'react';



const Feedbackform = () => {

    const [feedbacktxt, setfeedbacktext] = useState("")
    const [tncbox, settncbox] = useState(false)

    const submitFeedback =()=>{
        console.log("feedback submitted")
    }

    return (
        <div  >
            <h1>Feedbackform</h1>
            <input type='text'  placeholder='Enter your feedback' value={feedbacktxt}
                onChange={(event) => { setfeedbacktext(event.target.value) }} />

            <input id='tncbox' type='checkbox' defaultChecked={tncbox}
                onChange={() => settncbox(!tncbox)} />

            <label htmlFor='tncbox'>I agree the Terms and Conditions</label>

            <button onClick={()=>submitFeedback()}   disabled={!tncbox || !feedbacktxt}>Add Feedback</button>
        </div>
    )
}

export default Feedbackform;