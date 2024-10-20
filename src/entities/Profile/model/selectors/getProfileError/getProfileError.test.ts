import {StateSchema} from "app/providers/StoreProvider";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {getProfileError} from "./getProfileError";

describe('getProfileError', () => {
    test('should return correct error', () => {
        const data = {
            username:'admin',
            firstname:'Name',
            lastname:'Surname',
            age:18,
            city:'LA',
            country: Country.USA,
            currency:Currency.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile:{
                data,
                isLoading:false,
                error:'error',
                readonly:true
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('error');
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileError(state as StateSchema)).toEqual('');
    })
})
