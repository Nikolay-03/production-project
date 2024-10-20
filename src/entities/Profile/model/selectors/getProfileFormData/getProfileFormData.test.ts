import {StateSchema} from "app/providers/StoreProvider";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {getProfileFormData} from "./getProfileFormData";

describe('getProfileFormData', () => {
    test('should return correct formData', () => {
        const form = {
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
                form,
                isLoading:false,
                readonly:true
            }
        }
        expect(getProfileFormData(state as StateSchema)).toEqual(form);
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    })
})
