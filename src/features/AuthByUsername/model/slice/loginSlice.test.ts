import {loginReducer, LoginSchema} from "features/AuthByUsername";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";

describe('loginSlice.test', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username:'123'
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'))
        ).toEqual({username:'123123'});
    })
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password:'123'
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('12345'))
        ).toEqual({password:'12345'});
    })
})