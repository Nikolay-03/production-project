import {memo, useCallback} from 'react';
import {classNames} from "shared/lib";
import {Currency} from "../../model/types/currency";
import {Select} from "shared/ui";
import {useTranslation} from "react-i18next";

interface CurrencySelectProps{
    className?:string
    value?:Currency,
    readonly?:boolean
    onChange?:(value:Currency) => void
}
const options = [
    {value:Currency.RUB, content: Currency.RUB},
    {value:Currency.EUR, content: Currency.EUR},
    {value:Currency.USD, content: Currency.USD}
]
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const {t} = useTranslation('profile')
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency)
    },[onChange])
    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
        />
    );
});

