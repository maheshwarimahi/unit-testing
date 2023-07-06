import {render,screen,fireEvent} from '@testing-library/react';
import Feedbackform from '../components/Feedbackform';



describe('Test related to Feedback form ',()=>{
    test('On load of feedbackform',() =>{
        render(<Feedbackform/>)
       const textbox =  screen.getByRole('textbox')
       expect (textbox)
    
       const checkbox= screen.getByLabelText('I agree the Terms and Conditions',{exact:false})
       expect(checkbox)
    
       const btnelement= screen.getByRole('button',{name:'Add Feedback',exact:false})
       expect(btnelement)
       expect(btnelement).toBeDisabled() 
    })
    
    test('Button is enabled only if textbox and check box have values',()=>{
        render(<Feedbackform/>)
        const textbox = screen.getByPlaceholderText('Enter your feedback',{exact:false})
        const checkbox=screen.getByLabelText('I agree the Terms and Conditions',{exact:false})
        const btnelement= screen.getByRole('button', {name: 'Add Feedback',exact:false})
        
        fireEvent.change(textbox,{target:{value:'Food was too spicy'}})
        fireEvent.click(checkbox);
       
        expect(btnelement).toBeEnabled();// button is enabled after text box and check box have values 
        fireEvent.click(checkbox)
        expect(btnelement).toBeDisabled() // button is disabled if checkbox is unchecked
    })
})