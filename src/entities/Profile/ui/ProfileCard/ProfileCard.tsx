import {FC} from 'react';
import cls from './ProfileCard.module.scss'
import {classNames} from "shared/lib";
import {Avatar, Input, Loader, Text, TextTheme} from "shared/ui";
import {useTranslation} from "react-i18next";
import {Profile} from "entities/Profile";
import {TextAlign} from "shared/ui/Text/Text";
import {Currency, CurrencySelect} from "entities/Currency";
import {Country, CountrySelect} from "entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    onChangeFirstname?:(value?:string) => void;
    onChangeLastname?:(value?:string) => void;
    onChangeAge?:(value?:string) => void;
    onChangeCity?:(value?:string) => void;
    onChangeUsername?:(value?:string) => void;
    onChangeAvatar?:(value?:string) => void;
    onChangeCurrency?:(currency:Currency) => void;
    onChangeCountry?:(country:Country) => void;
    readonly?:boolean;
    error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
        readonly,
        isLoading
    } = props
    const {t} = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: isLoading}, [className])}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.error]: !!error}, [className])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatar}>
                        <Avatar src={data.avatar} alt={'avatar'}/>
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Ваш имя пользователя")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Ваш аватар")}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

