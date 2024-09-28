import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe('Button', () => {
    test('should render', () => {
        render(<Button>TEXT</Button>)
        expect(screen.getByText('TEXT')).toBeInTheDocument()
    })
    test('should render with class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>)
        expect(screen.getByText('TEXT')).toHaveClass('clear')
        screen.debug()
    })
})