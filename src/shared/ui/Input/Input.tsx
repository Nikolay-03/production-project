import React, {FC, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react';
import cls from './Input.module.scss'
import {classNames} from "shared/lib";
type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends InputHTMLProps{
    className?:string
    value?:string
    onChange?:(value:string) => void,
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        autofocus,
        placeholder,
        type = 'text',
        ...otherProps
    } = props
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(value?.length || 0)
    const ref = useRef<HTMLInputElement | null>(null)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }
    const onFocus = () => {
        setIsFocused(true)
    }
    const onBlur = () => {
        setIsFocused(false)
    }
    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target && e.target.selectionStart){
            setCaretPosition(e.target.selectionStart)
        }
    }
    useEffect(() => {
        if(autofocus){
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{left:`${caretPosition* 10}px`}}
                    >
                    </span>
                )}
            </div>
        </div>
    );
});

