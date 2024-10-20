import {FC, useCallback} from 'react';
import cls from './ProfilePageHeader.module.scss'
import {classNames, useAppDispatch} from "shared/lib";
import {Button, ButtonTheme, Text} from "shared/ui";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    },[dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    },[dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    },[dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")}/>
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINED}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t("Редактировать")}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINED_RED}
                            className={cls.editBtn}
                            onClick={onCancelEdit}
                        >
                            {t("Отменить")}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINED}
                            className={cls.saveBtn}
                            onClick={onSave}
                        >
                            {t("Сохранить")}
                        </Button>
                    </>
                )
            }
        </div>
    );
};

