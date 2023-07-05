import { render, screen,logRoles } from '@testing-library/react';
import App from './App';

test.skip('check if button exist', ()=>{
  render(<App/>);
  logRoles(screen.getByTestId("Parent-container"));
  const btnElement = screen.getAllByRole('button',{name : 'Click here', exact:false});
  expect(btnElement);
})
 
