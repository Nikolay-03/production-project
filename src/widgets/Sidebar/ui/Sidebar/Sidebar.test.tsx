import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/helpers/tests/renderWithTranslation";

describe('Button', () => {
    test('should render', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})