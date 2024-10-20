import {StateSchema} from "app/providers/StoreProvider";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {getProfileIsLoading} from "./getProfileIsLoading";

describe('getProfileIsLoading', () => {
    test('should return correct loading state', () => {
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
                isLoading:true,
                readonly:true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    })
})
