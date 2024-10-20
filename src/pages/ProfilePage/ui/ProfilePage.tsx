import React, {useCallback, useEffect} from 'react';
import {classNames, DynamicModuleLoader, useAppDispatch} from "shared/lib";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer
} from "entities/Profile";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency/model/types/currency";
import {Country} from "entities/Country";

const initialReducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileFormData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    const onChangeFirstname = useCallback((value?:string) => {
        dispatch(profileActions.updateData({firstname: value || ''}))
    },[dispatch])

    const onChangeLastname = useCallback((value?:string) => {
        dispatch(profileActions.updateData({lastname: value || ''}))
    },[dispatch])

    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateData({age: Number(value) || 0}))
    },[dispatch])

    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateData({city: value || ''}))
    },[dispatch])

    const onChangeUsername = useCallback((value?:string) => {
        dispatch(profileActions.updateData({username: value || ''}))
    },[dispatch])

    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateData({avatar: value || ''}))
    },[dispatch])

    const onChangeCurrency = useCallback((currency:Currency) => {
        dispatch(profileActions.updateData({currency}))
    },[dispatch])

    const onChangeCountry = useCallback((country:Country) => {
        dispatch(profileActions.updateData({country}))
    },[dispatch])

    useEffect(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchProfileData())
        }
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('')}>
                <ProfilePageHeader/>
                <ProfileCard
                    data={data}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;