import {FC} from 'react';
import './Loader.scss'
import {classNames} from "shared/lib/helpers";

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

