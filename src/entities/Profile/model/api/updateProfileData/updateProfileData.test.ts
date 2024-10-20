import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {updateProfileData} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
describe('updateProfileData.test', () => {
    test('success update', async () => {
        const data = {
            username:'admin',
            firstname:'Name',
            lastname:'Surname',
            age:18,
            city:'LA',
            country: Country.USA,
            currency:Currency.USD,
        }
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile:{
                isLoading:false,
                readonly:true,
                form:data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toBe(data);
        expect(result.meta.requestStatus).toBe('fulfilled');
    })
})