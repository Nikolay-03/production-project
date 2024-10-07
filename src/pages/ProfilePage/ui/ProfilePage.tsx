import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {classNames, DynamicModuleLoader, useAppDispatch} from "shared/lib";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader";
import {ProfileCard, profileReducer} from "entities/Profile";
import {fetchProfileData} from "entities/Profile/model/api/fetchProfileData/fetchProfileData";

const initialReducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('')}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;