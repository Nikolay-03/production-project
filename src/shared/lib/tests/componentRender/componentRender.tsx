import {I18nextProvider} from 'react-i18next';
import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nForTest from "shared/config/i18n/i18nForTest";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";

interface ComponentRenderOptions {
    route?: string,
    initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
    } = options
    return (
        render(
            <MemoryRouter initialEntries={[route]}>
                <StoreProvider initialState={initialState as StateSchema}>
                    <I18nextProvider i18n={i18nForTest}>
                        {component}
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>
        )
    );
};

