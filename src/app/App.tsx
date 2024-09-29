import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense, useState} from "react";

const App = () => {
    const {theme} = useTheme()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
               <Navbar/>
               <div className='content-page'>
                   <Sidebar/>
                   <AppRouter/>
               </div>
           </Suspense>
        </div>
    );
};

export default App;