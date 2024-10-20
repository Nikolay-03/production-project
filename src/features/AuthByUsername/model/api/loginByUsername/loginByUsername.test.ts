import {loginByUsername} from "features/AuthByUsername/model/api/loginByUsername/loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = {username:"123", id:"1"}
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}));
        const result = await thunk.callThunk({username:"123", password:"123"})
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toBe(userValue);
        expect(result.meta.requestStatus).toBe('fulfilled');
    })
    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({stats:403}));
        const result = await thunk.callThunk({username:"123", password:"123"})
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    })
})