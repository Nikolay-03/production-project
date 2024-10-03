import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";
const App = () => {
    const {t} = useTranslation()
    return (
        <div className={classNames('app', {}, [])}>
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