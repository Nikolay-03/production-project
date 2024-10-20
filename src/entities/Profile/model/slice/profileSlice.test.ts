import {profileActions, profileReducer, ProfileSchema} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

const data = {
    username: 'admin',
    firstname: 'Name',
    lastname: 'Surname',
    age: 18,
    city: 'LA',
    country: Country.USA,
    currency: Currency.USD,
}
describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false))
        ).toEqual({readonly: false});
    })
    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                username: '123'
            }
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit())
        ).toEqual({form: data, readonly: true, data});
    })
    test('updateData', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '123'
            }
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateData({username: '12345'}))
        ).toEqual({
            form: {
                username: '12345',
            },
        });
    })
})