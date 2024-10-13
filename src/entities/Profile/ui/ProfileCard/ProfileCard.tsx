import {FC} from 'react';
import cls from './ProfileCard.module.scss'
import {classNames, useAppDispatch} from "shared/lib";
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {Button, ButtonTheme, Input, Text} from "shared/ui";
import {useTranslation} from "react-i18next";
import {loginByUsername} from "features/AuthByUsername/model/api/loginByUsername/loginByUsername";

interface ProfileCardProps{
    className?:string
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")}/>
                <Button
                    theme={ButtonTheme.OUTLINED}
                    className={cls.editBtn}
                >
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

