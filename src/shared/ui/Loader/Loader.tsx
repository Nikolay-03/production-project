import {FC} from 'react';
import './Loader.scss'
import {classNames} from "shared/lib";

interface LoaderProps{
    className?:string
}

export const Loader:FC<LoaderProps> = (props) => {
    const {className} = props
    return (
        <div className={classNames("loader", {}, [className])}>
        </div>
    );
};

