import {StateSchema} from "app/providers/StoreProvider";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {getProfileData} from "./getProfileData";

describe('getProfileData', () => {
    test('should return correct data', () => {
        const data = {
            username:'admin',
            firstname:'Name',
            lastname:'Surname',
            age:18,
            city:'LA',
            country: Country.RUSSIA,
            currency:Currency.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile:{
                data,
                isLoading:false,
                readonly:true
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data);
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
})
