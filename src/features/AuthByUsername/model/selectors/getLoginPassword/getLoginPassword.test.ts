import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";

describe('getLoginPassword', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm:{
                username:'',
                password:'admin',
                isLoading:false
            },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('admin');
    })
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    })
})
