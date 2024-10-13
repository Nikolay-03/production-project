import {StateSchema} from "app/providers/StoreProvider";
import {getLoginState} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";

describe('getLoginState', () => {
    test('should return correct state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm:{
                username:'admin',
                password:'123',
                isLoading:false
            },
        }
        expect(getLoginState(state as StateSchema)).toEqual({username:'admin',  password:'123', isLoading:false});
    })
})
