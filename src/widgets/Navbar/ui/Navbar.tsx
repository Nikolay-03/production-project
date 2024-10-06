import React, {FC, useCallback, useState} from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/helpers";
import {Button, ButtonTheme} from "shared/ui";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    const userAuthData = useSelector(getUserAuthData)
    const dispatch = useDispatch()
    const [isAuthModal, setAuthModal] = useState<boolean>(false)
    const onOpenAuthModal = useCallback(() => {
        setAuthModal(true)
    }, [])
    const onCloseAuthModal = useCallback(() => {
        setAuthModal(false)
    }, [])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (userAuthData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenAuthModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal}/>
            )}
        </div>
    );
};

