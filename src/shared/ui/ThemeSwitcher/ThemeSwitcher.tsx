import {FC} from 'react';
import cls from './ThemeSwitcher.module.scss'
import {classNames} from "shared/lib/helpers";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light 1.svg'
import DarkIcon from 'shared/assets/icons/theme-dark 1.svg'
import {Button, ThemeButton} from "shared/ui";

interface ThemeSwitcherProps{
    className?:string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const {className} = props
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT? <LightIcon/>: <DarkIcon/>}
        </Button>
    );
};

