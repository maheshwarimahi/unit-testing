import Feedbackform from "./components/Feedbackform";
import FeedbackOverview from  "./components/FeedbackOverview"

function App() {
  const feedbacks=[
    {id:1 , feedbacktxt:'Food was too spicy'},
    {id:2, feedbacktxt: 'Food was good'},
    {id:3, feedbacktxt:'Price was too high'}
]
  return (
    

    <div data-testid="Parent-container">
    { /*<h2>Demo information</h2>
      <input type="text" placeholder= "Enter email"/>
      <button>Click here</button>
      <ul>
        <li>Phone</li>
        <li> Mobile</li>
  </ul> */}
    <Feedbackform />
    <FeedbackOverview feedbacklist= {feedbacks} />
    </div>
  
  )
}

export default App;


