import {componentRender} from "shared/lib/tests/componentRender/componentRender";
import {fireEvent, screen} from "@testing-library/react";
import {Counter} from "./Counter";

describe('Counter', () => {
    test('should render', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        })
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
    })
    test('increment', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        })
        fireEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
    })
    test('decrement', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        })
        fireEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
    })

})