import { I18nextProvider } from 'react-i18next';
import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nForTest from "shared/config/i18n/i18nForTest";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {Provider} from "react-redux";

interface ComponentRenderOptions{
    route?:string,
    initialState?: Partial<StateSchema>
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
    } = options
    return (
        render(
            <StoreProvider initialState={initialState as StateSchema}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTest}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </StoreProvider>
        )
    );
};

