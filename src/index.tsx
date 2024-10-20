import {createRoot} from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import 'app/styles/index.scss'
import {StoreProvider} from "app/providers/StoreProvider";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
export {Currency} from "entities/Currency/model/types/currency";