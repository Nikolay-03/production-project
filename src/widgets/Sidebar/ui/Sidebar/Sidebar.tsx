import React, {FC, useState} from 'react';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/helpers";
import {AppLink, AppLinkTheme, LangSwitcher, ThemeSwitcher} from "shared/ui";
import {useTranslation} from "react-i18next";

interface SidebarProps{
    className?:string
}

export const Sidebar:FC<SidebarProps> = (props) => {
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
            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Расширение')}
            </button>
            <div className={cls.links}>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

