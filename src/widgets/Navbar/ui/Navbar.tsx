import React, {FC, useCallback, useState} from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/helpers";
import {Button, Modal, ButtonTheme} from "shared/ui";
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
            <div>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={toggleAuthModal}
                >
                    {t('Войти')}
                </Button>
            </div>
                <Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
                </Modal>
        </div>
    );
};

