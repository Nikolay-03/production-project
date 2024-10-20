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
    {value:Country.Russia, content: Country.Russia},
    {value:Country.USA, content: Country.USA},
    {value:Country.Ukraine, content: Country.Ukraine},
    {value:Country.Belarus, content: Country.Belarus}
]
export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const {t} = useTranslation()
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

