import {StateSchema} from "app/providers/StoreProvider";
import {getLoginLoading} from "features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading";

describe('getLoginLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm:{
                username:'',
                password:'',
                isLoading:true
            },
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    })
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    })
})
