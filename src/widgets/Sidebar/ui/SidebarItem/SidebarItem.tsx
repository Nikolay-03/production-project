import React, {memo} from 'react';
import cls from './SidebarItem.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui";
import {SidebarItemType} from "widgets/Sidebar/model/items";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib";

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props
    const {t} = useTranslation()
    return (
        <AppLink
            to={item.path}
            className={classNames(cls.linkContainer, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.SECONDARY}>
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

