import {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';
import {classNames} from "shared/lib";

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_RED = 'outlined_red',
    BACKGROUND= 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize{
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?:boolean;
    size?:ButtonSize;
    disabled?:boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props
    return (
        <button
            type='button'
            className={classNames(cls.Button, {[cls.square]:square,[cls.disabled]: disabled}, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

