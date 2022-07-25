import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "react-dom"
import Greeting from "./Greeting"

test('Contains Hello World', ()=>{
    //Write a test by using the three A's
    //Arrange - set up page
    //Act - Act on the page
    //Assert - Assert the results
    render(<Greeting/>);

    const helloWorld = screen.getByText("Hello World");
    expect(helloWorld).toBeInTheDocument();
    //can also use .not.toBeInDocument()

})