import React from 'react';
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader} from "shared/lib";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const initialReducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const {t} = useTranslation('main')
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {t("Профиль")}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;