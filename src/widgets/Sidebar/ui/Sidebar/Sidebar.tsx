import React, {FC, useState} from 'react';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/helpers";
import {AppLink, AppLinkTheme, Button, ButtonTheme, LangSwitcher, ThemeSwitcher} from "shared/ui";
import {useTranslation} from "react-i18next";
import {ButtonSize} from "shared/ui/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.linkContainer}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.linkContainer}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t("О нас")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};

