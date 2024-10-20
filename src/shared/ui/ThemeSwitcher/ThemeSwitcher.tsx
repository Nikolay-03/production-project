import {memo, useMemo} from 'react';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ButtonTheme} from "shared/ui";
import {classNames} from "shared/lib";
import LightIcon from '../../assets/icons/theme-light 1.svg'
import PurpleIcon from '../../assets/icons/theme-purple.svg'
import DarkIcon from '../../assets/icons/theme-dark 1.svg'

interface ThemeSwitcherProps{
    className?:string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {className} = props
    const {theme, toggleTheme} = useTheme()
    const changeThemeIcon = useMemo(() => {
        if(theme === Theme.DARK){
            return <LightIcon/>
        }
        else if(theme === Theme.LIGHT){
            return <PurpleIcon/>
        }
        return <DarkIcon/>
    },[theme])

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {changeThemeIcon}
        </Button>
    );
});

