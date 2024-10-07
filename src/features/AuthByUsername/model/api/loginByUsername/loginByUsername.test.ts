import axios from "axios";
import {loginByUsername} from "features/AuthByUsername/model/api/loginByUsername/loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib";
jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {

    test('success login', async () => {
        const userValue = {username:"123", id:"1"}
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username:"123", password:"123"})
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toBe(userValue);
        expect(result.meta.requestStatus).toBe('fulfilled');
    })
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({stats:403}));
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username:"123", password:"123"})
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    })
})