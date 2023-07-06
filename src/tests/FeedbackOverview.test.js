import {render,screen,fireEvent, getAllByRole} from '@testing-library/react';
import FeedbackOverview from '../components/FeedbackOverview';

test('No feedback found',()=>{
    render(<FeedbackOverview feedbacklist={[]} />)
    const Feedbacknotfound= screen.getByText('No Feedback found', {exact:false}) 
    expect(Feedbacknotfound).toBeInTheDocument()

})

test(' Feedback found',()=>{
    render(<FeedbackOverview feedbacklist={[
        {id:1 , feedbacktxt:'Food was too spicy'},
        {id:2, feedbacktxt: 'Food was good'}
    ]} />)
    const Li1= screen.queryByText('Food was too spicy', {exact:false}) 
    expect(Li1).toBeInTheDocument()


    const Li2= screen.queryByText('Food was good', {exact:false}) 
    expect(Li2).toBeInTheDocument()

   

})