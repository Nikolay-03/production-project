import {FC} from 'react';
import cls from './PageLoader.module.scss'
import {Loader} from "shared/ui";
import {classNames} from "shared/lib";

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

