import {CSSProperties, FC, useMemo} from 'react';
import cls from './Avatar.module.scss'
import {classNames} from "shared/lib";

interface AvatarProps{
    className?:string
    src:string
    alt:string
    size?:number
}

export const Avatar:FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        alt,
        size
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width:size || 100,
            height: size || 100
        }
    },[size])
    return (
        <img className={classNames(cls.Avatar, {}, [className])} src={src} alt={alt} style={styles}/>
    );
};

