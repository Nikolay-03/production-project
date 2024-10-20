import {memo, useCallback} from 'react';
import {classNames} from "shared/lib";
import {Select} from "shared/ui";
import {useTranslation} from "react-i18next";
import {Country} from "../../model/types/country";

interface CountrySelectProps{
    className?:string
    value?:Country,
    readonly?:boolean
    onChange?:(value:Country) => void
}
const options = [
    {value:Country.RUSSIA, content: Country.RUSSIA},
    {value:Country.USA, content: Country.USA},
    {value:Country.UKRAINE, content: Country.UKRAINE},
    {value:Country.BELARUS, content: Country.BELARUS}
]
export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const {t} = useTranslation('profile')
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country)
    },[onChange])
    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите страну')}
            options={options}
            readonly={readonly}
        />
    );
});

