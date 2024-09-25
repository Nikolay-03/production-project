import {FC} from 'react';
import cls from './LangSwitcher.module.scss'
import {classNames} from "shared/lib/helpers";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui";

interface LangSwitcherProps{
    className?:string
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const {className} = props
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru'? 'en' : 'ru')
    }
    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
    );
};

