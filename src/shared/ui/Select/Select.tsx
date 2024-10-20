import {memo, useMemo} from 'react';
import cls from './Select.module.scss'
import {classNames} from "shared/lib";

interface SelectOption{
    value: string;
    content:string
}

interface SelectProps{
    className?:string
    label?:string
    options?:SelectOption[]
    value?:string,
    readonly?:boolean
    onChange?:(value:string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    },[])

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});

