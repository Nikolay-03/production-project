import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Button', () => {
    test('should render', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('test toggle', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})