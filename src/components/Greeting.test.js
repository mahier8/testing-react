import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />)

        //Act
        //In our example we don't have anything to act on

        // Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />)

        const paragraphElemement = screen.getByText('good to see you', { exact: false });
        expect(paragraphElemement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const paragraphElemement = screen.getByText('Changed!');
        expect(paragraphElemement).toBeInTheDocument();
    });

    test('does not render "good to see to see you" if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const paragraphElemement = screen.queryByText('good to see to see you', {exact: false});
        expect(paragraphElemement).toBeNull();
    });
});
