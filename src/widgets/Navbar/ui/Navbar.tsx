import React, {FC, useCallback, useState} from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/helpers";
import {Button, Modal, ThemeButton} from "shared/ui";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?:string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    const [isAuthModal, setAuthModal] = useState<boolean>(false)
    const toggleAuthModal = useCallback(() => {
        setAuthModal(prevState => !prevState)
    },[])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={toggleAuthModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
                    Modal window text
                </Modal>
        </div>
    );
};

