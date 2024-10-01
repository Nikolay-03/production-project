import {FC} from 'react';
import {classNames} from "shared/lib/helpers";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui";

interface LangSwitcherProps{
    className?:string;
    short?:boolean
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const {className,short} = props
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru'? 'en' : 'ru')
    }
    return (
            <Button
                className={classNames('', {}, [className])}
                onClick={toggle}
                theme={ButtonTheme.CLEAR}
            >
                {t(short? 'Короткий язык': 'Язык')}
            </Button>
    );
};

