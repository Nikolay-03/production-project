import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";

describe('getLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm:{
                username:'admin',
                password:'123',
                isLoading:false
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    })
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    })
})
