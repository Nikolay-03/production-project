import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchProfileData, profileActions} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
describe('fetchProfileData.test', () => {
    test('success', async () => {
        const data = {
            username:'admin',
            firstname:'Name',
            lastname:'Surname',
            age:18,
            city:'LA',
            country: Country.USA,
            currency:Currency.USD,
        }
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk()
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toBe(data);
        expect(result.meta.requestStatus).toBe('fulfilled');
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({stats:403}));
        const result = await thunk.callThunk()
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    })
})