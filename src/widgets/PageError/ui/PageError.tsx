import {FC} from 'react';
import cls from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib";

interface PageErrorProps{
    className?:string
}

export const PageError:FC<PageErrorProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.pageErrorContent}>
                <h1>{t('Произошла непредвиденная ошибка')}</h1>
                <button onClick={reloadPage}>{t('Перезагрузить страницу')}</button>
            </div>
        </div>
    );
};

