import {memo} from 'react';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light 1.svg'
import DarkIcon from 'shared/assets/icons/theme-dark 1.svg'
import {Button, ButtonTheme} from "shared/ui";
import {classNames} from "shared/lib";

interface ThemeSwitcherProps{
    className?:string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {className} = props
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT? <LightIcon/>: <DarkIcon/>}
        </Button>
    );
});

