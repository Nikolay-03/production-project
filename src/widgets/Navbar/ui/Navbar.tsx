import React, {FC} from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/helpers";
import {AppLink, AppLinkTheme} from "shared/ui";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?:string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLinks} theme={AppLinkTheme.PRIMARY}>{t("Главная")}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>{t("О нас")}</AppLink>
            </div>
        </div>
    );
};

