import {render,screen} from '@testing-library/react';
import Feedbackform from '../components/Feedbackform';


describe('Test related to Feedback form ',()=>{
    test('on load of feedbackform',() =>{
        render(<Feedbackform/>)
       const textbox =  screen.getByRole('textbox')
       expect (textbox)
    
       const checkbox= screen.getByLabelText('I agree terms and conditions',{exact:false})
       expect(checkbox)
    
       const btnelement= screen.getByRole('button',{name:'Submit',exact:false})
       expect(btnelement)
       expect(btnelement).toBeDisabled()
    })
    
    test('Button is enabled',()=>{
        render(<Feedbackform/>)
        const textbox = screen.getAllByPlaceholderText('Enter the feedback ',{exact:false})
        const checcheckbox=screen.getAllByLabelText('I agree terms and condition',{exact:false})
        const btnelement= screen.getByRole('button',{name:'Submit',exact:false})
    })
})