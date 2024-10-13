import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm:{
                username:'',
                password:'',
                isLoading:false,
                error:'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error');
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    })
})
