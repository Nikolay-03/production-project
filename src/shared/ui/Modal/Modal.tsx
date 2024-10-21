import React, {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import cls from './Modal.module.scss'
import {Portal} from "shared/ui";
import {classNames, Mods} from "shared/lib";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose
    } = props
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen]);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, 300)
        }
    },[onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler()
        }
    },[closeHandler])

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown]);
    if(lazy && !isMounted){
        return null
    }
    return (
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
    );
};

