import {FC} from 'react';
import cls from './PageLoader.module.scss'
import {classNames} from "shared/lib/helpers";
import {Loader} from "shared/ui";

interface PageLoaderProps{
    className?:string
}

export const PageLoader:FC<PageLoaderProps> = (props) => {
    const {className} = props
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

