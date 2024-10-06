import {memo, useCallback} from 'react';
import cls from './LoginForm.module.scss'
import {classNames} from "shared/lib/helpers";
import {Button, ButtonTheme, Input, Text, TextTheme} from "shared/ui";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginActions} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/api/loginByUsername/loginByUsername";
import {AppDispatch} from "app/providers/StoreProvider/config/store";

interface LoginFormProps{
    className?:string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {className} = props
    const {t} = useTranslation()
    const {username,password, error, isLoading} = useSelector(getLoginState)
    const dispatch: AppDispatch = useDispatch()

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username,password}))
    },[dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={t('Введено неверное имя пользователя или пароль')} theme={TextTheme.ERROR}/>}
            <Input
                autofocus
                type="text"
                className={cls.input}
                onChange={onUsernameChange}
                placeholder={t("Введте имя пользователя")}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={onPasswordChange}
                value={password}
                placeholder={t("Введите пароль")}
            />
            <Button
                className={cls.modalBtn}
                theme={ButtonTheme.OUTLINED}
                disabled={isLoading}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

