import React, {FC} from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/helpers";
import {AppLink, AppLinkTheme, ThemeSwitcher} from "shared/ui";

interface NavbarProps{
    className?:string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLinks} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>О сайте</AppLink>
            </div>
        </div>
    );
};

