import {FC} from 'react';
import cls from './Text.module.scss'
import {classNames} from "shared/lib";

export enum TextTheme{
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign{
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface TextProps{
    className?:string
    title?:string
    text?:string
    theme?:TextTheme,
    align?:TextAlign,
}

export const Text:FC<TextProps> = (props) => {
    const {
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        title,
        text,
    } = props
    return (
        <div className={classNames('', {[cls[theme]]: true}, [className, cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

