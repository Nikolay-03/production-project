import {memo, useCallback} from 'react';
import cls from './LoginForm.module.scss'
import {Button, ButtonTheme, Input, Text, TextTheme} from "shared/ui";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/api/loginByUsername/loginByUsername";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginLoading} from "../../model/selectors/getLoginLoading/getLoginLoading";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader";
import {classNames, useAppDispatch} from "shared/lib";

export interface LoginFormProps{
    className?:string;
    onSuccess?:() => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
    const {className, onSuccess} = props
    const {t} = useTranslation()
    const error = useSelector(getLoginError)
    const username = useSelector(getLoginUsername)
    const isLoading = useSelector(getLoginLoading)
    const password = useSelector(getLoginPassword)
    const dispatch = useAppDispatch()
    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username,password}))
        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess()
        }
    },[onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
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
        </DynamicModuleLoader>
    );
});
export default LoginForm;

