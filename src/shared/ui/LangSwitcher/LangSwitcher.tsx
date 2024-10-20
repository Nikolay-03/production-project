import {memo} from 'react';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui";
import {classNames} from "shared/lib";

interface LangSwitcherProps{
    className?:string;
    short?:boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
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
});

