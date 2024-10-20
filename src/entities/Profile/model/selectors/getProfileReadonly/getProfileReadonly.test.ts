import {StateSchema} from "app/providers/StoreProvider";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {getProfileReadonly} from "./getProfileReadonly";

describe('getProfileReadonly', () => {
    test('should return correct readonly state', () => {
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
                readonly:true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    })
})
