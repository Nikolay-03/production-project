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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis debitis dolores maxime nisi perferendis quaerat quam similique voluptas voluptatum. Ad aliquid beatae, corporis cumque deserunt dolor ea eligendi eos esse eum, excepturi facere id iste iure laboriosam maxime minima nemo qui quisquam quos, reiciendis saepe soluta unde vero voluptates. Alias architecto earum excepturi iusto possimus reprehenderit sint! Ab accusantium aut dolor, ea eum eveniet ex illum in itaque laudantium libero molestias mollitia natus obcaecati odit quasi quia ratione rerum similique suscipit tempora ut vel! A commodi consectetur, dolor, eligendi enim est ipsa maxime nam non optio, sunt suscipit velit!
                </Modal>
        </div>
    );
};

